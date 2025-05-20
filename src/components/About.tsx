import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-100 to-blue-100 rounded-bl-full opacity-70"></div>
      
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
            <h2 className="section-heading">About Me</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Portrait of Alex" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Decorator elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg border-8 border-primary-200 -z-10"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-8 border-blue-100 -z-10"></div>
              </div>
            </motion.div>
            
            {/* Text content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👋 Hi, I'm Alex Chen
              </h3>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  I'm a passionate frontend developer with 5 years of experience 
                  creating beautiful, functional websites and applications.
                </p>
                
                <p>
                  My journey in web development started when I built my first 
                  website for a local business while still in college. Since then, 
                  I've worked with various clients from startups to established 
                  companies.
                </p>
                
                <p>
                  I specialize in React, TypeScript, and modern CSS frameworks. 
                  I'm deeply committed to creating accessible, performant, and 
                  user-friendly interfaces that solve real problems.
                </p>
                
                <p>
                  When I'm not coding, you can find me hiking in the mountains, 
                  experimenting with new cooking recipes, or reading science fiction.
                </p>
              </div>
              
              {/* Personal details */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Name</h4>
                  <p className="text-gray-800">Alex Chen</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Location</h4>
                  <p className="text-gray-800">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Email</h4>
                  <p className="text-primary-600">alex@example.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase">Freelance</h4>
                  <p className="text-green-600">Available</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '12', label: 'Awards Received' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                className="glass rounded-xl p-6 text-center"
              >
                <h3 className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</h3>
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