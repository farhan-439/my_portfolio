import React, { useRef, useEffect, useState } from 'react';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-50px', ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const leadershipData = [
  {
    organization: "Cornell Data Strategy",
    role: "Vice President of Technology",
    period: "Aug 2024 – Present",
    description: "Led tech initiatives across multiple verticals; managed 3+ engineering teams totaling 25+ developers. Oversaw engineering execution for initiatives generating $1.6M+ in business value, optimizing resources by 23%, and supporting solutions across 8 industries.",
    metrics: ["25+ developers managed", "$1.6M+ business value", "8 industries served"]
  },
  {
    organization: "Cornell Fintech Club",
    role: "Software Developer",
    period: "Sept 2023 – Present",
    description: "Helped build Stock Sentiment Platform with search, portfolio, and real-time indicators for 500+ tickers. Gathered user feedback from 40+ testers, refining MVP to improve engagement by 15%.",
    metrics: ["500+ stock tickers", "40+ user testers", "15% engagement improvement"]
  }
];

const projectsData = [
  {
    title: "Real Estate Agent Ranking Model",
    role: "Data Analyst Lead",
    period: "Jan 2025 – May 2025",
    description: "Built supervised model to rank high-potential agents for a $650M+ firm (175+ agents). Engineered MLS-based features for multi-factor scoring.",
    metrics: ["$650M+ firm scope", "175+ agents analyzed"]
  },
  {
    title: "TableTalk",
    role: "Software Lead",
    period: "Oct 2024 - Dec 2024",
    description: "Co-led team of 7 building full-stack app scraping 1K+ Google Maps reviews via Selenium. Built OpenAI-based sentiment pipeline analyzing 50K+ reviews with 92% F1 score.",
    metrics: ["1K+ reviews scraped", "92% F1 score achieved"]
  }
];

const LeadershipCard = ({ item, index, type }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-500 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition-all duration-300">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {type === 'leadership' ? item.organization : item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.role}</p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            {item.period}
          </span>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        <div className="space-y-1">
          {item.metrics.map((metric, i) => (
            <div key={i} className="flex items-center text-xs text-gray-600">
              <div className="w-1 h-1 rounded-full bg-gray-400 mr-2"></div>
              {metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl font-light text-black mb-4">Leadership & Projects</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Leadership */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Leadership Experience</h3>
            <div className="grid gap-6">
              {leadershipData.map((leadership, index) => (
                <LeadershipCard 
                  key={leadership.organization}
                  item={leadership} 
                  index={index}
                  type="leadership"
                />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Key Projects</h3>
            <div className="grid gap-6">
              {projectsData.map((project, index) => (
                <LeadershipCard 
                  key={project.title}
                  item={project} 
                  index={index + leadershipData.length}
                  type="project"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;