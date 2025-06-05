// src/components/Navbar.tsx
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contacts' },
  ];

  return (
    <header
      /** 
       * Default (light): bg-white text-black  
       * Dark mode: bg-black text-white 
       **/
      className="
        fixed top-0 left-0 w-full z-50 
        bg-white bg-opacity-80 text-black backdrop-blur-md transition-colors duration-300
        dark:bg-black dark:bg-opacity-50 dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a
          href="/"
          className="text-xl font-semibold hover:text-cyan-500 transition-colors duration-200"
        >
          Farhan Mashrur
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              ml-4 p-2 rounded-md 
              hover:bg-gray-200 hover:dark:bg-gray-800 
              transition-colors duration-200
            "
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              /* Sun Icon (light mode) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 4.5a1 1 0 011 1v1.07a3.001 
                     3.001 0 01.805 5.048l.757.757a1 
                     1 0 010 1.414l-.757.757a3.001 
                     3.001 0 01-5.048.805H5.5a1 
                     1 0 010-2h1.07a3.001 3.001 
                     0 015.048-.805l.757-.757a1 
                     1 0 000-1.414l-.757-.757A3.001 
                     3.001 0 0111.07 5.5V4.5a1 
                     1 0 011-1z"
                />
              </svg>
            ) : (
              /* Moon Icon (dark mode) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293a8 
                     8 0 11-11.586-11.586 8 8 0 
                     0011.586 11.586z"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 focus:outline-none"
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

      {isOpen && (
        <nav className="md:hidden bg-white px-4 py-2 dark:bg-black">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-cyan-500 transition-colors"
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
            className="mt-2 flex items-center space-x-2 hover:text-cyan-500 transition-colors"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
