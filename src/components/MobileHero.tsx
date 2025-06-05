import React from 'react';
import profilePic from '../assets/profile.jpg';

/**
 * Same demo items; adjust as needed.
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

const MobileHero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden px-6">
      {/* PROFILE PIC */}
      <img
        src={profilePic}
        alt="Farhan Mashrur"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-500 object-cover z-10"
      />

      {/* NAME + TAGLINE */}
      <h1 className="mt-4 text-3xl font-thin text-black dark:text-white z-10">
        Farhan Mashrur
      </h1>
      <p className="mt-1 text-base text-gray-600 dark:text-gray-300 z-10">
        Full-Stack & AI-Driven
      </p>

      {/* VIDEOS STRIP */}
      <div className="mt-6 flex space-x-3 overflow-x-auto z-10 pb-2">
        {demoProjects.map((proj) => (
          <div
            key={proj.title}
            className="flex-shrink-0 w-28 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 border-gray-700"
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
      <div className="mt-6 flex flex-col space-y-3 z-10">
        <a
          href="#timeline"
          className="px-4 py-2 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-black transition text-center"
        >
          Explore Timeline
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-black transition text-center"
        >
          Download Résumé
        </a>
      </div>

      {/* FAINT OVERLAY */}
      <div className="absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-70"></div>
    </div>
  );
};

export default MobileHero;
