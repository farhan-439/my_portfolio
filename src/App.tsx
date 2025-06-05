import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileHero from './components/MobileHero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* 
        - On desktop: show Hero; on small/mobile: show MobileHero 
        - Tailwind’s `hidden`/`block` with responsive prefixes 
      */}
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block md:hidden">
        <MobileHero />
      </div>

      <Navbar />

      <main className="pt-16">
        {/* The `id` attributes let Navbar links scroll to these sections */}
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
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
