import { useRef, useEffect, useState } from 'react';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-50px', ...options }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return [ref, isInView] as const;
};

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  category: 'Academic' | 'Competition' | 'Leadership' | 'Startup';
  placement?: string;
  achievement?: string;
  link?: string;
}

const awardsData: Award[] = [
  {
    title: "International Economics Olympiad",
    organization: "Global Economics Competition",
    year: "2022 & 2023",
    placement: "Bronze Medal",
    achievement: "Consecutive Years",
    description: "Competed against top economics students globally in quantitative economics and econometrics, earning bronze medals in consecutive years representing Bangladesh",
    category: "Academic",
    link: "https://www.thedailystar.net/youth/young-icons/global-achievements/news/team-bangladesh-wins-four-bronze-medals-intl-economics-olympiad-2152091"
  },
  {
    title: "Cornell AI Hackathon",
    organization: "Cornell University",
    year: "2025",
    placement: "1st Place",
    achievement: "Signal Processing",
    description: "Led winning team developing deep learning model for poultry disease detection using 12,000 spectrograms, achieving 94% accuracy with real-time inference on edge devices",
    category: "Competition",
  },
  {
    title: "Beta University Accelerator",
    organization: "Beta University",
    year: "2025",
    placement: "Accepted",
    achievement: "Startup Program",
    description: "Co-founded JobLink startup selected for competitive accelerator program among hundreds of applicants, focusing on AI-powered job tracking solutions",
    category: "Startup",
    link: "https://www.betauniversity.org"
  },
  {
    title: "Academic Excellence Award",
    organization: "High School",
    year: "2023",
    placement: "Valedictorian",
    achievement: "Class Rank #1",
    description: "Graduated as valedictorian with highest academic honors, maintaining perfect GPA while leading multiple student organizations and community initiatives",
    category: "Academic",
  }
];

const categoryStyles = {
  Academic: {
    gradient: 'from-blue-500 to-blue-600',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    text: 'text-blue-700'
  },
  Competition: {
    gradient: 'from-amber-500 to-amber-600',
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    text: 'text-amber-700'
  },
  Startup: {
    gradient: 'from-purple-500 to-purple-600',
    border: 'border-purple-200',
    bg: 'bg-purple-50',
    text: 'text-purple-700'
  },
  Leadership: {
    gradient: 'from-green-500 to-green-600',
    border: 'border-green-200',
    bg: 'bg-green-50',
    text: 'text-green-700'
  }
};

const AwardCard = ({ award, index }: { award: Award; index: number }) => {
  const [ref, isInView] = useInView();
  const [isHovered, setIsHovered] = useState(false);
  const style = categoryStyles[award.category];
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-500 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className={`relative bg-white rounded-3xl p-8 border-2 ${style.border} hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        {/* Category badge with enhanced styling */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full ${style.bg} ${style.border} border mb-6`}>
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${style.gradient} mr-2`}></div>
          <span className={`text-sm font-semibold ${style.text}`}>
            {award.category}
          </span>
        </div>

        {/* Header with enhanced layout */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {award.title}
              </h3>
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${style.bg} text-gray-400 hover:${style.text} transition-all duration-200 hover:scale-110`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            
            {/* Achievement highlights */}
            <div className="flex flex-wrap gap-2 mb-3">
              {award.placement && (
                <span className={`px-3 py-1 bg-gradient-to-r ${style.gradient} text-white text-sm font-medium rounded-full`}>
                  {award.placement}
                </span>
              )}
              {award.achievement && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  {award.achievement}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 text-lg font-medium">{award.organization}</p>
          </div>
          
          {/* Enhanced year display */}
          <div className="text-right ml-4">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-2xl">
              <span className="text-lg font-bold">{award.year}</span>
            </div>
          </div>
        </div>

        {/* Enhanced description */}
        <div className="relative">
          <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${style.gradient} rounded-full`}></div>
          <p className="text-gray-700 text-base leading-relaxed pl-6">
            {award.description}
          </p>
        </div>

        {/* Hover effect indicator */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient} transform transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}></div>
      </div>
    </div>
  );
};

const AwardsSection = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="w-full py-20 px-4" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-5xl mx-auto">
        {/* Enhanced Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 relative">
              Awards & Recognition
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Recognition for academic excellence, innovative solutions, and leadership impact
          </p>
        </div>

        {/* Awards Grid with enhanced spacing */}
        <div className="space-y-8">
          {awardsData.map((award: Award, index: number) => (
            <AwardCard 
              key={`${award.title}-${award.year}`}
              award={award} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;