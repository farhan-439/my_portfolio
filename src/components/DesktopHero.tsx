// src/components/DesktopHero.tsx
import React, { useState, useEffect } from 'react';



// (Moved JSX.IntrinsicElements augmentation to a .d.ts file for proper type extension)

const DesktopHero: React.FC = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showGeometry, setShowGeometry] = useState(true);

  useEffect(() => {
    // Load the Spline viewer script for desktop
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
    script.onload = () => {
      console.log('Desktop Spline viewer script loaded');
      setSplineLoaded(true);
      
      // Wait a few seconds after model loads before hiding geometry
      setTimeout(() => {
        setShowGeometry(false);
      }, 1000);
    };
    script.onerror = () => {
      console.error('Failed to load Desktop Spline viewer script');
    };
    
    // Only add script if not already present
    if (!document.querySelector('script[src*="@splinetool/viewer@1.10.13"]')) {
      document.head.appendChild(script);
    } else {
      setSplineLoaded(true);
      setTimeout(() => {
        setShowGeometry(false);
      }, 1000);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src*="@splinetool/viewer@1.10.13"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Desktop Spline Robot - Background */}
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

      {/* Sticky Social Media Links */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourusername" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:scale-110 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

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

export default DesktopHero;