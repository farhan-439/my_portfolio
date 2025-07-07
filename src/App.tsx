// App.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DesktopHero from './components/DesktopHero';
import MobileHero from './components/MobileHero';
import About from './components/About';
import SpiralTimeline from './components/SpiralTimeline';
import Contacts from './components/Contacts';
import LeadershipSection from './components/LeadershipSection';
import ExperienceSection from './components/ExperienceSection';
import AwardsSection from './components/AwardsSection';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check if device is mobile
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || (navigator as any).vendor;
      const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      // Consider it mobile if it's either a mobile device OR has a small screen
      setIsMobile(isMobileDevice || isSmallScreen);
    };
    
    // Check initially
    checkIsMobile();
    
    // Add event listener for window resize
    const handleResize = () => {
      checkIsMobile();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      {/* Conditional Hero Rendering */}
      <div className="">
        {isMobile ? (
          <div className="block md:hidden">
            <MobileHero />
          </div>
        ) : (
          <div className="hidden md:block">
            <DesktopHero />
          </div>
        )}
        {/* Fallback for edge cases - show mobile hero on small screens, desktop on large */}
        <div className="block md:hidden">
          {!isMobile && <MobileHero />}
        </div>
        <div className="hidden md:block">
          {isMobile && <DesktopHero />}
        </div>
      </div>
      
      <Navbar />
      
      <main className="">
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>

        
        <section id="projects">
          <SpiralTimeline />
        </section>
        
        <section id="leadership">
          <LeadershipSection />
        </section>

                
        <section id="awards">
          <AwardsSection />
        </section>
        
        
        <section id="contact">
          <Contacts />
        </section>
      </main>
    </div>
  );
};

export default App;