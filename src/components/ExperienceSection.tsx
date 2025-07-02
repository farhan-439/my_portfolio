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

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

const experienceData: Experience[] = [
  {
    company: "Simulacrum",
    role: "Machine Learning Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    description: "Architected foundation model infrastructure for time-series forecasting. Tasked with engineering distributed training pipelines for transformer architectures, integrating open-source models for comparative benchmarking, and developing automated leaderboard systems with containerized model deployment using Kubernetes orchestration.",
    highlights: [
      "PyTorch, Transformers, Kubernetes",
      "Docker, FastAPI, PostgreSQL",
      "MLflow, Weights & Biases, Ray"
    ]
  },
  {
    company: "JobLink",
    role: "Co-Founder / Full-Stack Engineer",
    period: "Feb 2025 – Present",
    location: "Ithaca, NY",
    description: "Built AI job-tracker with React (TS), Flask, PostgreSQL; auto-parses Gmail to unify job data. Created NLP pipeline (LLM + spaCy + regex) with 97.82% precision for company, role, status extraction. Raised beta engagement 40% through OAuth Gmail sync with REST APIs.",
    highlights: [
      "React, TypeScript, Flask",
      "PostgreSQL, spaCy, OpenAI API",
      "OAuth 2.0, Gmail API, REST"
    ]
  },
  {
    company: "BRAC Bkash Limited",
    role: "Software Engineering Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Dhaka, Bangladesh",
    description: "Deployed real-time office seating system across 5 floors and 400+ employees. Integrated 7 Spring Boot microservices with AWS DynamoDB and S3, handling 100K+ seat queries daily. Built admin CMS for 30+ office managers processing 20K+ configuration changes per month.",
    highlights: [
      "Spring Boot, Java, AWS",
      "DynamoDB, S3, Redis",
      "Microservices, REST APIs"
    ]
  },
  {
    company: "Cornell University",
    role: "Teaching Assistant - CS 1340",
    period: "Jan 2025 – Present",
    location: "Ithaca, NY",
    description: "Assist Professor Jon Kleinberg in a 750+ student course; run office hours and lead algorithm discussions. Mentor students on computational complexity, graph algorithms, and dynamic programming fundamentals.",
    highlights: [
      "Algorithms, Graph Theory, AI Ethics",
      "Academic Mentoring"
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
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
      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition-all duration-300 mb-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{experience.role}</h3>
            <p className="text-gray-600 text-sm">{experience.company} • {experience.location}</p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            {experience.period}
          </span>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {experience.description}
        </p>
        
        <div className="space-y-1">
          {experience.highlights.map((highlight: string, i: number) => (
            <div key={i} className="flex items-center text-xs text-gray-600">
              <div className="w-1 h-1 rounded-full bg-gray-400 mr-2"></div>
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
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
          <h2 className="text-3xl font-light text-black mb-4">Experience</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </div>

        <div className="space-y-0">
          {experienceData.map((experience: Experience, index: number) => (
            <ExperienceCard 
              key={experience.company + experience.role}
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;