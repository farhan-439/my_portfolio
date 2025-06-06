import React from 'react';
import profileImg from '../assets/profile.jpg';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

const MobileHero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-70"></div>
      
      {/* Profile Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-500 overflow-hidden z-10">
        <img 
          src={profileImg} 
          alt="Farhan Mashrur"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Tagline */}
      <h1 className="mt-6 text-3xl md:text-4xl font-thin text-black dark:text-white z-10 text-center">
        Farhan Mashrur
      </h1>
      <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 z-10 text-center">
        Cornell CS Student | Full-Stack Developer | ML Researcher
      </p>

      {/* Project Demo Videos */}
      <div className="mt-8 flex space-x-4 overflow-x-auto z-10 pb-2">
        {[demo1, demo2, demo3].map((video, i) => (
          <div key={i} className="flex-shrink-0 w-28 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 border-gray-700">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex flex-col space-y-3 z-10">
        <a
          href="#timeline"
          className="px-5 py-2 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-black dark:hover:text-white transition text-center"
        >
          Explore Timeline
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-black dark:hover:text-white transition text-center"
        >
          Download Résumé
        </a>
      </div>
    </div>
  );
};

export default MobileHero;