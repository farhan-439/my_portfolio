import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import profile from '../assets/profile.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-full opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-full max-w-md mx-auto">
                <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={profile}
                    alt="Portrait of Farhan Mashrur" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Decorator elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg border-8 border-blue-200 -z-10"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-8 border-indigo-100 -z-10"></div>
              </div>
            </motion.div>
            
            {/* Text content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👋 Hi, I'm Farhan Mashrur
              </h3>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  I'm a Cornell University student pursuing dual degrees in Computer Science and Economics, 
                  with a passion for building AI-powered solutions that solve real-world problems.
                </p>
                
                <p>
                  Currently, I'm the Co-Founder and Full-Stack Engineer at JobLink, where we've built 
                  an AI job-tracker that auto-parses Gmail to unify job application data with 97.82% precision. 
                  Our platform has already raised beta engagement by 40%.
                </p>
                
                <p>
                  My experience spans from leading engineering teams at Cornell Data Strategy to building 
                  real-time systems handling 100K+ queries daily during my internship at BRAC Bkash Limited. 
                  I'm passionate about machine learning, full-stack development, and creating scalable solutions.
                </p>
                
                <p>
                  When I'm not coding, you can find me teaching algorithms to 750+ students as a TA for 
                  Professor Jon Kleinberg, or working on hackathon projects that have won first place 
                  at Cornell competitions.
                </p>
              </div>
              
              {/* Personal details */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">University</h4>
                  <p className="text-gray-800">Cornell University</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Location</h4>
                  <p className="text-gray-800">Ithaca, NY</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Email</h4>
                  <p className="text-blue-600">fm454@cornell.edu</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Status</h4>
                  <p className="text-green-600">Open to Opportunities</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '3.85', label: 'GPA' },
              { value: '40%', label: 'Beta Engagement Boost' },
              { value: '97.82%', label: 'NLP Precision' },
              { value: '750+', label: 'Students Taught' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                className="bg-white bg-opacity-80 backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-xl p-6 text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;