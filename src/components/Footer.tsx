import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              Alex<span className="text-primary-400">Dev</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Creating beautiful digital experiences with clean, efficient code.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Portfolio Source', href: 'https://github.com' },
                  { name: 'Resume', href: '/resume.pdf' },
                  { name: 'Blog', href: 'https://example.com/blog' },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">alex@example.com</li>
                <li className="text-gray-300">+1 (123) 456-7890</li>
                <li className="text-gray-300">San Francisco, CA</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FiTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
              { icon: <FiInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
            
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;