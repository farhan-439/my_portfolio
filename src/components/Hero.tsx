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
    <div className="relative h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-white opacity-60 dark:bg-black dark:opacity-60">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 163, 175, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 border border-gray-300 dark:border-gray-700 opacity-20"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              animationDelay: `${i * 0.5}s`,
              animation: `float ${4 + (i % 3)}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Side - Profile & Core Info */}
          <div className={`lg:col-span-1 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Profile Image */}
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-500 overflow-hidden relative group">
                <img 
                  src={profileImg} 
                  alt="Farhan Mashrur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Available
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-thin text-black dark:text-white tracking-wide">
                Farhan Mashrur
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Computer Science & Economics
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full">Full-Stack Developer</span>
                <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full">ML Researcher</span>
                <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full">Startup Co-founder</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#timeline"
                className="group relative px-8 py-3 border-2 border-cyan-500 text-black dark:text-white hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 font-medium">Explore Timeline</span>
                <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-cyan-500 transition-all duration-300"
              >
                <span className="relative z-10 font-medium">Download Résumé</span>
              </a>
            </div>
          </div>

          {/* Center - About & Skills */}
          <div className={`lg:col-span-1 text-center lg:text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* About Bio */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-black dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about building innovative solutions that bridge technology and human behavior. 
                I love full-stack development, machine learning research, and behavioral economics — always 
                striving to create meaningful impact through code.
              </p>
            </div>

            {/* Coursework */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-black dark:text-white">
                Key Coursework
              </h3>
              
              <div className="space-y-2 max-h-64 overflow-y-auto">
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Machine Learning</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Computer Systems Architecture</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Object-Oriented Programming and Data Structures</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Probability and Statistics</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Linear Algebra</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Functional Programming</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Intro to Design & Development</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Discrete Mathematics</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Intermediate Macroecon Theory</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Behavioral Economics</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <svg className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-black dark:text-white">Risk and Insurance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Project Videos */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Featured Projects
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hover to preview project details
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {projectVideos.map((project, i) => (
                  <div 
                    key={i}
                    className="group relative"
                    onMouseEnter={() => setHoveredVideo(i)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 transition-all duration-300 hover:shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                      
                      {/* Video Thumbnail */}
                      <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 group-hover:border-cyan-500 transition-colors duration-300">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {project.tech}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-all duration-300 group-hover:translate-x-1">
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

              {/* View All Projects Link */}
              <div className="text-center lg:text-left pt-4">
                <a 
                  href="#timeline" 
                  className="inline-flex items-center text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300"
                >
                  View all projects
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
          <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;