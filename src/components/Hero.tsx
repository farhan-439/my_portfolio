// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

// Declare the spline-viewer custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
        onLoad?: () => void;
        onError?: () => void;
      };
    }
  }
}

const projectVideos = [
  { title: "JobLink AI Platform", tech: "React • Flask • NLP", video: demo1 },
  { title: "Disease Detection ML", tech: "TensorFlow • PyTorch", video: demo2 },
  { title: "TableTalk Analytics", tech: "Python • OpenAI", video: demo3 }
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
    script.onload = () => {
      console.log('Spline viewer script loaded');
      setSplineLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Spline viewer script');
    };
    
    // Only add script if not already present
    if (!document.querySelector('script[src*="spline-viewer.js"]')) {
      document.head.appendChild(script);
    } else {
      setSplineLoaded(true);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src*="spline-viewer.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-16 bg-white dark:bg-black overflow-hidden">
      {/* Background Spline Scene - subtle */}
      <div className="absolute inset-0 z-0 opacity-20">
        {splineLoaded && (
          <spline-viewer
            url="https://prod.spline.design/9FzaxnyYWquGynD7/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent'
            }}
            className="w-full h-full"
          />
        )}
      </div>

      {/* Apple-style subtle grid background overlay */}
      <div className="absolute inset-0 bg-white dark:bg-black pointer-events-none z-5">
        <div
          className="absolute inset-0 dark:opacity-20"
          style={{
            backgroundImage:
              `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Redesigned Hero Section with Integrated 3D Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Profile & Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Profile Image */}
            <div className="relative inline-block mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src={profileImg}
                  alt="Farhan Mashrur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full ring-4 ring-white dark:ring-black flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
              Farhan Mashrur
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['CS & Economics','Cornell 2027','3.87 GPA'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-8">
              <p className="text-lg">
                <strong>Co-Founder & Full-Stack Engineer</strong> at JobLink, building AI-powered job tracking with <strong>95%+ precision</strong> for 100+ students.
              </p>
              <p>
                <strong>TA for Jon Kleinberg's CS 1340</strong>, guiding 750+ students through algorithms.
              </p>
              <p>
                <strong>VP of Tech</strong> at Cornell Data Strategy, leading 25+ developers and winning hackathons with AI innovations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Full-Stack Dev','ML Researcher','Startup Co-founder'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#timeline"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg text-center"
              >
                Explore Timeline
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Interactive 3D Scene */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Interactive Portfolio
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore my work in 3D
                </p>
              </div>
              
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-600">
                {splineLoaded ? (
                  <spline-viewer
                    url="https://prod.spline.design/9FzaxnyYWquGynD7/scene.splinecode"
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'transparent'
                    }}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">Loading 3D Experience...</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Click and drag to explore • Scroll to zoom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Coursework */}
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              Key Coursework
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <div className="max-h-64 overflow-y-auto space-y-3 scrollbar-hide">
                {[
                  "Machine Learning","Systems Architecture","Data Structures","Probability & Stats",
                  "Linear Algebra","Functional Programming","Design & Dev","Discrete Math",
                  "Intermediate Macro","Behavioral Econ","Risk & Insurance"
                ].map((course) => (
                  <div
                    key={course}
                    className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              Featured Projects
            </h3>
            <div className="space-y-4">
              {projectVideos.map((project, i) => (
                <div
                  key={i}
                  className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  onMouseEnter={() => setHoveredVideo(i)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-sm">
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
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.tech}
                      </p>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="#timeline"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                View all projects
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#timeline"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Explore Timeline
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Hero;