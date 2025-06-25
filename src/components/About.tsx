import React from 'react';
import profileImg from '../assets/profile.jpg';

const About: React.FC = () => {
  return (
    <section className="min-h-screen md:py-8 lg:min-h-screen lg:flex lg:items-center lg:justify-center px-4 py-8 lg:py-16" style={{ backgroundColor: '#dcdcdc' }}>
      <div className="max-w-6xl w-full lg:mx-auto">
        {/* Title */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-extralight text-black mb-3 lg:mb-4">About Me</h2>
          <div className="w-12 lg:w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-4 lg:space-y-6 text-sm lg:text-base leading-relaxed text-black">
            <p className="text-lg font-light">
              I'm <strong className="font-medium">Farhan Mashrur</strong>, a junior at Cornell University pursuing Computer Science and Economics.
            </p>
            
            <p>
              I co-founded <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors underline">JobLink</a> this February - an AI job tracker that parses Gmail automatically using NLP.
              Over 100 students have told me in person how much the automated tracking helps them, and it's been accepted by <a href="#" className="underline text-blue-600 hover:text-blue-800 transition-colors">Beta University</a>.
            </p>
            
            <p>
              I spent last summer at <a href="#" className="underline text-blue-600 hover:text-blue-800 transition-colors">BRAC Bkash in Bangladesh</a> building real-time office systems.
              This summer, I'm working on foundation model engineering for time series applications at a <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors underline">stealth AI startup</a>.
            </p>
            
            <p>
              I'm equally passionate about economics - I won <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">two bronze medals</a> in the International Economics Olympiad
              back-to-back and genuinely enjoy studying how markets and human behavior intersect.
            </p>
            
            <p>
              I love applying ML to real problems - from <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">winning hackathons</a> with disease-detection models
              to building <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors underline">trading simulators</a> in OCaml that blend my CS and economics interests.
            </p>
            
            <p>
              As VP of Technology at <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors underline">Cornell Data Strategy</a>, I manage engineering teams working on projects that have generated over $1.6M in business value across 8 industries.
            </p>
            
            {/* Current Focus */}
 
          </div>

          {/* Right Column - Skills + Coursework + Campus Involvement */}
          <div className="space-y-6 lg:space-y-6 mt-6 lg:mt-0">
            {/* Skills Grid */}
            <div>
              <h3 className="text-xl font-light text-black mb-4 lg:mb-4 text-center">Technical Skills</h3>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4">
                <div>
                  <h4 className="text-sm font-medium text-black mb-2">Languages</h4>
                  <div className="space-y-1 text-xs text-gray-700">
                    <p>Java, Python, C/C++</p>
                    <p>Assembly, OCaml</p>
                    <p>JavaScript, TypeScript</p>
                    <p>HTML, CSS</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-black mb-2">Technologies</h4>
                  <div className="space-y-1 text-xs text-gray-700">
                    <p>React, NextJS, Vite.js</p>
                    <p>Node.js, Git, AWS</p>
                    <p>Microsoft Office Suite</p>
                    <p>Figma</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-black mb-2">Machine Learning</h4>
                  <div className="space-y-1 text-xs text-gray-700">
                    <p>TensorFlow, PyTorch</p>
                    <p>Scikit-learn, Pandas</p>
                    <p>Matplotlib, NumPy</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-black mb-2">Backend & Databases</h4>
                  <div className="space-y-1 text-xs text-gray-700">
                    <p>Flask, Spring Boot</p>
                    <p>MySQL, SQLite</p>
                    <p>Firebase, PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="pt-4 lg:pt-4 border-t border-gray-400">
              <h3 className="text-xl font-light text-black mb-3 lg:mb-3 text-center">Academic Foundation</h3>
              <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-medium text-black mb-1"></h4>
                  <p>Machine Learning, Computer Systems Architecture, OOP and Data Structures, Functional Programming, Discrete Mathematics, Probability and Statistics, Linear Algebra</p>
                </div>
                <div>
      
                  <p>Intermediate Macroeconomics & Microeconomics, Behavioral Economics, Risk and Insurance </p>
                </div>
              </div>
            </div>

            {/* Campus Involvement Section */}
            <div className="pt-4 lg:pt-4 border-t border-gray-400">
              <h3 className="text-xl font-light text-black mb-3 lg:mb-3 text-center">Campus Involvement</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between items-start">
                  <span><strong className="text-black">VP of Technology</strong></span>
                  <span className="text-gray-600 text-right">Cornell Data Strategy</span>
                </div>
                <div className="flex justify-between items-start">
                  <span><strong className="text-black">Teaching Assistant</strong></span>
                  <span className="text-gray-600 text-right">CS 1340, Cornell</span>
                </div>
                <div className="flex justify-between items-start">
                  <span><strong className="text-black">Planning Team Member</strong></span>
                  <span className="text-gray-600 text-right">International Student Association</span>
                </div>
                <div className="flex justify-between items-start">
                  <span><strong className="text-black">Product Team Member</strong></span>
                  <span className="text-gray-600 text-right">Cornell WebDev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;