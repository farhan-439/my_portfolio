import React from 'react';


const About: React.FC = () => {
  return (
    <section className="px-1" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-8xl md:px-10 px-4">
        {/* Floating Black Container */}
        <div className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Title */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">About Me</h2>
            <div className="w-16 md:w-24 h-0.5 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-5 md:space-y-6 text-sm md:text-base leading-relaxed text-white">
              <p className="text-lg font-light">
                I'm <strong className="font-medium">Farhan Mashrur</strong>, a junior at Cornell University pursuing Computer Science and Economics.
              </p>
              
              <p>
                I co-founded <a href="https://joblink.one" className="text-blue-400 hover:text-blue-300 transition-colors underline">JobLink</a> this February - an AI job tracker that parses Gmail automatically using NLP.
                Over 100 students have told me in person how much the automated tracking helps them, and it's been accepted by <a href="https://www.betauniversity.org" className="underline text-blue-400 hover:text-blue-300 transition-colors">Beta University</a>.
              </p>
              
              <p>
                I spent last summer at <a href="https://www.linkedin.com/company/bkash-limited/" className="underline text-blue-400 hover:text-blue-300 transition-colors">BRAC Bkash</a>  in Bangladesh building real-time office systems.
                This summer, I'm working on foundation model engineering for time series applications at an <a href="https://www.smlcrm.com" className="text-blue-400 hover:text-blue-300 transition-colors underline">AI startup</a>.
              </p>
              
              <p>
  I'm equally passionate about economics – I won bronze medals in the International Economics Olympiad <a href="https://www.thedailystar.net/youth/young-icons/global-achievements/news/team-bangladesh-wins-four-bronze-medals-intl-economics-olympiad-2152091" className="text-blue-400 underline hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">2022</a> and <a href="https://www.thedailystar.net/shout/news/team-bangladesh-wins-silver-and-bronze-medals-the-international-economics-olympiad-2022-3102311" className="text-blue-400 underline hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">2023</a>, and genuinely enjoy studying how markets and human behavior intersect.
</p>
              
              <p>
                I love applying ML to real problems - from <a href="https://www.linkedin.com/posts/farhanmashrur_i-am-very-thrilled-to-share-that-our-team-activity-7302084680705605632-d90o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_yNmsBEZbRp7Wu7XDTfc0GnxhQ3SCmnUE" className="text-blue-400 underline hover:text-blue-300 transition-colors">winning hackathons</a> with disease-detection models
                to building <a href="https://github.com/farhan-439/ocaml_trader" className="text-blue-400 hover:text-blue-300 transition-colors underline">trading simulators</a> in OCaml that blend my CS and economics interests.
              </p>
              
              <p>
                As VP of Technology at <a href="https://cornelldatastrategy.com" className="text-blue-400 hover:text-blue-300 transition-colors underline">Cornell Data Strategy</a>, I manage engineering teams working on projects that have generated over $1.6M in business value across 8 industries.
              </p>
              
              {/* Current Focus */}
              <div className="mt-6 pt-5 border-t border-gray-600">
                <p className="text-gray-400 italic text-sm">
                  Currently working on JobLink features and always experimenting with new ML architectures.
                </p>
              </div>
            </div>

            {/* Right Column - Skills + Coursework + Campus Involvement */}
            <div className="space-y-6 mt-6 lg:mt-0">
              {/* Skills Grid */}
              <div>
                <h3 className="text-xl font-light text-white mb-5 text-center">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Languages</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <p>Java, Python, C/C++</p>
                      <p>Assembly, OCaml</p>
                      <p>JavaScript, TypeScript</p>
                      <p>HTML, CSS</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Technologies</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <p>React, NextJS, Vite.js</p>
                      <p>Node.js, Git, AWS</p>
                      <p>Microsoft Office Suite</p>
                      <p>Figma</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Machine Learning</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <p>TensorFlow, PyTorch</p>
                      <p>Scikit-learn, Pandas</p>
                      <p>Matplotlib, NumPy</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Backend & Databases</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <p>Flask, Spring Boot</p>
                      <p>MySQL, SQLite</p>
                      <p>Firebase, PostgreSQL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coursework Section */}
              <div className="pt-5 border-t border-gray-600">
                <h3 className="text-xl font-light text-white mb-4 text-center">Academic Foundation</h3>
                <div className="space-y-3 text-xs text-gray-400 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-white mb-1">Computer Science</h4>
                    <p>Machine Learning, Computer Systems Architecture, OOP and Data Structures, Functional Programming, Discrete Mathematics, Probability and Statistics, Linear Algebra</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Economics</h4>
                    <p>Intermediate Macroeconomics & Microeconomics, Behavioral Economics, Risk and Insurance</p>
                  </div>
                </div>
              </div>

              {/* Campus Involvement Section */}
              <div className="pt-5 border-t border-gray-600">
                <h3 className="text-xl font-light text-white mb-4 text-center">Campus Involvement</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between items-start">
                    <span><strong className="text-white">VP of Technology</strong></span>
                    <span className="text-gray-400 text-right">Cornell Data Strategy</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span><strong className="text-white">Teaching Assistant</strong></span>
                    <span className="text-gray-400 text-right">CS 1340, Cornell</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span><strong className="text-white">Planning Team Member</strong></span>
                    <span className="text-gray-400 text-right">International Student Association</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span><strong className="text-white">Product Team Member</strong></span>
                    <span className="text-gray-400 text-right">Cornell WebDev</span>
                  </div>
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