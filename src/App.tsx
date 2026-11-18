import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import PortfolioContent from './components/PortfolioContent';
import './robot-intro.css';

const DesktopHero = lazy(() => import('./components/DesktopHero'));
const MobileHero = lazy(() => import('./components/MobileHero'));

const faceDots = Array.from({ length: 13 }, (_, row) => {
  const y = 30 + row * 16;
  const halfWidth = row < 3 ? 50 + row * 14 : row < 9 ? 88 : 88 - (row - 8) * 14;
  return Array.from({ length: 13 }, (_, column) => {
    const x = 24 + column * 16;
    return { x, y, row, column, visible: Math.abs(x - 120) <= halfWidth };
  }).filter(dot => dot.visible);
}).flat();

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [sceneReady, setSceneReady] = useState(false);
  const [introRevealing, setIntroRevealing] = useState(false);
  const [introDissolving, setIntroDissolving] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const introStarted = useRef(performance.now());

  const revealRobot = useCallback(() => {
    setSceneReady(true);
  }, []);

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
    const fallback = window.setTimeout(() => setIntroRevealing(true), 7000);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!sceneReady) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const remaining = Math.max(0, (reducedMotion ? 0 : 950) - (performance.now() - introStarted.current));
    const timer = window.setTimeout(() => setIntroRevealing(true), remaining);
    return () => window.clearTimeout(timer);
  }, [sceneReady]);

  useEffect(() => {
    if (!introRevealing) return;
    const remaining = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 540;
    const timer = window.setTimeout(() => setIntroDissolving(true), remaining);
    return () => window.clearTimeout(timer);
  }, [introRevealing]);

  useEffect(() => {
    if (!introDissolving) return;
    const timer = window.setTimeout(() => setIntroVisible(false), 260);
    return () => window.clearTimeout(timer);
  }, [introDissolving]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      <section id="top" className="robot-hero" aria-label="Interactive robot introduction" data-scene-ready={sceneReady}>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          {isMobile ? <MobileHero onSceneReady={revealRobot} /> : <DesktopHero onSceneReady={revealRobot} />}
        </Suspense>
        {introVisible && <div className={`robot-intro ${introRevealing ? 'is-revealing' : ''} ${introDissolving ? 'is-dissolving' : ''}`} aria-live="polite">
          <div className="robot-intro-head"><span>FARHAN MASHRUR</span><span>PORTFOLIO / 2027</span></div>
          <div className="robot-intro-center"><span className="robot-intro-kicker">CORNELL UNIVERSITY · MAY 2027</span><svg className="robot-dot-face" viewBox="0 0 240 255" aria-hidden="true">{faceDots.map((dot, index) => {
            const eye = (dot.row === 5 || dot.row === 6) && ((dot.x >= 72 && dot.x <= 104) || (dot.x >= 136 && dot.x <= 168));
            const style = { '--dot-x': `${((index * 47) % 120) - 60}px`, '--dot-y': `${((index * 83) % 130) - 65}px`, animationDelay: `${(index * 13) % 150}ms` } as React.CSSProperties;
            return <circle key={`${dot.row}-${dot.column}`} className={eye ? 'is-eye' : ''} cx={dot.x} cy={dot.y} r={eye ? 4.1 : 3.5} style={style}/>;
          })}</svg><strong>Farhan Mashrur<span>.</span></strong><p>Loading interactive scene</p></div>
          <div className="robot-intro-bottom"><span>SOFTWARE ENGINEERING · MACHINE LEARNING · RESEARCH</span><div className="robot-intro-progress" aria-hidden="true"><span/></div></div>
        </div>}
      </section>
      <Navbar />
      <PortfolioContent />
    </div>
  );
};

export default App;
