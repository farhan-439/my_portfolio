// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contacts' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      `}
    >
      <div
        className={`
          ${isScrolled 
            ? 'bg-slate-200 backdrop-blur-xl border-b border-slate-400/30 shadow-2xl'
            : 'bg-transparent'
          }
          transition-all duration-500 ease-out
          px-8 flex items-center justify-between h-12
        `}
        style={isScrolled ? {
          backgroundColor: 'rgba(226,232,240,0.35)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
        } : {}}
      >
        {/* Logo / Name */}
        <a
          href="/"
          className={`
            text-base font-medium transition-colors duration-300
            ${isScrolled 
              ? 'text-black hover:text-blue-950' 
              : 'text-black hover:text-blue-950'
            }
          `}
        >
          Farhan Mashrur
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-10 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                text-base font-medium transition-all duration-300 relative
                ${isScrolled 
                  ? 'text-black hover:text-blue-900 hover:after:bg-blue-900' 
                  : 'text-black hover:text-blue-900 hover:after:bg-blue-900'
                }
                hover:after:w-full after:content-[''] after:absolute after:bottom-[-4px] 
                after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className={`
            md:hidden p-3 rounded-full transition-all duration-300
            ${isScrolled 
              ? 'text-black hover:text-blue-900 hover:bg-slate-200/50' 
              : 'text-black hover:text-blue-900 hover:bg-slate-200/50'
            }
          `}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className={`
          md:hidden backdrop-blur-xl shadow-2xl
          ${isScrolled 
            ? 'bg-gradient-to-r from-slate-200/80 via-slate-300/60 to-slate-400/50 border-b border-slate-400/30' 
            : 'bg-black/80 border-b border-gray-700/50'
          }
        `}>
          <div className="px-8 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  block text-base font-medium transition-colors duration-200
                  ${isScrolled 
                    ? 'text-black hover:text-blue-900' 
                    : 'text-white hover:text-gray-300'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className={`
                mt-6 flex items-center space-x-2 text-base font-medium transition-colors duration-200
                ${isScrolled 
                  ? 'text-black hover:text-blue-900' 
                  : 'text-white hover:text-gray-300'
                }
              `}
            >
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;