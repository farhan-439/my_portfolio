// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';

// Declare the spline-viewer custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
        onLoad?: () => void;
        onError?: () => void;
      };
    }
  }
}

const Hero: React.FC = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showGeometry, setShowGeometry] = useState(true);

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
    script.onload = () => {
      console.log('Spline viewer script loaded');
      setSplineLoaded(true);
      
      // Wait a few seconds after model loads before hiding geometry
      setTimeout(() => {
        setShowGeometry(false);
      }, 1000); // 3 seconds after model loads
    };
    script.onerror = () => {
      console.error('Failed to load Spline viewer script');
    };
    
    // Only add script if not already present
    if (!document.querySelector('script[src*="spline-viewer.js"]')) {
      document.head.appendChild(script);
    } else {
      setSplineLoaded(true);
      setTimeout(() => {
        setShowGeometry(false);
      }, 3000);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src*="spline-viewer.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Big Spline Robot - Background */}
      <div className="absolute inset-0 z-0">
        {splineLoaded && (
          <spline-viewer
            url="https://prod.spline.design/WIl33gpqqNooodtF/scene.splinecode"
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

      {/* Breathing Light Animation */}
      {showGeometry && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            
            {/* Main breathing light */}
            <div 
              className="w-4 h-4 bg-white rounded-full"
              style={{
                animation: 'breathe 2s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)'
              }}
            ></div>
            
            {/* Outer ring */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 rounded-full"
              style={{
                animation: 'breatheRing 2s ease-in-out infinite 0.3s'
              }}
            ></div>
            
            {/* Outer ring 2 */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full"
              style={{
                animation: 'breatheRing 2s ease-in-out infinite 0.6s'
              }}
            ></div>
            
          </div>
        </div>
      )}

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1);
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.5), 0 0 90px rgba(255, 255, 255, 0.3);
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
    </div>
  );
};

export default Hero;