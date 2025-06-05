import React from 'react';

const MobileHero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black overflow-hidden px-6">
      <div className="z-10 text-center">
        <h1 className="text-4xl font-thin text-white">
          Farhan Mashrur
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Full-Stack & AI-Driven
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <a
            href="#projects"
            className="px-4 py-2 border-2 border-cyan-500 text-white hover:bg-cyan-500 hover:text-black transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-cyan-500 text-white hover:bg-cyan-500 hover:text-black transition"
          >
            Download Résumé
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
};

export default MobileHero;
