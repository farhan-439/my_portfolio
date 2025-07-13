import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-50px', ...options }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
};

const ContactFooterSection = () => {
  const [contactRef, contactInView] = useInView();
  const [contactHasBeenInView, setContactHasBeenInView] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (contactInView && !contactHasBeenInView) {
      setContactHasBeenInView(true);
    }
  }, [contactInView, contactHasBeenInView]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if all required environment variables are available
    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not properly configured. Please contact the administrator.');
      console.error('Missing EmailJS environment variables');
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
    .then(() => {
      alert('Message sent!');
      formRef.current?.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  return (
    <div className="w-full" style={{ backgroundColor: '#e3e3e3' }}>
      {/* Contact Section */}
      <section className="px-1 py-12">
        <div className="max-w-8xl md:px-10 px-4">
          <div
            ref={contactRef}
            className={`bg-black rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-700 ${
              contactHasBeenInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">Let's Connect</h2>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Always open to discussing new opportunities and innovative projects.
              </p>
            </div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Contact Info - Column 1 */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="text-white text-lg font-medium mb-6">Get In Touch</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:fm454@cornell.edu" className="text-white hover:text-blue-400 transition-colors text-sm">
                      fm454@cornell.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/farhanmashrur/" className="text-white hover:text-blue-400 transition-colors text-sm">
                      /in/farhanmashrur
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a href="https://github.com/farhan-439" className="text-white hover:text-blue-400 transition-colors text-sm">
                      /farhan-439
                    </a>
                  </div>
                </div>
              </div>

              {/* Beyond Code - Column 2 */}
              <div className="lg:col-span-3 space-y-6">
                <h3 className="text-white text-lg font-medium mb-6">Beyond Code</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-white text-sm font-medium">Poker & Chess</p>
                    <p className="text-gray-400 text-sm">Good at one of them</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Movies</p>
                    <p className="text-gray-400 text-sm">Honorary mention: 12 Angry Men</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Bowling</p>
                    <p className="text-gray-400 text-sm">Favorite pastime</p>
                  </div>
                </div>
              </div>

              {/* Quick Form - Column 3 (Larger) */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-white text-lg font-medium mb-6">Send a Message</h3>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
                      placeholder="Your name"
                      required
                    />
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="relative mt-4">
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 pr-12 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-400 text-sm"
                      placeholder="Your message..."
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 text-black rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="border-t border-gray-300 py-8 px-1">
        <div className="max-w-8xl md:px-10 px-4">
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm text-center">
              © 2025 • All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooterSection;