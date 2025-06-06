import React, { useState } from 'react';

const EmailIcon = () => (
  <svg className="h-6 w-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-6 w-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold text-black dark:text-white text-center mb-8">
        Get In Touch
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Contact Info */}
        <div className="md:w-1/2">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always interested in new opportunities and exciting projects. 
            Whether you want to collaborate or just say hello, feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <EmailIcon />
              <a 
                href="mailto:fm378@cornell.edu" 
                className="text-black dark:text-white hover:text-cyan-500 transition-colors"
              >
                fm378@cornell.edu
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <LinkedInIcon />
              <a 
                href="https://linkedin.com/in/farhanmashrur" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-cyan-500 transition-colors"
              >
                linkedin.com/in/farhanmashrur
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:w-1/2">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 border border-gray-300 dark:border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 border border-gray-300 dark:border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 border border-gray-300 dark:border-gray-700"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-black dark:text-white font-medium rounded transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-cyan-500 font-medium">
                Thanks! Your message has been sent.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacts;