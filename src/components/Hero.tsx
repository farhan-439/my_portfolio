import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
                Farhan
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                  Mashrur
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                  Full-Stack Developer & ML Researcher
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Cornell University • Computer Science & Economics '27
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-2xl font-bold text-black dark:text-white">3.87</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">GPA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black dark:text-white">100+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Students Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black dark:text-white">750+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Students Taught</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                Co-founder of <strong className="text-black dark:text-white">JobLink</strong>, an AI-powered job tracking platform with 95%+ precision. Teaching Assistant for Professor Jon Kleinberg's algorithms course.
              </p>
              <p>
                Building the future through machine learning, full-stack development, and entrepreneurship. Winner of Cornell hackathon for AI disease detection model.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/farhanmashrur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/farhanmashrur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
              </a>
              <a
                href="mailto:fm453@cornell.edu"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-500" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Main Profile Card */}
            <div className="relative">
              
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
              
              {/* Profile Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800">
                
                {/* Profile Image */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">FM</span>
                    </div>
                  </div>
                  
                  {/* Status dot */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full ring-4 ring-white dark:ring-gray-900 shadow-lg">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">Farhan Mashrur</h3>
                    <p className="text-gray-600 dark:text-gray-400">Cornell University</p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                      Full-Stack Dev
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                      ML Research
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                      Co-founder
                    </span>
                  </div>

                  {/* Current Focus */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Currently building</p>
                    <p className="font-semibold text-black dark:text-white">JobLink AI Platform</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">AI-powered job tracking • 95%+ precision</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 -right-6 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-500/20 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;