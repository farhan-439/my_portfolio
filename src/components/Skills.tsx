import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  FiCode, FiLayout, FiServer, FiDatabase, 
  FiTool, FiPackage, FiAward, FiTrello 
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FiLayout className="w-6 h-6" />,
    skills: [
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'UI Technologies',
    icon: <FiCode className="w-6 h-6" />,
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Styled Components', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Material UI', level: 85 },
      { name: 'SASS/SCSS', level: 88 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <FiServer className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'RESTful APIs', level: 82 },
      { name: 'GraphQL', level: 65 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Others',
    icon: <FiTool className="w-6 h-6" />,
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Webpack', level: 75 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Performance Optimization', level: 80 },
      { name: 'SEO Basics', level: 85 },
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
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">My Skills</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
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
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional skills section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">Other Skills & Tools</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { name: 'Figma', icon: <FiLayout /> },
              { name: 'Jest', icon: <FiAward /> },
              { name: 'Docker', icon: <FiPackage /> },
              { name: 'MongoDB', icon: <FiDatabase /> },
              { name: 'Firebase', icon: <FiServer /> },
              { name: 'Storybook', icon: <FiTrello /> },
              { name: 'Netlify', icon: <FiServer /> },
              { name: 'Redux', icon: <FiPackage /> },
              { name: 'Vite', icon: <FiTool /> },
              { name: 'Photoshop', icon: <FiLayout /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.7 + (i * 0.05) }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center"
              >
                <span className="text-primary-500 mr-2">{item.icon}</span>
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