import React, { useRef, useEffect, useState } from 'react';
import profile from '../assets/profile.jpg'; // Adjust the path as necessary

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100 flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-gray-200/50 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Get to know me</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-7xl font-thin text-gray-900 tracking-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            About
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Image */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Floating background elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-4 border border-gray-200/50 shadow-xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={profile}
                    alt="Farhan Mashrur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className={`lg:col-span-3 space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Introduction */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                Building technology that creates impact
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Computer Science and Economics double major at Cornell University with a 3.85 GPA. 
                Currently co-founding JobLink (AI job-tracker with 97.8% precision), teaching CS 1340 to 750+ students 
                under Professor Jon Kleinberg, and serving as VP of Technology at Cornell Data Strategy where I've 
                led teams generating $1.6M+ in business value. My experience spans from building real-time systems 
                at BRAC Bkash handling 100K+ daily queries to winning hackathons with AI solutions achieving 94% accuracy.
              </p>
            </div>

            {/* Skills & Education */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="font-medium">Cornell University • GPA: 3.85</p>
                  <p>Computer Science & Economics</p>
                  <p className="text-xs">ML, Systems, Algorithms, Statistics</p>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><span className="font-medium">Languages:</span> Java, Python, C/C++, JavaScript, TypeScript, OCaml, Assembly</p>
                  <p><span className="font-medium">Frameworks:</span> React, NextJS, Flask, Spring Boot, Node.js</p>
                  <p><span className="font-medium">AI/ML:</span> TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy</p>
                  <p><span className="font-medium">Database:</span> PostgreSQL, MySQL, SQLite, Firebase, DynamoDB</p>
                  <p><span className="font-medium">Tools:</span> AWS, Git, Figma, Microsoft Office</p>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="pt-2">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Available for Full-Time • May 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;