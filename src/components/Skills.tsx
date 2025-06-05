import React from 'react';

const skillList = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'GraphQL',
  'Node.js',
  'Python',
  'Flask',
  'Django',
  'Tailwind CSS',
  'AWS',
  'Docker',
  'Git',
  'SQL',
  'MongoDB',
  'Machine Learning',
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold text-black dark:text-white text-center mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skillList.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black dark:hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
