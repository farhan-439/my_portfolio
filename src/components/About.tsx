import React from 'react';
import profileImg from '../assets/profile.jpg';

const EducationIcon = () => (
  <svg className="h-8 w-8 text-cyan-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-8 w-8 text-cyan-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const LightningIcon = () => (
  <svg className="h-8 w-8 text-cyan-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center">
      {/* Photo */}
      <div className="w-48 h-48 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <img 
          src={profileImg} 
          alt="Farhan Mashrur"
          className="rounded-full border-4 border-cyan-500 object-cover w-full h-full"
        />
      </div>

      {/* Bio and Pillars */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a passionate computer science student at Cornell University with a deep interest in full-stack development, 
          machine learning research, and behavioral economics. I love building innovative solutions that bridge technology 
          and human behavior, always striving to create meaningful impact through code.
        </p>

        {/* Pillars Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200 dark:bg-gray-800 py-4 px-3 rounded-lg flex flex-col items-center transform hover:scale-[1.02] transition">
            <EducationIcon />
            <span className="text-black dark:text-white font-medium text-center">Cornell University '27</span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 py-4 px-3 rounded-lg flex flex-col items-center transform hover:scale-[1.02] transition">
            <CheckIcon />
            <span className="text-black dark:text-white font-medium text-center">React · Flask · Python · AWS</span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 py-4 px-3 rounded-lg flex flex-col items-center transform hover:scale-[1.02] transition">
            <LightningIcon />
            <span className="text-black dark:text-white font-medium text-center">Behavioral Econ · ML Research · Coding Competitions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;