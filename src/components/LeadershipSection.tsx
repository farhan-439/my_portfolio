import { useRef, useEffect, useState } from 'react';

// Type definitions
interface LeadershipItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

interface LeadershipCardProps {
  item: LeadershipItem;
  index: number;
}

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
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
  
  return [ref, isInView] as const;
};

const leadershipData: LeadershipItem[] = [
  {
    organization: "Cornell Data Strategy",
    role: "Vice President of Technology",
    period: "Aug 2024 – Present",
    description: "Led tech initiatives across multiple verticals; managed 3+ engineering teams totaling 25+ developers. Oversaw engineering execution for initiatives generating $1.6M+ in business value, optimizing resources by 23%, and supporting solutions across 8 industries.",
    link: "https://example.com/cornell-data-strategy"
  },
  {
    organization: "Cornell Event Services",
    role: "Planning Team Member",
    period: "Jan 2024 – May 2025",
    description: "Part of the Planning team for Cornell University where we organized Reunion 2025 and Commencement 2025. Collaborated on large-scale event coordination, logistics management, and utilized internal web tools and digital systems for attendee management and resource allocation.",
    link: "https://example.com/cornell-events"
  },
  {
    organization: "Cornell Fintech Club",
    role: "Software Developer",
    period: "Sept 2023 – Present",
    description: "Helped build Stock Sentiment Platform with search, portfolio, and real-time indicators for 500+ tickers. Gathered user feedback from 40+ testers, refining MVP to improve engagement by 15%.",
    link: "https://example.com/cornell-fintech"
  },

  {
    organization: "International Student Association",
    role: "Planning Team Member",
    period: "Sept 2023 – Present",
    description: "Planned and organized member social events and hosted Gala nights which gathered around 300+ students. Coordinated event logistics, vendor management, and student engagement initiatives to foster community building among international students.",
    link: "https://example.com/isa-cornell"
  },
];

const LeadershipCard: React.FC<LeadershipCardProps> = ({ item, index }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-100 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition-all duration-300">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-900">
                {item.organization}
              </h3>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-gray-600 text-sm">{item.role}</p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            {item.period}
          </span>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const LeadershipSection: React.FC = () => {
  const [headerRef, headerInView] = useInView();
  
  return (
    <section className="w-full py-16 px-4 bg-white" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl font-light text-black mb-4">Leadership & Volunteering Experience</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="grid gap-6">
          {leadershipData.map((leadership, index) => (
            <LeadershipCard
              key={leadership.organization}
              item={leadership}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;