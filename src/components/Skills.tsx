import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  FiCode, FiLayout, FiServer, FiDatabase, 
  FiTool, FiPackage, FiAward, FiTrello 
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FiCode className="w-6 h-6" />,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'JavaScript/TypeScript', level: 92 },
      { name: 'C/C++', level: 85 },
      { name: 'OCaml', level: 80 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: <FiLayout className="w-6 h-6" />,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'Vite.js', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Figma', level: 85 },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: <FiServer className="w-6 h-6" />,
    skills: [
      { name: 'Flask', level: 90 },
      { name: 'Spring Boot', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Firebase', level: 85 },
    ],
  },
  {
    title: 'Machine Learning & AI',
    icon: <FiAward className="w-6 h-6" />,
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'NLP/spaCy', level: 87 },
      { name: 'OpenAI APIs', level: 85 },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, AI-powered solutions
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white bg-opacity-80 backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional tools section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">Tools & Technologies</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { name: 'AWS', icon: <FiServer /> },
              { name: 'Git', icon: <FiTool /> },
              { name: 'DynamoDB', icon: <FiDatabase /> },
              { name: 'MySQL', icon: <FiDatabase /> },
              { name: 'SQLite', icon: <FiDatabase /> },
              { name: 'Pandas', icon: <FiPackage /> },
              { name: 'NumPy', icon: <FiPackage /> },
              { name: 'Matplotlib', icon: <FiTrello /> },
              { name: 'Selenium', icon: <FiTool /> },
              { name: 'Lwt', icon: <FiCode /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.7 + (i * 0.05) }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center"
              >
                <span className="text-blue-500 mr-2">{item.icon}</span>
                <span className="text-sm font-medium text-gray-800">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;