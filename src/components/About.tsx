import React from 'react';
import profilePic from '../assets/profile.jpg';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center">
      {/* PHOTO */}
      <div className="w-48 h-48 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <img
          src={profilePic}
          alt="Farhan Mashrur"
          className="rounded-full border-4 border-cyan-500 object-cover w-full h-full"
        />
      </div>

      {/* BIO + PILLARS */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m Farhan Mashrur, a junior at Cornell University double‐majoring in Computer Science
          and Economics (Class of ’27). I build AI-powered tools, lead student teams, and love
          optimizing full-stack workflows.
        </p>

        {/* PILLARS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200 dark:bg-gray-800 py-4 px-3 rounded-lg flex flex-col items-center transform hover:scale-[1.02] transition">
            {/* Education Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-cyan-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.64M12 
                   14L5.84 10.578a12.083 12.083 0 000 6.64M12 14v7"
              />
            </svg>
            <p className="text-black dark:text-white font-medium">Cornell University ’27</p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 py-4 px-3 rounded-lg flex flex-col items-center transform hover:scale-[1.02] transition">
            {/* Skills Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-cyan-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L15 12l-5.25-5"
              />
            </svg>
            <p className="text-black dark:text-white font-medium">
              React · Flask · Python · AWS
            </p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 py-4 px-3 rounded-lg flex flex-col items-center transform hover:scale-[1.02] transition">
            {/* Interests Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-cyan-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="text-black dark:text-white font-medium">
              Behavioral Econ · ML Research · Coding Competitions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
