import React from 'react';

const About: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#dcdcdc' }}>
      <div className="max-w-4xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-black mb-4">About Me</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-base leading-relaxed text-gray-800 max-w-3xl mx-auto mb-12">
          <p>
            I'm <strong>Farhan Mashrur</strong>, a junior at Cornell University pursuing Computer Science and Economics.
          </p>

          <p>
            I co-founded <a href="#" className="text-blue-600 underline hover:text-blue-800"><strong>JobLink</strong></a> this February - an AI job tracker that parses Gmail automatically using NLP. 
            Over 100 students have told me in person how much the automated tracking helps them.
          </p>

          <p>
            I also TA for <a href="#" className="text-blue-600 underline hover:text-blue-800"><strong>Professor Kleinberg's algorithms course</strong></a> (750+ students) and spent last summer 
            at <a href="#" className="text-blue-600 underline hover:text-blue-800"><strong>BRAC Bkash in Bangladesh</strong></a> building real-time office systems.
          </p>

          <p>
            This summer, I'm working on <strong>foundation model engineering for time series applications</strong> at a <a href="#" className="text-blue-600 underline hover:text-blue-800">stealth AI startup</a>.
          </p>

          <p>
            I'm equally passionate about economics - I won <a href="#" className="text-blue-600 underline hover:text-blue-800"><strong>two bronze medals</strong></a> in the International Economics Olympiad 
            back-to-back and genuinely enjoy studying how markets and human behavior intersect.
          </p>

          <p>
            I love applying ML to real problems - from <a href="#" className="text-blue-600 underline hover:text-blue-800">winning hackathons</a> with disease-detection models 
            to building <a href="#" className="text-blue-600 underline hover:text-blue-800">trading simulators</a> in OCaml that blend my CS and economics interests.
          </p>

          <p>
            As <strong>VP of Technology at Cornell Data Strategy</strong>, I manage engineering teams working on projects that have generated over $1.6M in business value across 8 industries.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-3">Languages</h3>
            <div className="space-y-1 text-gray-700 text-xs">
              <p>Java, Python, C/C++</p>
              <p>Assembly, OCaml</p>
              <p>JavaScript, TypeScript</p>
              <p>HTML, CSS</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-3">Technologies</h3>
            <div className="space-y-1 text-gray-700 text-xs">
              <p>React, NextJS, Vite.js</p>
              <p>Node.js, Git, AWS</p>
              <p>Microsoft Office Suite</p>
              <p>Figma</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-3">Machine Learning</h3>
            <div className="space-y-1 text-gray-700 text-xs">
              <p>TensorFlow, PyTorch</p>
              <p>Scikit-learn, Pandas</p>
              <p>Matplotlib, NumPy</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-3">Backend & Databases</h3>
            <div className="space-y-1 text-gray-700 text-xs">
              <p>Flask, Spring Boot</p>
              <p>MySQL, SQLite</p>
              <p>Firebase, PostgreSQL</p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic text-sm">
            Currently working on JobLink features, teaching algorithms, and always experimenting with new ML architectures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;