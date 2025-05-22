import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiTag, FiAward } from 'react-icons/fi';

// Project data based on your resume
const projects = [
  {
    id: 1,
    title: "JobLink - AI Job Tracker",
    description: "Co-founded startup building AI-powered job tracker with Gmail integration. Features NLP pipeline with 97.82% precision for extracting company, role, and status data. Includes OAuth Gmail sync, REST APIs, and smart reminders.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "TypeScript", "Flask", "PostgreSQL", "NLP", "spaCy", "OAuth"],
    liveUrl: "https://joblink.one",
    repoUrl: "https://github.com/farhanmashrur/joblink",
    category: "startup",
    featured: true,
  },
  {
    id: 2,
    title: "Poultry Disease Detection",
    description: "🏆 1st Place at Cornell Hackathon. Built AI system detecting infections 3 days pre-onset from 12,000 spectrograms with 94% accuracy. Features 5-layer CNN and MobileNetV3 for real-time inference on Raspberry Pi 4.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags: ["TensorFlow", "PyTorch", "CNN", "MobileNetV3", "Raspberry Pi"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/farhanmashrur/poultry-detection",
    category: "ai",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Office Seating System",
    description: "Deployed across 5 floors for 400+ employees at BRAC Bkash. Integrated 7 Spring Boot microservices with AWS DynamoDB and S3, handling 100K+ seat queries daily with interactive multi-floor layouts.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags: ["Spring Boot", "AWS", "DynamoDB", "S3", "Microservices"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/farhanmashrur/office-seating",
    category: "web",
  },
  {
    id: 4,
    title: "TableTalk - Review Analysis Platform",
    description: "Co-led team of 7 building full-stack app scraping 1K+ Google Maps reviews. Applied Gaussian Mixture Models with PCA and OpenAI-based sentiment pipeline analyzing 50K+ reviews with 92% F1 score.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags: ["Flask", "SQL", "Selenium", "OpenAI", "PCA", "Gaussian Mixture Models"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/farhanmashrur/tabletalk",
    category: "ai",
  },
  {
    id: 5,
    title: "OCaml Trader",
    description: "Functional trading simulator handling 1000+ trades on live feeds spanning 500 equities. Features real-time P/L dashboard with <50ms latency using Lwt and <0.1% transaction error rate.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags: ["OCaml", "Lwt", "Financial APIs", "Real-time"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/farhanmashrur/ocaml-trader",
    category: "fintech",
  },
  {
    id: 6,
    title: "Stock Sentiment Platform",
    description: "Built at Cornell Fintech Club. Features search, portfolio tracking, and real-time indicators for 500+ tickers. Improved engagement by 15% through user feedback from 40+ testers.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "Node.js", "Financial APIs", "Real-time Data"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/farhanmashrur/stock-sentiment",
    category: "fintech",
  },
];

// Define filter categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "startup", name: "Startup" },
  { id: "ai", name: "AI/ML" },
  { id: "web", name: "Web Development" },
  { id: "fintech", name: "FinTech" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From startup co-founding to hackathon wins, here's some of my recent work
          </p>
        </div>

        {/* Project filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center p-1 bg-gray-100 rounded-lg gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured projects first */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h3>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.filter(project => project.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="bg-white bg-opacity-80 backdrop-blur-lg border border-white border-opacity-20 shadow-lg overflow-hidden rounded-xl transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <FiAward className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <FiTag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Live Demo
                      <FiExternalLink className="ml-1" />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      Source Code
                      <FiGithub className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Projects</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.filter(project => !project.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="bg-white bg-opacity-80 backdrop-blur-lg border border-white border-opacity-20 shadow-lg overflow-hidden rounded-xl transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <FiTag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{project.tags.length - 3} more</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Live Demo
                      <FiExternalLink className="ml-1" />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      Source Code
                      <FiGithub className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Show more button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/farhanmashrur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View More on GitHub
            <FiGithub className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;