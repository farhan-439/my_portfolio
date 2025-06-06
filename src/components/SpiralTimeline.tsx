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

// Icons
const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CodeIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  videoURL: string;
  liveUrl: string;
  codeUrl: string;
  impact: string;
  featured: boolean;
}

const featuredProjects: Project[] = [
  {
    title: 'AI-Powered E-Commerce Platform',
    category: 'Full-Stack Web',
    description: 'Complete e-commerce solution with ML-driven product recommendations and real-time inventory management.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TensorFlow', 'AWS'],
    videoURL: demo1,
    liveUrl: 'https://ecommerce-demo.farhan.dev',
    codeUrl: 'https://github.com/farhan/ecommerce-platform',
    impact: '40% increase in user engagement',
    featured: true
  },
  {
    title: 'Stock Price Prediction Model',
    category: 'Machine Learning',
    description: 'LSTM neural network predicting stock prices with 87% accuracy using technical indicators and sentiment analysis.',
    techStack: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'React'],
    videoURL: demo2,
    liveUrl: 'https://stockai-demo.farhan.dev',
    codeUrl: 'https://github.com/farhan/stock-prediction',
    impact: '87% prediction accuracy',
    featured: true
  },
  {
    title: 'Real-Time Social Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard processing 10M+ social media posts daily with sentiment analysis and trend detection.',
    techStack: ['React', 'D3.js', 'GraphQL', 'Redis', 'Docker'],
    videoURL: demo3,
    liveUrl: 'https://social-analytics.farhan.dev',
    codeUrl: 'https://github.com/farhan/social-dashboard',
    impact: '10M+ posts processed daily',
    featured: true
  },
  {
    title: 'Collaborative Task Management',
    category: 'Full-Stack Web',
    description: 'Team productivity app with real-time collaboration, smart notifications, and advanced project analytics.',
    techStack: ['Vue.js', 'Express', 'Socket.io', 'MongoDB', 'Redis'],
    videoURL: demo1,
    liveUrl: 'https://taskflow.farhan.dev',
    codeUrl: 'https://github.com/farhan/taskflow',
    impact: '300+ active teams',
    featured: true
  },
  {
    title: 'Weather Pattern Analysis Tool',
    category: 'Data Science',
    description: 'Climate data visualization tool analyzing 50+ years of weather patterns with predictive modeling capabilities.',
    techStack: ['Python', 'FastAPI', 'Plotly', 'Scikit-learn', 'Docker'],
    videoURL: demo2,
    liveUrl: 'https://weather-analysis.farhan.dev',
    codeUrl: 'https://github.com/farhan/weather-analysis',
    impact: '50+ years of data analyzed',
    featured: true
  },
  {
    title: 'Mobile Banking Interface',
    category: 'Mobile Development',
    description: 'Secure mobile banking app with biometric authentication, transaction categorization, and spending insights.',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Stripe'],
    videoURL: demo3,
    liveUrl: 'https://banking-demo.farhan.dev',
    codeUrl: 'https://github.com/farhan/mobile-banking',
    impact: 'Bank-grade security',
    featured: true
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isInView 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full">
        {/* Video Preview */}
        <div className="h-48 bg-gray-900 flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"></div>
          
          <video
            className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
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
          
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg z-0">
            {project.title}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full z-20">
            {project.category}
          </div>
          
          {/* Impact Badge */}
          <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full z-20 font-semibold">
            {project.impact}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-cyan-100 dark:hover:bg-cyan-900 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-cyan-500 hover:text-cyan-500 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <CodeIcon />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpiralTimeline: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Full-Stack Web', 'Machine Learning', 'Data Visualization', 'Data Science', 'Mobile Development'];
  
  const filteredProjects = filter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === filter);

  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A curated selection of my best work showcasing full-stack development, 
            machine learning, and data visualization expertise.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub for additional projects and contributions to open source.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/farhanmashrur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <CodeIcon />
                View All on GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiralTimeline;