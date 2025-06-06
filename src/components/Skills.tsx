import React from 'react';

const Skills: React.FC = () => {
  const skillList = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 
    'Flask', 'Django', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 
    'Tailwind CSS', 'GraphQL', 'Git', 'Machine Learning', 'TensorFlow', 
    'Pandas', 'NumPy', 'Scikit-learn', 'FastAPI', 'Redis', 'Kubernetes'
  ];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold text-black dark:text-white text-center mb-8">
        Skills & Technologies
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
    </section>
  );
};

export default Skills;