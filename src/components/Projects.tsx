import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi';

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order tracking features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhc2hib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "web",
  },
  {
    id: 2,
    title: "Weather Application",
    description: "A beautiful weather app with 7-day forecasts, location-based weather, and dynamic backgrounds based on conditions.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "OpenWeather API", "CSS Modules"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "web",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app with kanban board, reminders, and collaborative features for team task management.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React", "Firebase", "Material UI"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "web",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and progress with custom workout plans and analytics.",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3MlMjB0cmFja2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["React Native", "TypeScript", "Redux"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "mobile",
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "A static blog site with markdown support, dark mode, and categories built with Next.js and MDX.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "web",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "App that allows users to search for recipes based on ingredients they have, with filtering options and step-by-step instructions.",
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f4ec2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["Vue.js", "Vuex", "Spoonacular API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "web",
  },
];

// Define filter categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "design", name: "UI/UX Design" },
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
          <h2 className="section-heading">My Projects</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Check out some of my recent work
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
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
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
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
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
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800"
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

        {/* Show more button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
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