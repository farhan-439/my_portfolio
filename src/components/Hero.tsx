import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-block mb-6 p-2 bg-gray-100 rounded-full">
              <div className="px-4 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                Front-end Developer & UI Designer
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Creating digital experiences that 
              <span className="text-primary-600"> make an impact</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              I build modern, responsive web applications with a focus on 
              user experience, performance, and clean code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social links */}
            <div className="mt-12 flex items-center justify-center space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-1.5 h-3 bg-primary-500 rounded-full"
          />
        </motion.div>
        <p className="text-xs text-gray-500 mt-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;