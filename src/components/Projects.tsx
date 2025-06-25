import React from 'react';

/**
 * Replace these placeholder objects with your actual project data.
 */
interface Project {
  title: string;
  description: string;
  techStack: string;
  thumbnail: string;
  githubLink: string;
  liveDemoLink?: string;
  videoURL?: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Resume Scorer',
    description:
      'A full-stack engine that parses resumes and job descriptions to produce a compatibility score (95%+ precision). Built with React, Flask, and Docker.',
    techStack: 'React, Flask, Docker, NLP',
    thumbnail: '/src/assets/project1.png',
    githubLink: 'https://github.com/your-username/resume-scorer',
    liveDemoLink: 'https://resumescorer.example.com',
    videoURL: 'https://example.com/video1.mp4',
  },
  {
    title: 'Restaurant Review Scraper',
    description:
      'Automated scraper & sentiment analyzer for Yelp reviews using Python, BeautifulSoup, and a custom ML model.',
    techStack: 'Python, BeautifulSoup, TensorFlow, AWS Lambda',
    thumbnail: '/src/assets/project2.png',
    githubLink: 'https://github.com/your-username/review-scraper',
    videoURL: 'https://example.com/video2.mp4',
  },
  {
    title: 'Real-Time Office Seating System',
    description:
      'Spring Boot microservices integrated with AWS DynamoDB & S3 powering a seating dashboard for 400+ employees.',
    techStack: 'Java, Spring Boot, AWS DynamoDB, AWS S3',
    thumbnail: '/src/assets/project3.png',
    githubLink: 'https://github.com/your-username/office-seating',
    liveDemoLink: 'https://officemap.example.com',
  },
  // …add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight text-black mb-4">Projects</h2>
          <div className="w-16 md:w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Thumbnail or GIF clip */}
              <div className="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={proj.thumbnail}
                  alt={`${proj.title} thumbnail`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-medium mb-3 text-black">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {proj.description}
                </p>
                <p className="text-gray-600 text-xs mb-4">
                  <span className="font-medium text-black">
                    Stack:{' '}
                  </span>
                  {proj.techStack}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                    title="View on GitHub"
                  >
                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 
                           12.016c0 4.426 2.865 8.183 6.839 
                           9.504.5.092.682-.217.682-.483 
                           0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 
                           1.004.071 1.531 1.032 1.531 1.032.892 
                           1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                           0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.27.098-2.647 
                           0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 
                           6.844c.85.004 1.705.115 2.504.337 1.909-1.294 
                           2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 
                           2.647.64.7 1.028 1.595 1.028 2.688 
                           0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 
                           1.852 0 1.337-.012 2.419-.012 2.748 
                           0 .268.18.58.688.482A10.025 10.025 0 0022 
                           12.016C22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {proj.liveDemoLink && (
                    <a
                      href={proj.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                      title="Live Demo"
                    >
                      {/* External Link Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7m0 0v7m0-7L10 14m-4 2v5a2 
                             2 0 002 2h5"
                        />
                      </svg>
                    </a>
                  )}

                  {proj.videoURL && (
                    <a
                      href={proj.videoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                      title="Watch Demo"
                    >
                      {/* Play Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
      'Automated scraper & sentiment analyzer for Yelp reviews using Python, BeautifulSoup, and a custom ML model.',
    techStack: 'Python, BeautifulSoup, TensorFlow, AWS Lambda',
    thumbnail: '/src/assets/project2.png',
    githubLink: 'https://github.com/your-username/review-scraper',
    videoURL: 'https://example.com/video2.mp4',
  },
  {
    title: 'Real-Time Office Seating System',
    description:
      'Spring Boot microservices integrated with AWS DynamoDB & S3 powering a seating dashboard for 400+ employees.',
    techStack: 'Java, Spring Boot, AWS DynamoDB, AWS S3',
    thumbnail: '/src/assets/project3.png',
    githubLink: 'https://github.com/your-username/office-seating',
    liveDemoLink: 'https://officemap.example.com',
  },
  // …add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight text-black mb-4">Projects</h2>
          <div className="w-16 md:w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Thumbnail or GIF clip */}
              <div className="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={proj.thumbnail}
                  alt={`${proj.title} thumbnail`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-medium mb-3 text-black">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {proj.description}
                </p>
                <p className="text-gray-600 text-xs mb-4">
                  <span className="font-medium text-black">
                    Stack:{' '}
                  </span>
                  {proj.techStack}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                    title="View on GitHub"
                  >
                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 
                           12.016c0 4.426 2.865 8.183 6.839 
                           9.504.5.092.682-.217.682-.483 
                           0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 
                           1.004.071 1.531 1.032 1.531 1.032.892 
                           1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                           0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.27.098-2.647 
                           0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 
                           6.844c.85.004 1.705.115 2.504.337 1.909-1.294 
                           2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 
                           2.647.64.7 1.028 1.595 1.028 2.688 
                           0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 
                           1.852 0 1.337-.012 2.419-.012 2.748 
                           0 .268.18.58.688.482A10.025 10.025 0 0022 
                           12.016C22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {proj.liveDemoLink && (
                    <a
                      href={proj.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                      title="Live Demo"
                    >
                      {/* External Link Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7m0 0v7m0-7L10 14m-4 2v5a2 
                             2 0 002 2h5"
                        />
                      </svg>
                    </a>
                  )}

                  {proj.videoURL && (
                    <a
                      href={proj.videoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                      title="Watch Demo"
                    >
                      {/* Play Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;