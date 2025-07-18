import { useRef, useEffect, useState } from 'react';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';
import demo4 from '../assets/demo4.mp4';
import demo5 from '../assets/demo5.mp4';
import demo6 from '../assets/demo6.mp4';

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

// Custom hook to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || (navigator as any).vendor;
      const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

interface Metric {
  label: string;
  value: string;
}

interface TechnicalDetail {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  subtitle: string;
  video: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyMetric: Metric;
  metrics: Metric[];
  technicalDetails: TechnicalDetail[];
  githubUrl: string;
  liveUrl?: string;
  isAward?: boolean;
  codePrivate?: boolean;
}

const featuredProjects: Project[] = [
  {
    title: "JobLink",
    subtitle: "AI Job Tracker Startup",
    video: demo1,
    shortDescription: "AI job-tracker with React, Flask, PostgreSQL; auto-parses Gmail to unify job data.",
    fullDescription: "Built AI job-tracker with React (TS), Flask, PostgreSQL; auto-parses Gmail to unify job data. Created NLP pipeline (LLM + spaCy + regex) with 95+% precision for company, role, status extraction. Led dev from wireframes to launch: OAuth Gmail sync, REST APIs, smart reminders; raised beta engagement 40%.",
    technologies: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'NLP', 'OAuth', 'spaCy', 'LLM', 'REST APIs', 'Gmail API'],
    keyMetric: { label: "Precision", value: "95%" },
    metrics: [
      { label: "Precision", value: "95%" },
      { label: "Engagement Boost", value: "+40%" },
      { label: "Gmail Integration", value: "OAuth" }
    ],
    technicalDetails: [
      {
        category: "Machine Learning",
        items: ["Large Language Models", "spaCy NER", "Regex Pattern Matching", "95% Classification Accuracy"]
      },
      {
        category: "Backend Systems",
        items: ["Flask REST API", "PostgreSQL ACID", "OAuth 2.0 Flow", "WebSocket Notifications"]
      },
      {
        category: "Frontend Architecture",
        items: ["React Hooks", "TypeScript Interfaces", "Component State Management", "Responsive Grid Layout"]
      }
    ],
    githubUrl: '',
    liveUrl: 'https://joblink.one',
    codePrivate: true
  },
  {
    title: "Poultry Disease Detection",
    subtitle: "1st Place, Cornell Hackathon",
    video: demo2,
    shortDescription: "AI that flags infections 3 days pre-onset with 94% accuracy using CNN.",
    fullDescription: "Built AI that flags infections 3 days pre-onset from 12,000 spectrograms; reached 94% accuracy. Designed 5-layer CNN targeting 20–22 kHz vocal bands; inference in 25 ms on Raspberry Pi 4.",
    technologies: ['TensorFlow', 'PyTorch', 'CNN', 'MobileNetV3', 'Raspberry Pi', 'Audio Processing', 'Spectrogram Analysis', 'Edge Computing'],
    keyMetric: { label: "Accuracy", value: "94%" },
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Inference Speed", value: "25ms" },
      { label: "Dataset Size", value: "12K+" }
    ],
    technicalDetails: [
      {
        category: "Deep Learning",
        items: ["Convolutional Neural Network", "MobileNetV3 Architecture", "Transfer Learning", "TensorFlow Lite Optimization"]
      },
      {
        category: "Signal Processing",
        items: ["FFT Spectrograms", "Audio Feature Extraction", "20-22 kHz Band Filtering", "Real-time DSP Pipeline"]
      },
      {
        category: "Edge Computing",
        items: ["ARM Cortex-A72 Deployment", "Quantized Model Inference", "GPIO Hardware Interface", "Linux System Programming"]
      }
    ],
    githubUrl: 'https://github.com/farhan-439/avian_alert',
    isAward: true
  },
  {
    title: "TableTalk",
    subtitle: "Review Analysis Platform",
    video: demo3,
    shortDescription: "Full-stack app scraping 1K+ Google Maps reviews with Gaussian Mixture Models and PCA.",
    fullDescription: "Co-led team of 7 building full-stack app scraping 1K+ Google Maps reviews via Selenium. Applied Gaussian Mixture Models with PCA on Flask/SQL backend to reveal review patterns. Built OpenAI-based sentiment pipeline analyzing 50K+ reviews with 92% F1 score.",
    technologies: ['Flask', 'Selenium', 'OpenAI', 'Gaussian Mixture Models', 'PCA', 'SQL', 'Web Scraping', 'Sentiment Analysis', 'Data Clustering'],
    keyMetric: { label: "F1 Score", value: "92%" },
    metrics: [
      { label: "F1 Score", value: "92%" },
      { label: "Reviews Analyzed", value: "50K+" },
      { label: "Google Maps Reviews", value: "1K+" }
    ],
    technicalDetails: [
      {
        category: "Web Scraping",
        items: ["Selenium WebDriver", "Headless Browser Automation", "CAPTCHA Bypass", "Rate Limiting & Proxy Rotation"]
      },
      {
        category: "Machine Learning",
        items: ["Gaussian Mixture Models", "Principal Component Analysis", "OpenAI GPT Integration", "Scikit-learn Pipeline"]
      },
      {
        category: "Data Engineering",
        items: ["SQLAlchemy ORM", "Database Normalization", "ETL Pipeline", "Concurrent Request Handling"]
      }
    ],
    githubUrl: 'https://github.com/Cornell-Data-Strategy/Project-Rest'
  },
  {
    title: "OCaml Trader",
    subtitle: "Functional Trading Simulator",
    video: demo4,
    shortDescription: "Real-time trading simulator with live API stock updates and user portfolio tracking.",
    fullDescription: "Built a trading simulator with real-time stock data via API for 500 equities and live user portfolio tracking. Developed a simulated portfolio feature using a custom ML model to forecast future prices, enabling users to test strategies. Supported 500+ simulated trades and 12 portfolio metrics for performance analysis.",
    technologies: ['OCaml', 'Lwt', 'Async IO', 'Financial APIs', 'Custom ML Model', 'Functional Programming', 'Concurrent Processing', 'Market Data'],
    keyMetric: { label: "Latency", value: "<50ms" },
    metrics: [
      { label: "Simulated Trades", value: "500+" },
      { label: "Portfolio Metrics", value: "12" },
      { label: "Latency", value: "<50ms" }
    ],
    technicalDetails: [
      {
        category: "Functional Programming",
        items: ["OCaml Pattern Matching", "Lwt Async Monads", "Immutable Data Structures", "Higher-Order Functions"]
      },
      {
        category: "Concurrent Systems",
        items: ["Actor Model Architecture", "Message Passing Interface", "Lock-Free Data Structures", "Thread Pool Management"]
      },
      {
        category: "Financial Computing",
        items: ["Market Data Streaming", "OHLCV Aggregation", "Portfolio Risk Metrics", "Backtesting Engine"]
      }
    ],
    githubUrl: 'https://github.com/farhan-439/ocaml_trader'
  },
  {
    title: "Real Estate Agent Ranking",
    subtitle: "Data Analytics for $650M+ Firm",
    video: demo5,
    shortDescription: "Supervised model to rank high-potential agents for a $650M+ firm with 175+ agents.",
    fullDescription: "Built supervised model to rank high-potential agents for a $650M+ firm (175+ agents). Engineered MLS-based features (volume, growth, efficiency) for multi-factor scoring. Improved recruitment by targeting $3M–$5M agents with strong performance.",
    technologies: ['Python', 'Machine Learning', 'MLS Data', 'Feature Engineering', 'Scikit-learn', 'Pandas', 'Data Modeling', 'Business Intelligence'],
    keyMetric: { label: "Firm Value", value: "$650M+" },
    metrics: [
      { label: "Firm Value", value: "$650M+" },
      { label: "Agents Analyzed", value: "175+" },
      { label: "Target Range", value: "$3-5M" }
    ],
    technicalDetails: [
      {
        category: "Data Pipeline",
        items: ["ETL Data Processing", "Feature Engineering", "Data Normalization", "Outlier Detection Algorithms"]
      },
      {
        category: "Machine Learning",
        items: ["Supervised Learning Models", "Random Forest Classifier", "Cross-Validation", "Hyperparameter Tuning"]
      },
      {
        category: "Analytics Platform",
        items: ["Statistical Analysis", "Correlation Matrices", "Performance Benchmarking", "Predictive Modeling"]
      }
    ],
    githubUrl: '',
    codePrivate: true
  },
  {
    title: "Resume AI Matching",
    subtitle: "Intelligent Resume Analysis",
    video: demo6,
    shortDescription: "AI-powered resume matching system using NLP and machine learning for recruitment.",
    fullDescription: "Developed AI-powered resume matching system that analyzes candidate profiles against job requirements using advanced NLP techniques. Implemented semantic similarity scoring and keyword extraction for improved recruitment efficiency.",
    technologies: ['Python', 'NLP', 'Machine Learning', 'spaCy', 'TF-IDF', 'Semantic Analysis', 'Text Processing', 'Similarity Scoring'],
    keyMetric: { label: "Match Score", value: "89%" },
    metrics: [
      { label: "Match Accuracy", value: "89%" },
      { label: "Processing Speed", value: "100ms" },
      { label: "Metrics Used", value: "40+" }
    ],
    technicalDetails: [
      {
        category: "NLP Pipeline",
        items: ["spaCy text processing", "TF-IDF vectorization", "Semantic similarity analysis", "Named entity recognition"]
      },
      {
        category: "Matching Algorithm",
        items: ["89% matching accuracy", "Skill extraction & scoring", "Job requirement analysis", "Candidate ranking system"]
      },
      {
        category: "System Performance",
        items: ["100ms processing speed", "10K+ resume database", "Scalable architecture", "Real-time matching"]
      }
    ],
    githubUrl: 'https://github.com/farhan-439/resume_job_scoring_engine'
  }
];

