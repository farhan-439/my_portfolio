import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const projects = [
    {
      title: "JobLink - AI Job Tracker",
      type: "Startup Co-Founder",
      period: "Feb 2025 - Present",
      description: "AI-powered job application tracker that auto-parses Gmail to unify job data with 95%+ precision.",
      tech: ["React", "TypeScript", "Flask", "PostgreSQL", "NLP", "spaCy"],
      highlights: [
        "Built NLP pipeline with LLM integration for company/role extraction",
        "Implemented OAuth Gmail sync and REST APIs",
        "Raised beta engagement by 40%"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Poultry Disease Detection",
      type: "1st Place - Cornell Hackathon",
      period: "Feb 2025",
      description: "AI system that detects infections 3 days before onset using spectrograms and fecal imaging.",
      tech: ["TensorFlow", "PyTorch", "CNN", "MobileNetV3", "Raspberry Pi"],
      highlights: [
        "94% accuracy on 12,000 spectrograms",
        "5-layer CNN targeting 20-22 kHz vocal bands",
        "25ms inference time on Raspberry Pi 4"
      ],
      github: "#"
    },
    {
      title: "Real Estate Agent Ranking",
      type: "Data Science Project",
      period: "Jan 2025 - May 2025",
      description: "Supervised ML model ranking high-potential agents for $650M+ real estate firm.",
      tech: ["Python", "Scikit-learn", "MLS Data", "Feature Engineering"],
      highlights: [
        "Built model for 175+ agent evaluation",
        "Engineered volume, growth, and efficiency features",
        "Improved recruitment targeting $3M-$5M agents"
      ],
      github: "#"
    },
    {
      title: "OCaml Trader",
      type: "Functional Programming",
      period: "Sept 2024 - Dec 2024",
      description: "High-performance trading simulator with real-time P/L dashboard.",
      tech: ["OCaml", "Lwt", "Financial APIs", "Async Programming"],
      highlights: [
        "Simulated 1M+ trades on 500 equities",
        "Sub-50ms latency with <0.1% error rate",
        "12 performance metrics with 200ms rendering"
      ],
      github: "#"
    }
  ];

  const experiences = [
    {
      role: "Co-Founder / Full-Stack Engineer",
      company: "JobLink",
      period: "Feb 2025 - Present",
      location: "Ithaca, NY",
      description: "Building AI-powered job application tracker from concept to launch.",
      achievements: [
        "Led development from wireframes to production deployment",
        "Built NLP pipeline achieving 95%+ extraction precision",
        "Increased beta user engagement by 40%"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "BRAC Bkash Limited",
      period: "Jun 2024 - Aug 2024",
      location: "Dhaka, Bangladesh",
      description: "Developed enterprise seating management system for 400+ employees.",
      achievements: [
        "Deployed real-time system across 5 floors",
        "Integrated 7 Spring Boot microservices with AWS",
        "Built admin CMS processing 20K+ monthly changes"
      ]
    },
    {
      role: "Vice President of Technology",
      company: "Cornell Data Strategy",
      period: "Aug 2024 - Present",
      location: "Ithaca, NY",
      description: "Leading technology initiatives across multiple business verticals.",
      achievements: [
        "Managed 25+ developers across 3 engineering teams",
        "Generated $1.6M+ in business value",
        "Optimized resources by 23% across 8 industries"
      ]
    }
  ];

  const skills = {
    "Languages": ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "OCaml", "Assembly"],
    "Frontend": ["React", "Next.js", "HTML/CSS", "Vite.js"],
    "Backend": ["Flask", "Spring Boot", "Node.js", "REST APIs"],
    "Databases": ["PostgreSQL", "MySQL", "Firebase", "AWS DynamoDB"],
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    "Tools": ["Git", "AWS", "Docker", "Figma"]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Farhan Mashrur</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                Available for Full-Time • May 2027
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Computer Science &<br/>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Economics Student
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Cornell University • GPA 3.85/4.0<br/>
                Building AI systems, full-stack applications, and leading engineering teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  View Projects
                </button>
                <a 
                  href="mailto:fm454@cornell.edu"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-all text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-blue-600">const</div>
                  <div className="text-purple-600 ml-2">farhan = </div>
                  <div className="ml-4 text-gray-600">role: "Full-Stack Engineer",</div>
                  <div className="ml-4 text-gray-600">focus: ["AI/ML", "Web Dev"],</div>
                  <div className="ml-4 text-gray-600">languages: ["Python", "Java", "JS"],</div>
                  <div className="ml-4 text-gray-600">currentProject: "JobLink"</div>
                  <div className="text-purple-600">;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Building AI-powered solutions that solve real-world problems, from job tracking to disease detection.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Leadership</h3>
              <p className="text-gray-600 text-sm">Leading engineering teams of 25+ developers and managing initiatives worth $1.6M+ in business value.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Delivering high-performance systems with 95%+ accuracy and handling 100K+ daily operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 md:mt-0 text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.github} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View Code →
                  </a>
                  {project.live && (
                    <a href={project.live} className="text-sm text-green-600 hover:text-green-800 font-medium">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-900 text-white">  
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-lg hover:bg-gray-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fm454@cornell.edu"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/farhanmashrur"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;