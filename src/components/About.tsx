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
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl h-full flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          {/* Pre-title */}
          <div
            className={`inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-gray-200/30 transition-all duration-1000 mb-3 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs font-medium text-gray-700">Get to know me</span>
          </div>

          {/* Main Title */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 tracking-tight mb-1">
              About
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Building technology that creates real impact through CS & business
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid lg:grid-cols-12 gap-4 flex-1 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Profile & Personal Info */}
          <div className="lg:col-span-4 space-y-3">
            {/* Profile Image */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-2">
                <img
                  src={profile}
                  alt="Farhan Mashrur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-0.5">Farhan Mashrur</h3>
                <p className="text-blue-600 font-medium text-xs">Co-Founder & Full-Stack Engineer</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">At a Glance</h4>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-gray-600 text-xs">Location</span>
                  <span className="text-gray-800 font-semibold text-xs">Ithaca, NY</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-t border-gray-200/30">
                  <span className="text-gray-600 text-xs">GPA</span>
                  <span className="text-gray-800 font-semibold text-xs">3.85/4.0</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-t border-gray-200/30">
                  <span className="text-gray-600 text-xs">Graduation</span>
                  <span className="text-gray-800 font-semibold text-xs">May 2027</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-t border-gray-200/30">
                  <span className="text-gray-600 text-xs">Students Taught</span>
                  <span className="text-gray-800 font-semibold text-xs">750+</span>
                </div>
              </div>
            </div>

            {/* Personal Bio */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-2">About Me</h4>
              <p className="text-gray-700 text-xs leading-relaxed">
                Passionate about building technology that creates real impact. From co-founding
                an AI startup to teaching 750+ students at Cornell, I work at the intersection of
                computer science and business to solve meaningful problems.
              </p>
            </div>
          </div>

          {/* Middle Column - Experience & Education */}
          <div className="lg:col-span-4 space-y-3">
            {/* Education */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Education</h4>
              <div className="space-y-2">
                <div className="pb-2 border-b border-gray-200/30">
                  <h5 className="text-sm font-semibold text-gray-800">Cornell University</h5>
                  <p className="text-blue-600 font-medium text-xs">BS Computer Science & Economics</p>
                  <p className="text-xs text-gray-600">May 2027 • GPA: 3.85/4.0</p>
                </div>
                
                <div>
                  <h6 className="text-xs font-semibold text-gray-800 mb-1.5">Core Coursework</h6>
                  <div className="grid grid-cols-3 gap-1">
                    {['ML', 'Systems', 'Algorithms', 'Statistics', 'Linear Alg', 'Functional'].map((course) => (
                      <span key={course} className="px-1.5 py-0.5 bg-white/40 rounded text-xs text-gray-700 border border-gray-200/40 text-center">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Experience */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Experience</h4>
              <div className="space-y-2">
                <div className="pb-1.5 border-b border-gray-200/30">
                  <div className="flex justify-between items-start mb-0.5">
                    <h5 className="text-xs font-semibold text-gray-800">Co-Founder & Engineer</h5>
                    <span className="text-xs text-gray-600">Feb 2025</span>
                  </div>
                  <p className="text-blue-600 font-semibold text-xs mb-0.5">JobLink (Startup)</p>
                  <p className="text-xs text-gray-700">AI job-tracker, 97.8% precision • React, Flask, PostgreSQL</p>
                </div>

                <div className="pb-1.5 border-b border-gray-200/30">
                  <div className="flex justify-between items-start mb-0.5">
                    <h5 className="text-xs font-semibold text-gray-800">Teaching Assistant</h5>
                    <span className="text-xs text-gray-600">Jan 2025</span>
                  </div>
                  <p className="text-blue-600 font-semibold text-xs mb-0.5">Cornell CS 1340</p>
                  <p className="text-xs text-gray-700">Prof. Jon Kleinberg • 750+ students</p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-0.5">
                    <h5 className="text-xs font-semibold text-gray-800">VP of Technology</h5>
                    <span className="text-xs text-gray-600">Aug 2024</span>
                  </div>
                  <p className="text-blue-600 font-semibold text-xs mb-0.5">Cornell Data Strategy</p>
                  <p className="text-xs text-gray-700">Leading 25+ devs • $1.6M+ business value</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Achievements</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">1st Place, Cornell Hackathon</p>
                    <p className="text-xs text-gray-600">Poultry Disease AI • 94% accuracy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">97.8% NLP Precision</p>
                    <p className="text-xs text-gray-600">JobLink AI extraction system</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">100K+ Daily Queries</p>
                    <p className="text-xs text-gray-600">BRAC Bkash seating system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Skills */}
          <div className="lg:col-span-4 space-y-3">
            {/* Programming Languages */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Programming</h4>
              <div className="grid grid-cols-2 gap-1">
                {['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'OCaml', 'Assembly', 'HTML/CSS'].map((lang) => (
                  <div key={lang} className="flex items-center space-x-1.5 p-1 bg-white/30 rounded">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Frameworks */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Technologies</h4>
              <div className="space-y-2">
                <div>
                  <h6 className="text-xs font-semibold text-gray-800 mb-1.5">Frontend</h6>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'NextJS', 'Vite.js', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-blue-100/60 text-blue-800 rounded text-xs font-medium border border-blue-200/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h6 className="text-xs font-semibold text-gray-800 mb-1.5">Backend</h6>
                  <div className="flex flex-wrap gap-1">
                    {['Flask', 'Spring Boot', 'PostgreSQL', 'MySQL', 'DynamoDB'].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-green-100/60 text-green-800 rounded text-xs font-medium border border-green-200/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h6 className="text-xs font-semibold text-gray-800 mb-1.5">AI/ML & Tools</h6>
                  <div className="flex flex-wrap gap-1">
                    {['TensorFlow', 'PyTorch', 'Pandas', 'AWS', 'Git', 'Figma'].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-purple-100/60 text-purple-800 rounded text-xs font-medium border border-purple-200/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Honors */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-gray-200/30">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Academic Honors</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">2x Bronze Medalist</p>
                    <p className="text-xs text-gray-600">Economics Olympiad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Nationalist</p>
                    <p className="text-xs text-gray-600">Bangladesh Math Olympiad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Dean's List</p>
                    <p className="text-xs text-gray-600">Cornell University</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1"></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Merit Scholarship</p>
                    <p className="text-xs text-gray-600">Academic Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Bottom Status Section */}
        <div
          className={`text-center mt-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-200/50">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-700">Available for Full-Time • May 2027</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;