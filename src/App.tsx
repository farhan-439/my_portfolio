import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileHero from './components/MobileHero';
import About from './components/About';
import Skills from './components/Skills';
import SpiralTimeline from './components/SpiralTimeline';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      {/* Hero / MobileHero */}
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block md:hidden">
        <MobileHero />
      </div>

      <Navbar />

      <main className="pt-16">
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="timeline">
          <SpiralTimeline />
        </section>

        <section id="contacts">
          <Contacts />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
