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

const featuredProjects = [
  {
    title: "Poultry Disease Detection",
    subtitle: "1st Place, Cornell Hackathon",
    video: demo1,
    description: "Built AI that flags infections 3 days pre-onset from 12,000 spectrograms; reached 94% accuracy. Designed 5-layer CNN targeting 20–22 kHz vocal bands; inference in 25 ms on Raspberry Pi 4.",
    technologies: ['TensorFlow', 'PyTorch', 'CNN', 'MobileNetV3'],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Inference Speed", value: "25ms" },
      { label: "Dataset Size", value: "12K+" }
    ],
    githubUrl: 'https://github.com/farhan/poultry-detection',
    isAward: true
  },
  {
    title: "OCaml Trader",
    subtitle: "Functional Trading Simulator",
    video: demo2,
    description: "Simulated 1000+ trades on live feeds spanning 500 equities; real-time P/L dashboard. Leveraged Lwt to keep price-fetch latency under 50 ms and transaction error rate <0.1%.",
    technologies: ['OCaml', 'Lwt', 'Financial APIs'],
    metrics: [
      { label: "Trades Simulated", value: "1000+" },
      { label: "Latency", value: "<50ms" },
      { label: "Error Rate", value: "<0.1%" }
    ],
    githubUrl: 'https://github.com/farhan/ocaml-trader'
  },
  {
    title: "Stock Sentiment Platform",
    subtitle: "Real-time Market Analysis",
    video: demo3,
    description: "Helped build Stock Sentiment Platform with search, portfolio, and real-time indicators for 500+ tickers. Gathered user feedback from 40+ testers, refining MVP to improve engagement by 15%.",
    technologies: ['React', 'Node.js', 'Financial APIs'],
    metrics: [
      { label: "Stock Tickers", value: "500+" },
      { label: "User Testers", value: "40+" },
      { label: "Engagement Boost", value: "+15%" }
    ],
    githubUrl: 'https://github.com/farhan/stock-sentiment',
    liveUrl: 'https://stock-sentiment.farhan.dev'
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView();
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-500 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
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
        <div className="mb-4">
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
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="text-center p-2 bg-gray-800 rounded-lg">
              <div className="text-sm font-medium text-white">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
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
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
            >
              Demo
            </a>
          )}
          {!project.liveUrl && (
            <div className="flex-1 bg-gray-800 text-gray-500 text-sm font-medium py-2 px-3 rounded-lg text-center">
              Academic
            </div>
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

const ProjectsSection = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="w-full py-1 px-1" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-8xl px-10">
        {/* Black Container */}
        <div className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-700 ${
              headerInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">Featured Work</h2>
            <div className="w-16 md:w-24 h-0.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              From hackathon wins to production systems, here are the projects that showcase my expertise in 
              <strong className="text-white"> AI/ML</strong>, <strong className="text-white">full-stack development</strong>, 
              and <strong className="text-white">data analysis</strong>.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
              <span className="text-gray-400">More projects on</span>
              <a
                href="https://github.com/farhanmashrur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 font-medium flex items-center gap-1"
              >
                GitHub 
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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