import React from 'react';
import profileImg from '../assets/profile.jpg';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#e3e3e3' }}>
      {/* Background Glassmorphic Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-slate-400/18 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-slate-500/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-slate-600/16 rounded-full blur-3xl"></div>
        
        {/* Medium scattered blobs */}
        <div className="absolute top-60 left-1/3 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-60 right-1/4 w-40 h-40 bg-slate-400/14 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/2 w-32 h-32 bg-slate-600/12 rounded-full blur-2xl"></div>
        
        {/* Small accent blobs */}
        <div className="absolute top-80 right-10 w-24 h-24 bg-slate-500/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-slate-400/10 rounded-full blur-xl"></div>
      </div>

      {/* Main Content Section */}
      <section className="relative z-10 py-20 px-6" style={{ backgroundColor: '#e3e3e3' }}>
        <div className="max-w-7xl mx-auto">
          {/* Main Title Blob */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10">
              <h2 className="text-4xl font-light text-slate-800 text-center">About Me</h2>
            </div>
          </div>

          {/* Floating Content Blobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profile Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <img
                    src={profileImg}
                    alt="Farhan Mashrur"
                    className="rounded-full border-4 border-slate-400/50 object-cover w-full h-full shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-200/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Farhan Mashrur</h3>
                <p className="text-slate-600 text-sm">CS & Economics @ Cornell '27</p>
              </div>
            </div>

            {/* Intro Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2 col-span-1 md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Who I Am</h3>
                <p className="text-slate-700 leading-relaxed">
                  I'm a CS & Economics student at Cornell University, passionate about building systems that think, scale, and adapt. 
                  I specialize in full-stack development, machine learning, and system architecture — combining engineering depth with startup speed.
                </p>
              </div>
            </div>

            {/* Impact Stats Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">Impact</h3>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-slate-400/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-slate-800">$1.6M+</div>
                    <div className="text-sm text-slate-600">Business Value</div>
                  </div>
                  <div className="text-center p-3 bg-slate-400/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-slate-800">100K+</div>
                    <div className="text-sm text-slate-600">Daily Queries</div>
                  </div>
                  <div className="text-center p-3 bg-slate-400/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-slate-800">97.82%</div>
                    <div className="text-sm text-slate-600">ML Precision</div>
                  </div>
                </div>
              </div>
            </div>

            {/* JobLink Project Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">JobLink Co-Founder</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  AI-powered job tracking app that parses Gmail and organizes the job hunt with custom NLP pipeline.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">React</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">Flask</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">NLP</span>
                </div>
              </div>
            </div>

            {/* BRAC Experience Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">BRAC Bkash Intern</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Deployed microservice-based seating systems across 5 floors, handling 100K+ daily queries with AWS.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">Spring Boot</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">AWS</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">DynamoDB</span>
                </div>
              </div>
            </div>

            {/* Leadership Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Cornell Data Strategy VP</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Leading engineering initiatives across multiple verticals, managing 25+ developers and driving real-world impact.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">Leadership</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">Strategy</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">Team Management</span>
                </div>
              </div>
            </div>

            {/* AI Projects Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2 col-span-1 md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">AI & ML Projects</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  From 5-layer CNNs on Raspberry Pi detecting poultry diseases 3 days before onset, to sentiment analysis of 50K+ Google reviews, 
                  to real estate agent ranking models — I love projects that blend AI, UX, and scale.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">TensorFlow</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">PyTorch</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">OpenAI</span>
                  <span className="bg-slate-400/30 backdrop-blur-sm px-3 py-1 rounded-full">Computer Vision</span>
                </div>
              </div>
            </div>

            {/* Philosophy Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">My Approach</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  I'm driven by systems that solve and products that ship. Whether debugging backend logic at 3AM, sketching wireframes, 
                  or optimizing 20ms inference loops — I chase that edge where curiosity meets execution.
                </p>
              </div>
            </div>

            {/* Current Status Blob */}
            <div className="bg-slate-500/25 backdrop-blur-lg border border-slate-300/30 rounded-3xl p-8 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-slate-500/15 transition-all duration-300 hover:-translate-y-2 col-span-1 md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Currently</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Shipping JobLink features, TA for CS 1340 (750+ students), and always experimenting with new ML architectures. 
                  If I'm not in VS Code, I'm probably in Figma or on my third coffee of the day. Always open to discussing innovative projects and collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;