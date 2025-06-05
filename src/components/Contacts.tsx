import React, { useState } from 'react';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your email backend or service (e.g. Formspree, Netlify Forms, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          <p className="text-gray-300">
            Whether it’s a project collaboration, a quick question, or just to say hey—drop me a line.
          </p>
          <div className="flex items-center space-x-2 text-white">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-500"
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
            <a href="mailto:fpm33@cornell.edu" className="hover:text-cyan-400">
              fpm33@cornell.edu
            </a>
          </div>
          <div className="flex items-center space-x-2 text-white">
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-500"
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
                         2.75 1.037 4.25v4h-.001zm0 
                         0"/>
            </svg>
            <a
              href="https://www.linkedin.com/in/farhanmashrur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              linkedin.com/in/farhanmashrur
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2">
          {submitted ? (
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-cyan-400 font-medium">
                Thanks! Your message has been sent.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 border border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 border border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 border border-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
