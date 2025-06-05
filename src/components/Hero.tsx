import React from 'react';
import profilePic from '../assets/profile.jpg';

/**
 * Replace these demo items with your own project/video list.
 */
const demoProjects = [
  {
    title: 'AI Resume Scorer',
    videoURL: '/src/assets/demo1.mp4',
  },
  {
    title: 'Review Scraper',
    videoURL: '/src/assets/demo2.mp4',
  },
  {
    title: 'Office Seating System',
    videoURL: '/src/assets/demo3.mp4',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden px-4">
      {/* PROFILE PICTURE */}
      <img
        src={profilePic}
        alt="Farhan Mashrur"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 object-cover z-10"
      />

      {/* NAME + TAGLINE */}
      <h1 className="mt-6 text-4xl md:text-5xl font-thin text-black dark:text-white z-10">
        Farhan Mashrur
      </h1>
      <p className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-300 z-10">
        Full-Stack Engineer & AI-Driven Innovator
      </p>

      {/* HORIZONTAL RUNNING VIDEOS STRIP */}
      <div className="mt-8 flex space-x-4 overflow-x-auto z-10 pb-2">
        {demoProjects.map((proj) => (
          <div
            key={proj.title}
            className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden border-2 border-gray-700"
          >
            <video
              src={proj.videoURL}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex space-x-4 z-10">
        <a
          href="#timeline"
          className="px-5 py-2 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-black transition"
        >
          Explore Timeline
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-black transition"
        >
          Download Résumé
        </a>
      </div>

      {/* FAINT OVERLAY */}
      <div className="absolute inset-0 bg-white opacity-60 dark:bg-black dark:opacity-60"></div>
    </div>
  );
};

export default Hero;
