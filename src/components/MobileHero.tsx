import React, { useState, useEffect } from 'react';

const MobileHero: React.FC<{ onSceneReady?: () => void }> = ({ onSceneReady }) => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showGeometry, setShowGeometry] = useState(true);

  useEffect(() => {
    // Load the Spline viewer script for mobile
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.19/build/spline-viewer.js';
    script.onload = () => {
      console.log('Mobile Spline viewer script loaded');
      setSplineLoaded(true);
      
      // Wait a few seconds after model loads before hiding geometry
      setTimeout(() => {
        setShowGeometry(false);
      }, 1000);
    };
    script.onerror = () => {
      console.error('Failed to load Mobile Spline viewer script');
    };
    
    // Only add script if not already present
    if (!document.querySelector('script[src*="@splinetool/viewer@1.10.19"]')) {
      document.head.appendChild(script);
    } else {
      setSplineLoaded(true);
      setTimeout(() => {
        setShowGeometry(false);
      }, 1000);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src*="@splinetool/viewer@1.10.19"]');
      
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    if (!splineLoaded) return;
    const viewer = document.querySelector('#top spline-viewer');
    if (!viewer) return;
    let cancelled = false;
    let timer: number;
    const checkCanvas = () => {
      const canvas = viewer.shadowRoot?.querySelector('canvas');
      if (canvas instanceof HTMLCanvasElement && canvas.style.visibility === 'visible' && canvas.width > 0) {
        if (!cancelled) onSceneReady?.();
      } else {
        timer = window.setTimeout(checkCanvas, 50);
      }
    };
    checkCanvas();
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [splineLoaded, onSceneReady]);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
        {/* Mobile Spline Robot - Background */}
        <div className="absolute inset-0 z-0">
          {splineLoaded && (
            // @ts-expect-error Spline viewer is a custom element not recognized by TypeScript
            <spline-viewer
              url="https://prod.spline.design/FzfAGO2OlQXxxpgj/scene.splinecode"
              
              style={{
                width: '100%',
                height: '100%',
                background: '#000000'
              }}
              className="w-full h-full"
            />
          )}
          
          {/* Loading state */}
          {!splineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white font-medium">Loading...</p>
              </div>
            </div>
          )}
        </div>

        {/* Breathing Light Animation - Mobile Optimized */}
        {showGeometry && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              
              {/* Main breathing light - smaller for mobile */}
              <div 
                className="w-3 h-3 bg-white rounded-full"
                style={{
                  animation: 'breathe 2s ease-in-out infinite',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.1)'
                }}
              ></div>
              
              {/* Outer ring - smaller for mobile */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/30 rounded-full"
                style={{
                  animation: 'breatheRing 2s ease-in-out infinite 0.3s'
                }}
              ></div>
              
              {/* Outer ring 2 - smaller for mobile */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 rounded-full"
                style={{
                  animation: 'breatheRing 2s ease-in-out infinite 0.6s'
                }}
              ></div>
              
            </div>
          </div>
        )}


      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.1);
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.5), 0 0 65px rgba(255, 255, 255, 0.3);
          }
        }
        
        @keyframes breatheRing {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.1;
          }
        }
      `}</style>
    </>
  );
};

export default MobileHero;
