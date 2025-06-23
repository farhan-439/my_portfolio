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
  const [nameTransition, setNameTransition] = useState(false);

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
    script.onload = () => {
      console.log('Spline viewer script loaded');
      setSplineLoaded(true);
      
      // Trigger name transition after robot loads
      setTimeout(() => {
        setNameTransition(true);
      }, 1500); // Wait 1.5 seconds after robot loads
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
        setNameTransition(true);
      }, 1500);
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

      {/* Name - Apple Style, On Top */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-tight leading-none">
            Farhan Mashrur
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;