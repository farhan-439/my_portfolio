import React, { useRef, useEffect, useState } from 'react';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

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

  return [ref, isInView];
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

const PlayIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const PauseIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
  </svg>
);

const featuredProjects = [
  {
    title: "JobLink AI Platform",
    subtitle: "Revolutionizing Job Matching with AI",
    video: demo1,
    description: "A comprehensive AI-powered platform that matches job seekers with opportunities using advanced NLP. Built with React and Flask, featuring real-time matching algorithms and user analytics.",
    category: 'Startup',
    period: 'Feb 2025 - Present',
    technologies: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'spaCy', 'NLP'],
    metrics: [
      { label: "Precision Rate", value: "97.82%" },
      { label: "User Engagement", value: "+40%" },
      { label: "Job Matches", value: "10K+" }
    ],
    highlights: [
      'Built NLP pipeline with 97.82% precision',
      'Raised beta engagement by 40%',
      'Real-time job matching algorithms',
      'Advanced user analytics dashboard'
    ],
    githubUrl: 'https://github.com/farhan/joblink',
    liveUrl: 'https://joblink.app',
    award: '1st Place, Cornell Hackathon',
    icon: BrainIcon
  },
  {
    title: "Disease Detection ML",
    subtitle: "Medical AI for Early Diagnosis",
    video: demo2,
    description: "Advanced machine learning system for medical imaging analysis using TensorFlow and PyTorch. Optimized for edge deployment with sub-25ms inference on Raspberry Pi 4.",
    category: 'Machine Learning',
    period: 'Feb 2025',
    technologies: ['TensorFlow', 'PyTorch', 'CNN', 'MobileNetV3', 'Computer Vision'],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Inference Speed", value: "25ms" },
      { label: "Model Size", value: "12MB" }
    ],
    highlights: [
      '94% accuracy on spectrograms',
      '25ms inference on Raspberry Pi 4',
      'Edge-optimized deployment',
      'Real-time medical analysis'
    ],
    githubUrl: 'https://github.com/farhan/poultry-detection',
    icon: TrophyIcon
  },
  {
    title: "TableTalk Analytics",
    subtitle: "Natural Language Data Queries",
    video: demo3,
    description: "Intelligent data analysis platform that allows users to query databases using natural language. Features automated web scraping and advanced sentiment analysis capabilities.",
    category: 'Data Analysis',
    period: 'Oct 2024 - Dec 2024',
    technologies: ['Python', 'Selenium', 'Flask', 'OpenAI', 'NLP'],
    metrics: [
      { label: "F1 Score", value: "92%" },
      { label: "Reviews Processed", value: "1K+" },
      { label: "Query Accuracy", value: "89%" }
    ],
    highlights: [
      'Scraped 1K+ Google Maps reviews',
      '92% F1 score on sentiment analysis',
      'Natural language to SQL conversion',
      'Automated data pipeline'
    ],
    githubUrl: 'https://github.com/farhan/tabletalk',
    icon: ChartIcon
  }
];

const allProjects = [
  ...featuredProjects,
  {
    title: 'Real Estate Agent Ranking',
    tech: "Python • Scikit-learn",
    video: demo1,
    description: 'Supervised learning model to rank high-potential real estate agents for recruitment.',
    category: 'Data Analysis',
    period: 'Jan 2025 - May 2025',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'MLS Data'],
    highlights: [
      'Analyzed $650M+ firm with 175+ agents',
      'Multi-factor scoring system'
    ],
    githubUrl: 'https://github.com/farhan/agent-ranking',
    icon: ChartIcon
  },
  {
    title: 'OCaml Trader',
    tech: "OCaml • Lwt",
    video: demo3,
    description: 'Functional programming trading simulator with real-time data feeds and portfolio management.',
    category: 'Academic',
    period: 'Sept 2024 - Dec 2024',
    technologies: ['OCaml', 'Lwt', 'Financial APIs'],
    highlights: [
      'Simulated 1000+ trades across 500 equities',
      'Sub-50ms price-fetch latency'
    ],
    githubUrl: 'https://github.com/farhan/ocaml-trader',
    icon: CodeIcon
  },
  {
    title: 'Stock Sentiment Platform',
    tech: "React • Node.js",
    video: demo2,
    description: 'Real-time stock analysis platform with sentiment indicators and portfolio tracking.',
    category: 'Full-Stack',
    period: 'Sept 2023 - Present',
    technologies: ['React', 'Node.js', 'Financial APIs'],
    highlights: [
      'Covers 500+ stock tickers',
      'Improved engagement by 15%'
    ],
    githubUrl: 'https://github.com/farhan/stock-sentiment',
    liveUrl: 'https://stock-sentiment.farhan.dev',
    icon: ChartIcon
  }
];



const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView();
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  
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
      <div className="group relative">
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-500">
          
          {/* Video Preview */}
          <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100">
            <video
              className="w-full h-32 object-cover cursor-pointer"
              autoPlay
              loop
              muted
              playsInline
              onClick={() => setIsVideoExpanded(true)}
            >
              <source src={project.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => setIsVideoExpanded(true)}
                className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="h-5 w-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            {project.award && (
              <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1 ml-auto">
                <TrophyIcon />
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {(project.tech || project.technologies?.join(' • ') || '').split(' • ').map((tech, techIndex) => (
              <span key={techIndex} className="px-2 py-1 bg-gray-100 text-xs rounded-lg text-gray-700">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-1"
              >
                <CodeIcon />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1"
              >
                <ArrowIcon />
                <span>Demo</span>
              </a>
            )}
            {!project.liveUrl && project.githubUrl && (
              <div className="flex-1 bg-gray-100 text-gray-500 text-xs font-medium py-2 px-3 rounded-lg flex items-center justify-center">
                Academic
              </div>
            )}
          </div>
        </div>
        
        {/* Expanded Video Modal - keeping the original modal code */}
        {isVideoExpanded && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4">
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <button
                onClick={() => setIsVideoExpanded(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <video
                className="w-full h-auto max-h-[70vh] object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src={project.video} type="video/mp4" />
              </video>
              
              <div className="p-6 bg-gray-900 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-md bg-blue-600 text-white">
                    <project.icon />
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
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights?.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      )) || []}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {(project.technologies || project.tech?.split(' • ') || []).map((tech, i) => (
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
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
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

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Startup', 'Machine Learning', 'Full-Stack', 'Data Analysis', 'Academic'];
  
  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <section className="w-full py-12 md:py-16 px-4" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header with Context */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight text-black mb-6">
            Featured Work
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              From startup co-founding to hackathon wins, here's what I've been building at Cornell and beyond. 
              These projects showcase my expertise in <strong>AI/ML</strong>, <strong>full-stack development</strong>, 
              and <strong>data analysis</strong> — spanning everything from award-winning startups to academic research.
            </p>
            <p className="text-gray-600 text-base">
              Each project represents real-world problem solving, whether it's revolutionizing job matching with NLP, 
              advancing medical diagnostics with computer vision, or building financial trading systems with functional programming.
            </p>
          </div>
        </div>

        {/* Featured Slideshow */}
        
        
        {/* All Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Projects</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <span className="text-gray-600">More projects on</span>
            <a
              href="https://github.com/farhanmashrur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;