// Mobile Project Card Component
const MobileProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, isInView] = useInView();
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        hasBeenInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-gray-900 rounded-2xl p-4 transition-all duration-300">
        {/* Condensed View */}
        {!isExpanded && (
          <>
            {/* Header with expand button */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-medium text-white">{project.title}</h3>
                  {project.isAward && (
                    <div className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded-full font-medium">
                      🏆
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-xs mb-2">{project.subtitle}</p>
              </div>
              <button
                onClick={() => setIsExpanded(true)}
                className="ml-2 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Short description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {project.shortDescription}
            </p>

            {/* Key metric */}
            <div className="flex items-center justify-between mb-3">
              <div className="bg-gray-800 rounded-lg px-3 py-1.5">
                <div className="text-sm font-medium text-white">{project.keyMetric.value}</div>
                <div className="text-xs text-gray-400">{project.keyMetric.label}</div>
              </div>

              {/* Quick action buttons */}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium py-1.5 px-3 rounded-md transition-colors duration-200"
                  >
                    Code
                  </a>
                )}
                <button
                  onClick={() => setIsVideoExpanded(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium py-1.5 px-3 rounded-md transition-colors duration-200"
                >
                  Video
                </button>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-gray-900 text-xs font-medium py-1.5 px-3 rounded-md transition-colors duration-200"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>

            {/* Main technologies */}
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-md">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-400">+{project.technologies.length - 3}</span>
              )}
            </div>
          </>
        )}

        {/* Expanded View */}
        {isExpanded && (
          <>
            {/* Header with collapse button */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  {project.isAward && (
                    <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                      🏆 1st Place
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="ml-2 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>

            {/* Video Preview */}
            <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-800">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

            {/* Full description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.fullDescription}
            </p>

            {/* All Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {project.metrics.map((metric: Metric, i: number) => (
                <div key={i} className="text-center p-2 bg-gray-800 rounded-lg">
                  <div className="text-sm font-medium text-white">{metric.value}</div>
                  <div className="text-xs text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* All Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, i: number) => (
                <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
                >
                  Code
                </a>
              )}
              <button
                onClick={() => setIsVideoExpanded(true)}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
              >
                Video
              </button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
                >
                  Website
                </a>
              )}
            </div>
          </>
        )}

        {/* Expanded Video Modal */}
        {isVideoExpanded && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4">
            <div className="relative w-full max-w-sm">
              <button
                onClick={() => setIsVideoExpanded(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                className="w-full h-auto rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Desktop Project Card Component
const DesktopProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, isInView] = useInView();
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ${
        hasBeenInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 h-full flex flex-col">
        {/* Video Preview */}
        <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-800">
          <video
            className="w-full h-40 object-cover cursor-pointer"
            autoPlay
            loop
            muted
            playsInline
            onClick={() => setIsVideoExpanded(true)}
          >
            <source src={project.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => setIsVideoExpanded(true)}
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg className="h-6 w-6 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Project Info */}
        <div className="mb-4 flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            {project.isAward && (
              <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                🏆 1st Place
              </div>
            )}
          </div>
          <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.fullDescription}
          </p>
        </div>

        {/* Enhanced Technologies Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white text-sm font-medium">Technologies</h4>
            <button
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  showTechnicalDetails ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Main Technologies */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Technical Details Dropdown */}
          {showTechnicalDetails && (
            <div className="space-y-3 mt-4 p-3 bg-gray-800 rounded-lg">
              {project.technicalDetails.map((detail, i) => (
                <div key={i}>
                  <h5 className="text-xs font-medium text-white mb-1">{detail.category}</h5>
                  <div className="space-y-1">
                    {detail.items.map((item, j) => (
                      <div key={j} className="text-xs text-gray-300 flex items-center">
                        <div className="w-1 h-1 bg-gray-500 rounded-full mr-2 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
            >
              Code
            </a>
          )}
          <button
            onClick={() => setIsVideoExpanded(true)}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
          >
            Video
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
            >
              Website
            </a>
          )}
        </div>

        {/* Expanded Video Modal */}
        {isVideoExpanded && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsVideoExpanded(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                className="w-full h-auto rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Projects Section Component
const ProjectsSection = () => {
  const [headerRef, headerInView] = useInView();
  const [headerHasBeenInView, setHeaderHasBeenInView] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (headerInView && !headerHasBeenInView) {
      setHeaderHasBeenInView(true);
    }
  }, [headerInView, headerHasBeenInView]);

  return (
    <section className="w-full py-1 px-1" style={{ backgroundColor: '#e3e3e3' }}>
      <div className={`max-w-8xl ${isMobile ? 'px-4' : 'px-10'}`}>
        {/* Black Container */}
        <div className={`bg-black rounded-3xl shadow-2xl ${isMobile ? 'p-6' : 'p-8 md:p-12'}`}>
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center transition-all duration-700 ${
              headerHasBeenInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            } ${isMobile ? 'mb-8' : 'mb-12'}`}
          >
            <h2 className={`font-extralight text-white ${isMobile ? 'text-2xl mb-3' : 'text-3xl md:text-4xl mb-4'}`}>
              Featured Work
            </h2>
            <div className={`bg-red-600 mx-auto mb-6 h-0.5 ${isMobile ? 'w-12 mb-4' : 'w-16 md:w-24'}`}></div>
            <p className={`text-gray-300 mx-auto leading-relaxed ${
              isMobile
                ? 'text-sm max-w-sm'
                : 'text-lg max-w-3xl'
            }`}>
              {isMobile ? (
                <>
                  Projects showcasing expertise in{' '}
                  <strong className="text-white">AI/ML</strong>, <strong className="text-white">full-stack</strong>,
                  and <strong className="text-white">data analysis</strong>.
                </>
              ) : (
                <>
                  From hackathon wins to production systems, here are the projects that showcase my expertise in{' '}
                  <strong className="text-white">AI/ML</strong>, <strong className="text-white">full-stack development</strong>,
                  and <strong className="text-white">data analysis</strong>.
                </>
              )}
            </p>
          </div>

          {/* Projects Layout */}
          {isMobile ? (
            /* Mobile: Vertical list with expand/collapse */
            <div className="space-y-4 mb-6">
              {featuredProjects.map((project: Project, index: number) => (
                <MobileProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          ) : (
            /* Desktop: Grid layout */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project: Project, index: number) => (
                <DesktopProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center">
            <div className={`inline-flex items-center bg-gray-800 rounded-full border border-gray-700 ${
              isMobile
                ? 'space-x-3 px-4 py-2'
                : 'space-x-4 px-6 py-3'
            }`}>
              <span className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>
                {isMobile ? 'More on' : 'More projects on'}
              </span>
              <a
                href="https://github.com/farhan-439"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white hover:text-gray-300 font-medium flex items-center gap-1 ${
                  isMobile ? 'text-sm' : ''
                }`}
              >
                GitHub{' '}
                <svg className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;