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
  orgLink?: string;
  links?: Array<{url: string; label: string}>;
}

const awardsData: Award[] = [
  {
    title: "Bronze Medalist",
    organization: "International Economics Olympiad",
    year: "2022 & 2021",
    placement: "Bronze Medal",
    achievement: "Consecutive Years",
    description: "Competed against top economics students globally in quantitative economics and econometrics, earning bronze medals in consecutive years representing Bangladesh",
    category: "Academic",
    orgLink: "https://ieo-official.org",
    links: [
      {
        url: "https://www.thedailystar.net/youth/young-icons/global-achievements/news/team-bangladesh-wins-four-bronze-medals-intl-economics-olympiad-2152091",
        label: "Article(2022)"
      },
      {
        url: "https://www.thedailystar.net/youth/young-icons/global-achievements/news/team-bangladesh-wins-four-bronze-medals-intl-economics-olympiad-2152091",
        label: "Article(2021)"
      }
    ]
  },
  {
    title: "First Place, Data Science",
    organization: "Cornell Digital Agriculture Hackathon",
    year: "2025",
    placement: "1st Place",
    achievement: "Signal Processing",
    description: "Led winning team developing deep learning model for poultry disease detection using 12,000 spectrograms, achieving 94% accuracy with real-time inference on edge devices",
    category: "Competition",
    links: [
      {
        url: "https://github.com/farhan-439/avian_alert",
        label: "Code"
      },
      {
        url: "https://www.linkedin.com/posts/farhanmashrur_i-am-very-thrilled-to-share-that-our-team-activity-7302084680705605632-d90o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_yNmsBEZbRp7Wu7XDTfc0GnxhQ3SCmnUE",
        label: "Post"
      }
    ]
  },
  {
    title: "Selected for Startup Accelerator",
    organization: "Beta University",
    year: "2025",
    placement: "Accepted",
    achievement: "Startup Program",
    description: "Co-founded JobLink startup selected for competitive accelerator program among hundreds of applicants, focusing on AI-powered job tracking solutions",
    category: "Startup",
    orgLink: "https://www.betauniversity.org",
    links: [
      {
        url: "https://joblink.one",
        label: "JobLink"
      }
    ]
  },
  {
    title: "Valedictorian",
    organization: "High School",
    year: "2023",
    placement: "Valedictorian",
    achievement: "Class Rank #1",
    description: "Graduated as valedictorian with highest academic honors, maintaining perfect GPA while leading multiple student organizations and community initiatives",
    category: "Academic",
  }
];


const AwardCard = ({ award, index }: { award: Award; index: number }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-200 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-navy-300 hover:shadow-lg transition-all duration-300 group">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-700 transition-colors">
                {award.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <p className="text-slate-600 text-sm font-medium">{award.organization}</p>
              {award.orgLink && (
                <a
                  href={award.orgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            {(award.links || award.link) && (
              <div className="flex items-center gap-2 flex-wrap">
                {award.links ? (
                  <>
                    <span className="text-xs text-red-600 font-medium">News Publications:</span>
                    {award.links.map((linkItem, idx) => (
                      <a
                        key={idx}
                        href={linkItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-500 hover:text-red-700 underline transition-colors duration-200"
                      >
                        {linkItem.label}
                      </a>
                    ))}
                  </>
                ) : award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
          <span className="text-xs text-white bg-slate-700 border border-slate-600 px-3 py-1 rounded-full font-medium">
            {award.year}
          </span>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed border-l-2 border-red-300 pl-3">
          {award.description}
        </p>
      </div>
    </div>
  );
};

const AwardsSection = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl font-light text-black mb-4">Awards & Recognition</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </div>

        <div className="grid gap-6">
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