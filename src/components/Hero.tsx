import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.jpg'; // Replace with your profile image path

const CleanHero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * -0.15}px)`,
            animationDelay: '2s' 
          }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-purple-200/25 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDelay: '4s' 
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Status Badge */}
              <div 
                className="inline-flex items-center px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 0.2s'
                }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for Full-Time • May 2027</span>
              </div>

              {/* Name */}
              <div 
                className="space-y-2"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.4s'
                }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-gray-900 tracking-tight leading-tight">
                  Farhan
                </h1>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin text-gray-900 tracking-tight leading-tight">
                  Mashrur
                </h2>
              </div>

              {/* Subtitle */}
              <div 
                className="space-y-3"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                <p className="text-xl md:text-2xl font-light text-gray-700">
                  Computer Science & Economics
                </p>
                <p className="text-lg md:text-xl font-light text-gray-600">
                  Cornell University • Full-Stack Engineer • AI/ML
                </p>
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.8s'
                }}
              >
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Projects
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get In Touch
                </button>
              </div>

              {/* Skills */}
              <div 
                className="pt-8"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 1s'
                }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium text-gray-700">
                  {['React', 'Python', 'AI/ML', 'TypeScript', 'PostgreSQL', 'Flask'].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                      style={{ 
                        animationDelay: `${1.2 + index * 0.1}s`,
                        animation: 'fadeInScale 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'scale(0.8)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div 
                className="relative"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
                  transition: 'all 1s ease-out 0.6s'
                }}
              >
                {/* Photo Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                  {/* Decorative background elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Main photo container */}
                  <div className="relative w-full h-full bg-white/60 backdrop-blur-sm rounded-full border-4 border-white/80 shadow-2xl overflow-hidden group transition-all duration-500">
                    {/* Placeholder for photo */}

              
                     <img 
                      src={profile} 
                      alt="Farhan Mashrur"
                      className="w-full h-full object-cover"
                    /> 
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-indigo-500/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 1.4s'
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600 font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CleanHero;