import { useRef, useEffect, useState } from 'react';

/* ----------------------- Intersection Observer Hook ----------------------- */
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '-50px', ...options }
    );

    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  return [ref, isInView] as const;
};

/* --------------------------------- Types --------------------------------- */
interface Role {
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

interface ExperienceGroup {
  company: string;
  location: string;
  period: string; // overall period span for the card
  roles: Role[];  // one card can have multiple roles (e.g., Cornell)
}

/* ----------------------------- Experience Data ---------------------------- */
const experienceData: ExperienceGroup[] = [
  {
    company: "Simulacrum",
    location: "New York, NY",
    period: "Jun 2025 – Aug 2025",
    roles: [
      {
        title: "Machine Learning Engineering Intern",
        period: "Jun 2025 – Aug 2025",
        description:
          "Built a time-series forecasting framework with unified APIs for LSTM, Transformer, XGBoost, ARIMA, and Prophet; ran 500+ HPO benchmarking runs; deployed Dockerized FastAPI inference on Vertex AI with automated CI/CD and monitoring.",
        highlights: [
          "LSTM, Transformer, XGBoost, ARIMA, Prophet",
          "FastAPI, Docker, PostgreSQL, TensorBoard",
          "Vertex AI, CI/CD, hyperparameter tuning (500+)"
        ]
      }
    ]
  },
  {
    company: "JobLink",
    location: "Ithaca, NY",
    period: "Feb 2025 – Present",
    roles: [
      {
        title: "Co‑Founder / Full‑Stack Engineer",
        period: "Feb 2025 – Present",
        description:
          "Built an AI job tracker with Flask + PostgreSQL; auto‑parses Gmail to unify job data. NLP pipeline (LLMs + embeddings + spaCy + regex) hit 97.82% precision for company/role/status; +40% beta engagement via Gmail OAuth and REST services.",
        highlights: [
          "Flask, React (TypeScript), PostgreSQL",
          "LLMs, embeddings, spaCy, regex (97.82% precision)",
          "OAuth 2.0, Gmail API, REST (+40% engagement)"
        ]
      }
    ]
  },
  {
    company: "Cornell University",
    location: "Ithaca, NY",
    period: "Jan 2025 – Present",
    roles: [
      {
        title: "Student Developer",
        period: "May 2025 – Present",
        description:
          "Built websites and backend systems for conferences, housing assignments, and large‑scale events (Reunion & Commencement); designed database schemas, admin dashboards, and backend logic for attendee/group/room assignments.",
        highlights: [

        ]
      },
      {
        title: "Teaching Assistant — CS 1340",
        period: "Jan 2025 – May 2025",
        description:
          "Supported a 750+ student algorithms course with office hours and discussions on AI ethics, graph theory, probabilistic reasoning, and Bayesian statistical models.",
        highlights: [

        ]
      }
    ]
  },
  {
    company: "BRAC Bkash Limited",
    location: "Dhaka, Bangladesh",
    period: "Jun 2024 – Aug 2024",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "Jun 2024 – Aug 2024",
        description:
          "Deployed a real‑time office seating system across 5 floors (400+ employees). Integrated 7 Spring Boot microservices with AWS DynamoDB & S3 handling 5K+ seat queries/day; built an admin CMS for 30+ managers with 20K+ monthly changes.",
        highlights: [
          "Spring Boot, Java, AWS (DynamoDB, S3)",
          "Microservices, REST",
          "5K+ daily queries, 20K+ monthly changes"
        ]
      }
    ]
  }
];

/* ------------------------------ UI Components ----------------------------- */
const ExperienceCard = ({ group, index }: { group: ExperienceGroup; index: number }) => {
  const [ref, isInView] = useInView();
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) setHasBeenInView(true);
  }, [isInView, hasBeenInView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        hasBeenInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition-all duration-300 mb-6">
        {/* Company Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-medium text-gray-900">{group.company}</h3>
            <p className="text-gray-600 text-sm">{group.location}</p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            {group.period}
          </span>
        </div>

        {/* Roles inside the same blob */}
        <div className="space-y-6">
          {group.roles.map((role, i) => (
            <div key={role.title + role.period}>
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-semibold text-gray-900">{role.title}</h4>
                <span className="text-[11px] text-gray-500">{role.period}</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mt-1">
                {role.description}
              </p>

              <div className="mt-2 space-y-1">
                {role.highlights.map((h) => (
                  <div key={h} className="flex items-center text-xs text-gray-600">
                    <div className="w-1 h-1 rounded-full bg-gray-400 mr-2" />
                    {h}
                  </div>
                ))}
              </div>

              {i !== group.roles.length - 1 && (
                <div className="h-px bg-gray-300 mt-5 mx-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [headerRef, headerInView] = useInView();
  const [headerHasBeenInView, setHeaderHasBeenInView] = useState(false);

  useEffect(() => {
    if (headerInView && !headerHasBeenInView) setHeaderHasBeenInView(true);
  }, [headerInView, headerHasBeenInView]);

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#e3e3e3' }}>
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerHasBeenInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl font-light text-black mb-4">Experience</h2>
          <div className="w-12 h-px bg-black mx-auto" />
        </div>

        <div className="space-y-0">
          {experienceData.map((group, index) => (
            <ExperienceCard key={group.company + group.period} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
