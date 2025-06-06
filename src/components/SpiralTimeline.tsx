import React, { useRef, useEffect, useState } from 'react';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-50px', ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
};

interface Project {
  title: string;
  year: string;
  tech: string;
  description: string;
  videoURL: string;
}

const projects: Project[] = [
  { 
    title: 'E-Commerce Platform', 
    year: '2024', 
    tech: 'React, Node.js, MongoDB', 
    description: 'Full-stack e-commerce solution with payment integration and inventory management',
    videoURL: demo1
  },
  { 
    title: 'ML Prediction Model', 
    year: '2024', 
    tech: 'Python, TensorFlow, Flask', 
    description: 'Machine learning model for stock price prediction with 85% accuracy',
    videoURL: demo2
  },
  { 
    title: 'Social Media Dashboard', 
    year: '2023', 
    tech: 'React, GraphQL, PostgreSQL', 
    description: 'Analytics dashboard for social media management with real-time insights',
    videoURL: demo3
  },
  { 
    title: 'Task Management App', 
    year: '2023', 
    tech: 'Vue.js, Express, Redis', 
    description: 'Collaborative task management with real-time updates and team collaboration',
    videoURL: demo1
  },
  { 
    title: 'Weather Analytics Tool', 
    year: '2023', 
    tech: 'Python, FastAPI, Docker', 
    description: 'Weather data analysis and visualization tool with predictive modeling',
    videoURL: demo2
  },
  { 
    title: 'Portfolio Website', 
    year: '2022', 
    tech: 'React, TypeScript, Tailwind', 
    description: 'Personal portfolio showcasing modern design principles and responsive layouts',
    videoURL: demo3
  }
];

const TimelineItem: React.FC<{ project: Project; index: number; isLeft: boolean }> = ({ 
  project, 
  index, 
  isLeft 
}) => {
  const [ref, isInView] = useInView();
  
  return (
    <div className={`flex items-center mb-16 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Content */}
      <div 
        ref={ref}
        className={`w-5/12 transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isLeft ? 'translate-x-8' : '-translate-x-8'}`
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Video Section */}
          <div className="h-32 md:h-40 bg-gray-900 flex items-center justify-center overflow-hidden relative">
            {/* Fallback background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"></div>
            
            {/* Video */}
            <video
              className="w-full h-full object-cover relative z-10"
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => {
                (e.target as HTMLVideoElement).style.display = 'none';
              }}
            >
              <source src={project.videoURL} type="video/mp4" />
            </video>
            
            {/* Fallback content */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg z-0">
              {project.title}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-cyan-500 font-bold text-lg">{project.year}</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                {project.tech}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Center line and dot */}
      <div className="flex flex-col items-center w-2/12">
        <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 relative">
          <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20"></div>
        </div>
        {index < projects.length - 1 && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-gray-300 dark:to-gray-600 mt-2"></div>
        )}
      </div>
      
      {/* Empty space */}
      <div className="w-5/12"></div>
    </div>
  );
};

const SpiralTimeline: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white text-center mb-16">
          Project Timeline
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <TimelineItem 
              key={index}
              project={project}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
        
        {/* Timeline Legend */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            This timeline showcases my development journey through various projects, 
            highlighting the evolution of my technical skills and creative problem-solving abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpiralTimeline;