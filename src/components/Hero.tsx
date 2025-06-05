import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Optional: Subtle particle animation background could go here */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-thin text-white">
          Farhan Mashrur
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Full-Stack Engineer & AI-Driven Innovator
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-cyan-500 text-white hover:bg-cyan-500 hover:text-black transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-cyan-500 text-white hover:bg-cyan-500 hover:text-black transition"
          >
            Download Résumé
          </a>
        </div>
      </div>
      {/* Optional: Very faint overlay or glitch effect on load */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Hero;
