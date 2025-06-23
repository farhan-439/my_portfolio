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
        fixed top-6 left-6 right-6 z-50 transition-all duration-500 ease-out
      `}
    >
<div
  className={`
    bg-gradient-to-r from-slate-200/60 via-slate-300/40 to-slate-400/30
    backdrop-blur-xl border border-slate-400/30
    rounded-2xl shadow-2xl transition-all duration-500 ease-out
    px-8 flex items-center justify-between h-10
    ${isScrolled ? 'shadow-black/30' : ''}
  `}
  style={{
    backgroundColor: 'rgba(226,232,240,0.35)', // fallback for glass effect
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
  }}
>
  {/* Logo / Name */}
  <a
    href="/"
    className="text-xl font-medium text-black hover:text-blue-950 transition-colors duration-300"
  >
    Farhan Mashrur
  </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-10 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-base font-medium text-black hover:text-blue-900 transition-all duration-300 relative
                hover:after:w-full after:content-[''] after:absolute after:bottom-[-4px] 
                after:left-0 after:w-0 after:h-[1px] after:bg-slate-100 after:transition-all after:duration-300
              "
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="
            md:hidden p-3 rounded-full text-slate-300 hover:text-slate-100 
            hover:bg-slate-700/50 transition-all duration-300
          "
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
        <nav className="md:hidden mt-3 bg-slate-800/90 backdrop-blur-xl border border-slate-600/40 rounded-2xl shadow-2xl">
          <div className="px-8 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-slate-100 text-base font-medium transition-colors duration-200"
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
              className="mt-6 flex items-center space-x-2 text-slate-300 hover:text-slate-100 text-base font-medium transition-colors duration-200"
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