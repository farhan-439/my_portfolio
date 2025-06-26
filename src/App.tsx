import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';

import SpiralTimeline from './components/SpiralTimeline';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import LeadershipSection from './components/LeadershipSection';
import ExperienceSection from './components/ExperienceSection';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      {/* Hero / MobileHero */}
      <div className="">
        <Hero />
      </div>

      <Navbar />

  

      <main className="">
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <ExperienceSection />
        </section>

        <section id="timeline">
          <SpiralTimeline />
        </section>



        <section id="leadership">
          <LeadershipSection />
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
