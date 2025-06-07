import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const projectVideos = [
    { title: "JobLink AI Platform", tech: "React • Flask • NLP", video: demo1 },
    { title: "Disease Detection ML", tech: "TensorFlow • PyTorch", video: demo2 },
    { title: "TableTalk Analytics", tech: "Python • OpenAI", video: demo3 }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-br from-white via-gray-50 to-cyan-50 dark:from-black dark:via-gray-900 dark:to-cyan-950 overflow-hidden">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, transparent 25%, rgba(6, 182, 212, 0.02) 50%, transparent 75%)
          `
        }}></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 2 === 0 ? 'bg-cyan-500/10' : 'border border-cyan-500/20'} 
              ${i % 3 === 0 ? 'w-3 h-3 rounded-full' : 'w-4 h-4 rounded-sm rotate-45'}`}
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${10 + (i * 20) % 80}%`,
              animationDelay: `${i * 0.8}s`,
              animation: `float ${5 + (i % 2)}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        
        {/* Compact Header */}
        <div className="text-center mb-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Smaller Profile Image */}
            <div className="relative inline-block mb-5">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 scale-110"></div>
                
                {/* Main profile container - Smaller */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl group">
                  <img 
                    src={profileImg} 
                    alt="Farhan Mashrur"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 flex items-center bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Available</span>
                </div>
              </div>
            </div>

            {/* Smaller Name and Title */}
            <div className="mb-3">
              <h1 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2 tracking-tight">
                Farhan <span className="font-normal text-cyan-600 dark:text-cyan-400">Mashrur</span>
              </h1>
              
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="h-px bg-gray-300 dark:bg-gray-600 w-8"></div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Computer Science & Economics
                </p>
                <div className="h-px bg-gray-300 dark:bg-gray-600 w-8"></div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-3">
                Cornell student building innovative solutions that bridge technology and human behavior
              </p>
              
              {/* Skills badges - Smaller */}
              <div className="flex flex-wrap justify-center gap-2">
                {['Full-Stack Developer', 'ML Researcher', 'Startup Co-founder'].map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Three Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Section 1: Featured Projects */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-xl h-full">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Featured Projects</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Interactive Demos</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {projectVideos.map((project, i) => (
                  <div 
                    key={i}
                    className="group relative"
                    onMouseEnter={() => setHoveredVideo(i)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-200 dark:hover:border-cyan-800">
                      
                      {/* Small Video Preview */}
                      <div className="relative flex-shrink-0 w-12 h-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 group-hover:border-cyan-400 transition-colors duration-300">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Project Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 truncate">
                          {project.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {project.tech}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition-colors duration-300">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 rounded-r transition-all duration-300 ${hoveredVideo === i ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <a 
                  href="#timeline" 
                  className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium inline-flex items-center"
                >
                  View All Projects
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Cornell Coursework */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-xl h-full">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cornell Coursework</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Academic Foundation</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  "Machine Learning",
                  "Computer Systems Architecture", 
                  "Object-Oriented Programming",
                  "Probability and Statistics",
                  "Linear Algebra",
                  "Functional Programming"
                ].map((course, i) => (
                  <div 
                    key={i}
                    className="flex items-center p-2 rounded-lg bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Current Status & Stats */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-xl h-full">
              <div className="flex items-center mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current Status</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">What I'm Up To</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Currently Building */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 border border-cyan-200/50 dark:border-cyan-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Currently Building</span>
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-cyan-700 dark:text-cyan-300 mb-2">JobLink AI Platform</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">AI-powered job matching platform using NLP and machine learning to connect candidates with perfect opportunities</p>
                  <a 
                    href="https://joblink-ai.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300"
                  >
                    Visit JobLink
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-gray-50/80 dark:bg-gray-800/80">
                    <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">3.8+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Cornell GPA</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-50/80 dark:bg-gray-800/80">
                    <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">15+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Projects Built</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-20">
        <a
          href="https://linkedin.com/in/farhan-mashrur"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600"
        >
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <a
          href="https://github.com/farhan-mashrur"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gray-900 hover:border-gray-900 dark:hover:bg-white dark:hover:border-white"
        >
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center space-y-3">
          <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Scroll to explore</span>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce shadow-lg shadow-cyan-500/50"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-12px) rotate(5deg); }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thumb-cyan-500::-webkit-scrollbar-thumb {
          background-color: #06b6d4;
          border-radius: 2px;
        }
        
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #e5e7eb;
        }
        
        .dark .scrollbar-track-gray-800::-webkit-scrollbar-track {
          background-color: #1f2937;
        }
      `}</style>
    </div>
  );
};

export default Hero;