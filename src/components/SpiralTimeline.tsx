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
const TrophyIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const CodeIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const BrainIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

interface Project {
  title: string;
  category: 'Startup' | 'Machine Learning' | 'Full-Stack' | 'Data Analysis' | 'Academic';
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  videoURL: string;
  githubUrl?: string;
  liveUrl?: string;
  award?: string;
  icon: React.ComponentType;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'JobLink',
    category: 'Startup',
    period: 'Feb 2025 - Present',
    description: 'Co-founded AI-powered job tracking platform that auto-parses Gmail to unify job application data.',
    technologies: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'spaCy'],
    highlights: [
      'Built NLP pipeline with 97.82% precision',
      'Raised beta engagement by 40%'
    ],
    videoURL: demo2,
    githubUrl: 'https://github.com/farhan/joblink',
    liveUrl: 'https://joblink.app',
    icon: BrainIcon,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Poultry Disease Detection',
    category: 'Machine Learning',
    period: 'Feb 2025',
    description: 'AI system that detects poultry infections 3 days before onset using audio and visual analysis.',
    technologies: ['TensorFlow', 'PyTorch', 'CNN', 'MobileNetV3'],
    highlights: [
      '94% accuracy on spectrograms',
      '25ms inference on Raspberry Pi 4'
    ],
    videoURL: demo1,
    githubUrl: 'https://github.com/farhan/poultry-detection',
    award: '1st Place, Cornell Hackathon',
    icon: TrophyIcon,
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'TableTalk',
    category: 'Data Analysis',
    period: 'Oct 2024 - Dec 2024',
    description: 'Full-stack app analyzing restaurant reviews using ML to reveal customer sentiment patterns.',
    technologies: ['Python', 'Selenium', 'Flask', 'OpenAI'],
    highlights: [
      'Scraped 1K+ Google Maps reviews',
      '92% F1 score on sentiment analysis'
    ],
    videoURL: demo3,
    githubUrl: 'https://github.com/farhan/tabletalk',
    icon: ChartIcon,
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Real Estate Agent Ranking',
    category: 'Data Analysis',
    period: 'Jan 2025 - May 2025',
    description: 'Supervised learning model to rank high-potential real estate agents for recruitment.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'MLS Data'],
    highlights: [
      'Analyzed $650M+ firm with 175+ agents',
      'Multi-factor scoring system'
    ],
    videoURL: demo1,
    githubUrl: 'https://github.com/farhan/agent-ranking',
    icon: ChartIcon,
    gradient: 'from-orange-500 to-red-600'
  },
  {
    title: 'OCaml Trader',
    category: 'Academic',
    period: 'Sept 2024 - Dec 2024',
    description: 'Functional programming trading simulator with real-time data feeds and portfolio management.',
    technologies: ['OCaml', 'Lwt', 'Financial APIs'],
    highlights: [
      'Simulated 1000+ trades across 500 equities',
      'Sub-50ms price-fetch latency'
    ],
    videoURL: demo3,
    githubUrl: 'https://github.com/farhan/ocaml-trader',
    icon: CodeIcon,
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Stock Sentiment Platform',
    category: 'Full-Stack',
    period: 'Sept 2023 - Present',
    description: 'Real-time stock analysis platform with sentiment indicators and portfolio tracking.',
    technologies: ['React', 'Node.js', 'Financial APIs'],
    highlights: [
      'Covers 500+ stock tickers',
      'Improved engagement by 15%'
    ],
    videoURL: demo2,
    githubUrl: 'https://github.com/farhan/stock-sentiment',
    liveUrl: 'https://stock-sentiment.farhan.dev',
    icon: ChartIcon,
    gradient: 'from-blue-500 to-teal-600'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isInView] = useInView();
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const IconComponent = project.icon;
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
        
        {/* Content */}
        <div className="p-4">
          {/* Title, Video, and Period */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 mr-3">
              <div className="flex items-center gap-2 mb-1">
                <div className={`p-1 rounded-md bg-gradient-to-r ${project.gradient} text-white`}>
                  <IconComponent />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                {project.award && (
                  <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">
                    <TrophyIcon />
                    1st
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">
                {project.period}
              </p>
              <span className="inline-block text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
                {project.category}
              </span>
            </div>
            
            {/* Video Box with expand button */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 relative group">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={project.videoURL} type="video/mp4" />
                </video>
                
                {/* Expand button overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoExpanded(true)}
                    className="w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <svg className="h-4 w-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description - Shortened */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Key Highlights - Compact */}
          <div className="space-y-1 mb-3">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start space-x-2">
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                <span className="text-xs text-gray-600 dark:text-gray-300 leading-tight">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack - Simplified */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-400 px-1">+{project.technologies.length - 3}</span>
              )}
            </div>
          </div>

          {/* Action Buttons - Smaller */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-1"
              >
                <CodeIcon />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium py-2 px-3 rounded-md hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1`}
              >
                <ArrowIcon />
                Demo
              </a>
            )}
            {!project.liveUrl && project.githubUrl && (
              <div className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium py-2 px-3 rounded-md flex items-center justify-center">
                Academic
              </div>
            )}
          </div>
        </div>
        
        {/* Expanded Video Modal */}
        {isVideoExpanded && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4">
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setIsVideoExpanded(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Video */}
              <video
                className="w-full h-auto max-h-[70vh] object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src={project.videoURL} type="video/mp4" />
              </video>
              
              {/* Video info */}
              <div className="p-6 bg-gray-900 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${project.gradient} text-white`}>
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.category} • {project.period}</p>
                  </div>
                  {project.award && (
                    <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-md font-medium flex items-center gap-1 ml-auto">
                      <TrophyIcon />
                      {project.award}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 flex-shrink-0`}></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-3 mt-6">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center gap-2"
                    >
                      <CodeIcon />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${project.gradient} text-white font-medium py-2 px-4 rounded-md hover:shadow-lg transition-all duration-200 flex items-center gap-2`}
                    >
                      <ArrowIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SpiralTimeline: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Startup', 'Machine Learning', 'Full-Stack', 'Data Analysis', 'Academic'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            From startup co-founding to hackathon wins, here's what I've been building at Cornell and beyond.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-300">More projects on</span>
            <a
              href="https://github.com/farhanmashrur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-600 font-medium flex items-center gap-1"
            >
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiralTimeline;