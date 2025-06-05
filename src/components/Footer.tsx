import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Farhan Mashrur. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* GitHub */}
          <a
            href="https://github.com/farhan-439"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 
                   12.016c0 4.426 2.865 8.183 6.839 
                   9.504.5.092.682-.217.682-.483 
                   0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 
                   1.004.071 1.531 1.032 1.531 1.032.892 
                   1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                   0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.27.098-2.647 
                   0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 
                   6.844c.85.004 1.705.115 2.504.337 1.909-1.294 
                   2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 
                   2.647.64.7 1.028 1.595 1.028 2.688 
                   0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 
                   1.852 0 1.337-.012 2.419-.012 2.748 
                   0 .268.18.58.688.482A10.025 10.025 0 0022 
                   12.016C22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/farhanmashrur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 
                         2.239-5 5v14c0 2.761 2.239 
                         5 5 5h14c2.761 0 5-2.239 
                         5-5v-14c0-2.761-2.239-5-5-5zm-11.5 
                         19h-3v-9h3v9zm-1.5-10.291c-.966 
                         0-1.75-.783-1.75-1.75s.784-1.75 
                         1.75-1.75 1.75.783 1.75 
                         1.75-.784 1.75-1.75 
                         1.75zm13 10.291h-3v-4.5c0-1.104-.896-2-2-2s-2 
                         .896-2 2v4.5h-3v-9h3v1.25c.977-1.4 
                         2.835-1.5 3.963-.5 1.128 1 1.037 
                         2.75 1.037 4.25v4h-.001z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:fpm33@cornell.edu"
            className="text-gray-500 hover:text-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
