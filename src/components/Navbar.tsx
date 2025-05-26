import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ease-out ${
    scrolled 
      ? 'py-2 bg-white/70 backdrop-blur-xl border-b border-gray-200/20 shadow-sm' 
      : 'py-4 bg-transparent'
  }`;

  const linkClasses = `text-gray-700 hover:text-gray-900 font-normal transition-all duration-200 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100/50 ${
    scrolled ? 'text-sm' : 'text-sm'
  }`;

  return (
    <header className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Apple-style clean */}
          <motion.a 
            href="#home" 
            className="text-xl font-light text-gray-900 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            F<span className="font-medium">M</span>
          </motion.a>

          {/* Desktop Navigation - Apple-style spacing */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className={linkClasses}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Resume Button - Apple-style refined */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-black text-white hover:bg-gray-800 font-medium transition-all duration-200 px-4 py-2 rounded-full text-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Button - Apple-style minimal */}
          <motion.button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-5 h-0.5 bg-current rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 2 : -2,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current rounded-full mt-1"
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current rounded-full mt-1"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -2 : 2,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Apple-style elegant */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-gray-200/20"
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="block py-3 font-normal text-gray-700 hover:text-gray-900 border-b border-gray-100/50 last:border-b-0 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isOpen ? index * 0.05 : 0,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 mt-4 text-center bg-black text-white hover:bg-gray-800 font-medium rounded-full transition-colors duration-200"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 20 
            }}
            transition={{ 
              duration: 0.3, 
              delay: isOpen ? navLinks.length * 0.05 + 0.1 : 0,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;