import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import PortfolioContent from './components/PortfolioContent';
import './robot-intro.css';

const DesktopHero = lazy(() => import('./components/DesktopHero'));
const MobileHero = lazy(() => import('./components/MobileHero'));

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [sceneReady, setSceneReady] = useState(false);
  const [minimumPassed, setMinimumPassed] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
      setIsMobile(mobileDevice || window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minimum = window.setTimeout(() => setMinimumPassed(true), reducedMotion ? 0 : 1400);
    const fallback = window.setTimeout(() => setIntroComplete(true), 8000);
    return () => { window.clearTimeout(minimum); window.clearTimeout(fallback); };
  }, []);

  useEffect(() => {
    if (sceneReady && minimumPassed) setIntroComplete(true);
  }, [sceneReady, minimumPassed]);

  useEffect(() => {
    if (!introComplete) return;
    const timer = window.setTimeout(() => setIntroVisible(false), 480);
    return () => window.clearTimeout(timer);
  }, [introComplete]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      <section id="top" className="robot-hero" aria-label="Interactive robot introduction">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          {isMobile ? <MobileHero onSceneReady={() => setSceneReady(true)} /> : <DesktopHero onSceneReady={() => setSceneReady(true)} />}
        </Suspense>
        {introVisible && <div className={`robot-intro ${introComplete ? 'is-complete' : ''}`} aria-live="polite">
          <div className="robot-intro-head"><span>FARHAN MASHRUR</span><span>INTERACTIVE PORTFOLIO / 2027</span></div>
          <div className="robot-intro-core" aria-hidden="true"><div className="robot-intro-orbit"><div className="robot-intro-signal"><i/><i/><i/></div></div></div>
          <div className="robot-intro-bottom"><div><span className="robot-intro-label">{introComplete ? 'SCENE READY' : 'LOADING INTERACTIVE SCENE'}</span><div className="robot-intro-progress"><span/></div></div><span className="robot-intro-index">01 / 01</span></div>
        </div>}
      </section>
      <Navbar />
      <PortfolioContent />
    </div>
  );
};

export default App;
