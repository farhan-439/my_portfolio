import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  const projectData = [
    { title: "JobLink AI Platform", tech: "React • Flask • NLP", video: demo1, description: "AI-powered job matching platform" },
    { title: "Disease Detection ML", tech: "TensorFlow • PyTorch", video: demo2, description: "Medical imaging analysis system" },
    { title: "TableTalk Analytics", tech: "Python • OpenAI", video: demo3, description: "Natural language data queries" }
  ];

  const courseworkData = [
    { category: "Computer Science", courses: [
      "Machine Learning",
      "Computer Systems Architecture", 
      "Object-Oriented Programming and Data Structures",
      "Functional Programming",
      "Discrete Mathematics",
      "Intro to Design & Development"
    ]},
    { category: "Mathematics & Statistics", courses: [
      "Probability and Statistics",
      "Linear Algebra"
    ]},
    { category: "Economics", courses: [
      "Intermediate Macroecon Theory",
      "Behavioral Economics",
      "Risk and Insurance"
    ]}
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900 overflow-hidden">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.05) 50%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Header Section - Horizontal Layout */}
        <div className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Left: Profile & Intro */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-3 border-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Farhan Mashrur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                Available
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-3">
              Farhan Mashrur
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Computer Science & Economics @ Cornell
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {["Full-Stack Developer", "ML Researcher", "Startup Co-founder"].map((role, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-700 dark:text-cyan-300">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Bio & Quick Stats */}
          <div className="flex-1 max-w-2xl">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                Cornell student passionate about building innovative solutions that bridge technology and human behavior. 
                Currently exploring the intersection of AI, economics, and user experience design.
              </p>
              
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Courses</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section - Tabbed Interface */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              {[
                { id: 'projects', label: 'Featured Projects', icon: '🚀' },
                { id: 'coursework', label: 'Academic Journey', icon: '📚' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            
            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, i) => (
                  <div key={i} className="group relative">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                      
                      {/* Video Preview */}
                      <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <video
                          className="w-full h-32 object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Project Info */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(' • ').map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Coursework Tab */}
            {activeTab === 'coursework' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {courseworkData.map((category, i) => (
                  <div key={i} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-emerald-500'
                      }`}></div>
                      {category.category}
                    </h3>
                    
                    <div className="space-y-3">
                      {category.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-purple-400' : 'bg-emerald-400'
                          }`}></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Section */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <a
            href="#timeline"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Explore Full Timeline</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Résumé</span>
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;