import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github, Calendar, Award, Code, Users, TrendingUp } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
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

  const projects = [
    {
      id: 'joblink',
      title: 'JobLink',
      subtitle: 'AI-Powered Job Tracker',
      date: 'Feb 2025 - Present',
      type: 'Startup',
      status: 'Active',
      tags: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'NLP', 'Gmail API'],
      achievement: '97.8% Precision',
      description: 'AI job-tracker that auto-parses Gmail to unify job application data.',
      fullDescription: `Built a comprehensive AI-powered job tracking platform that revolutionizes how job seekers manage their applications. The system automatically parses Gmail data to extract and organize job-related information with industry-leading precision.`,
      highlights: [
        'Created NLP pipeline with LLM + spaCy + regex achieving 95%+ precision',
        'Built React TypeScript frontend with modern UI/UX design',
        'Implemented OAuth Gmail sync and REST APIs',
        'Developed smart reminders system increasing user engagement by 40%',
        'Led full development cycle from wireframes to production launch'
      ],
      metrics: {
        precision: '97.8%',
        engagement: '+40%',
        dataProcessed: '10K+ emails'
      },
      links: {
        demo: '#',
        github: '#',
        website: '#'
      }
    },
    {
      id: 'avian-alert',
      title: 'Avian Alert',
      subtitle: 'Poultry Disease Detection AI',
      date: 'Feb 2025',
      type: 'Hackathon Winner',
      status: '🏆 1st Place',
      tags: ['TensorFlow', 'PyTorch', 'CNN', 'Computer Vision', 'Raspberry Pi'],
      achievement: '94% Accuracy',
      description: 'AI system that detects poultry infections 3 days before onset from audio spectrograms.',
      fullDescription: `Award-winning AI system that revolutionizes poultry health monitoring by detecting infections before visible symptoms appear. The system analyzes audio spectrograms and visual data to provide early warning alerts to farmers.`,
      highlights: [
        'Built 5-layer CNN targeting 20-22 kHz vocal frequency bands',
        'Achieved 94% accuracy on 12,000 audio spectrograms',
        'Optimized for real-time inference (25ms) on Raspberry Pi 4',
        'Applied MobileNetV3 to 8,000 fecal images with 93% precision',
        'Won 1st place at Cornell Hackathon against 50+ teams'
      ],
      metrics: {
        accuracy: '94%',
        inference: '25ms',
        images: '8K+ analyzed'
      },
      links: {
        demo: '#',
        github: '#',
        presentation: '#'
      }
    },
    {
      id: 'tabletalk',
      title: 'TableTalk',
      subtitle: 'Restaurant Review Intelligence',
      date: 'Oct 2024 - Dec 2024',
      type: 'Team Project',
      status: 'Completed',
      tags: ['Selenium', 'Flask', 'SQL', 'OpenAI', 'Gaussian Mixture Models', 'PCA'],
      achievement: '92% F1 Score',
      description: 'Full-stack app analyzing restaurant reviews with advanced ML sentiment analysis.',
      fullDescription: `Comprehensive restaurant analytics platform that scrapes and analyzes thousands of Google Maps reviews to provide actionable insights for restaurant owners and customers through advanced machine learning techniques.`,
      highlights: [
        'Led team of 7 developers in full-stack development',
        'Scraped 1K+ Google Maps reviews using Selenium automation',
        'Applied Gaussian Mixture Models with PCA for pattern recognition',
        'Built OpenAI-powered sentiment analysis pipeline',
        'Achieved 92% F1 score on 50K+ review sentiment classification'
      ],
      metrics: {
        reviews: '50K+ analyzed',
        accuracy: '92% F1',
        restaurants: '1K+ covered'
      },
      links: {
        demo: '#',
        github: '#',
        documentation: '#'
      }
    },
    {
      id: 'ocaml-trader',
      title: 'OCaml Trader',
      subtitle: 'High-Performance Trading Simulator',
      date: 'Sep 2024 - Dec 2024',
      type: 'Academic Project',
      status: 'Completed',
      tags: ['OCaml', 'Lwt', 'Financial APIs', 'Real-time Data', 'Functional Programming'],
      achievement: '<50ms Latency',
      description: 'Real-time trading simulator with 1M+ simulated trades and live market data.',
      fullDescription: `High-performance trading simulation platform built in OCaml, featuring real-time market data processing, portfolio management, and advanced analytics with sub-50ms latency requirements.`,
      highlights: [
        'Simulated 1M+ trades on live feeds spanning 500 equities',
        'Leveraged Lwt for asynchronous programming and low latency',
        'Maintained price-fetch latency under 50ms consistently',
        'Achieved transaction error rate below 0.1%',
        'Built comprehensive portfolio operations across 12 metrics'
      ],
      metrics: {
        trades: '1M+ simulated',
        latency: '<50ms',
        errorRate: '<0.1%'
      },
      links: {
        demo: '#',
        github: '#',
        documentation: '#'
      }
    },
    {
      id: 'office-seating',
      title: 'BRAC Office Seating System',
      subtitle: 'Enterprise Real-time Management',
      date: 'Jun 2024 - Aug 2024',
      type: 'Internship Project',
      status: 'Production',
      tags: ['Spring Boot', 'AWS', 'DynamoDB', 'S3', 'Microservices', 'React'],
      achievement: '100K+ Queries/Day',
      description: 'Real-time office seating system deployed across 5 floors for 400+ employees.',
      fullDescription: `Enterprise-grade office management system deployed at BRAC Bkash Limited, providing real-time seating management, interactive floor layouts, and administrative tools for large-scale office operations.`,
      highlights: [
        'Deployed across 5 floors serving 400+ employees daily',
        'Integrated 7 Spring Boot microservices with AWS infrastructure',
        'Handles 100K+ seat queries daily with 99.9% uptime',
        'Built admin CMS supporting 30+ office managers',
        'Processes 20K+ configuration changes monthly'
      ],
      metrics: {
        employees: '400+',
        queries: '100K+/day',
        managers: '30+'
      },
      links: {
        demo: '#',
        documentation: '#',
        case_study: '#'
      }
    },
    {
      id: 'real-estate-ai',
      title: 'Real Estate Agent Ranking',
      subtitle: 'AI-Powered Recruitment Model',
      date: 'Jan 2025 - May 2025',
      type: 'Cornell Data Strategy',
      status: 'Active',
      tags: ['Machine Learning', 'MLS Data', 'Feature Engineering', 'Predictive Modeling'],
      achievement: '$650M+ Firm Impact',
      description: 'Supervised ML model ranking high-potential agents for major real estate firm.',
      fullDescription: `Advanced machine learning system that analyzes MLS data and agent performance metrics to identify and rank high-potential real estate agents, enabling strategic recruitment decisions for a major $650M+ real estate firm.`,
      highlights: [
        'Built supervised model for $650M+ firm with 175+ agents',
        'Engineered MLS-based features for volume, growth, and efficiency',
        'Improved recruitment targeting $3M-$5M performing agents',
        'Developed multi-factor scoring algorithm',
        'Generated actionable insights for strategic hiring decisions'
      ],
      metrics: {
        firmValue: '$650M+',
        agents: '175+',
        targetRange: '$3M-$5M'
      },
      links: {
        demo: '#',
        report: '#',
        case_study: '#'
      }
    }
  ];

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status: string) => {
    if (status.includes('1st Place') || status.includes('🏆')) return 'bg-yellow-500';
    if (status === 'Active') return 'bg-green-500';
    if (status === 'Production') return 'bg-blue-500';
    return 'bg-gray-500';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Startup': return <TrendingUp className="w-4 h-4" />;
      case 'Hackathon Winner': return <Award className="w-4 h-4" />;
      case 'Team Project': return <Users className="w-4 h-4" />;
      case 'Academic Project': return <Code className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-gray-200/30 transition-all duration-1000 mb-6 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Code className="w-4 h-4 text-blue-500 mr-3" />
            <span className="text-sm font-medium text-gray-700">Technical Portfolio</span>
          </div>

          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 tracking-tight mb-4">
              Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From AI-powered startups to award-winning hackathon projects, explore my technical journey
            </p>

            {/* View Toggle */}
            <div className="inline-flex bg-white/30 backdrop-blur-sm rounded-xl p-1 border border-gray-200/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'timeline' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Timeline
              </button>
            </div>
          </div>
        </div>

        {/* Projects Display */}
        {viewMode === 'grid' ? (
          <div 
            className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/20 backdrop-blur-sm rounded-2xl border border-gray-200/30 overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100/50 rounded-lg">
                        {getTypeIcon(project.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-blue-600 font-medium">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${getStatusColor(project.status)} rounded-full`}></div>
                      <span className="text-xs font-medium text-gray-600">{project.status}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{project.achievement}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100/60 text-blue-800 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-semibold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3 mb-4">
                    {Object.entries(project.links).map(([type, url]) => (
                      <a
                        key={type}
                        href={url}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="capitalize">{type}</span>
                      </a>
                    ))}
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gray-100/50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {expandedProject === project.id ? 'Show Less' : 'View Details'}
                    </span>
                    {expandedProject === project.id ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="px-6 pb-6 border-t border-gray-200/30">
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                      <p className="text-gray-700 mb-4">{project.fullDescription}</p>
                      
                      <h5 className="text-base font-semibold text-gray-900 mb-3">Key Highlights</h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Timeline View */
          <div 
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Project Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-xs text-gray-600 bg-gray-100/50 px-2 py-1 rounded-full">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{project.subtitle}</p>
                    <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{project.achievement}</span>
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Timeline Content */}
                {expandedProject === project.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-10/12 mt-4 bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30 z-20">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                    <p className="text-gray-700 mb-4">{project.fullDescription}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Key Highlights</h5>
                        <ul className="space-y-2">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-blue-100/60 text-blue-800 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleProject(null)}
                      className="mt-4 px-4 py-2 bg-gray-100/50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      Close Details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;