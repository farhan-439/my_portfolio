import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiSend, FiAlertCircle, FiCheck, FiLinkedin, FiGithub } from 'react-icons/fi';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitStatus('success');
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-br-full opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-50 rounded-tl-full opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect!
          </p>
        </div>
        
        <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-10 opacity-90">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold opacity-80 mb-1">Phone</h4>
                    <p>607-327-7665</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold opacity-80 mb-1">Email</h4>
                    <p>fm454@cornell.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold opacity-80 mb-1">Location</h4>
                    <p>Ithaca, New York</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-14">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/farhanmashrur" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/farhanmashrur" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://joblink.one" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="JobLink website"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white bg-opacity-80 backdrop-blur-lg border border-white border-opacity-20 shadow-lg p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-center">
                  <FiCheck className="w-5 h-5 mr-2" />
                  <span>Your message has been sent successfully!</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg flex items-center">
                  <FiAlertCircle className="w-5 h-5 mr-2" />
                  <span>There was an error sending your message. Please try again.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full p-3 border ${
                        errors.name ? 'border-red-400' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full p-3 border ${
                        errors.email ? 'border-red-400' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className={`w-full p-3 border ${
                      errors.subject ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className={`w-full p-3 border ${
                      errors.message ? 'border-red-400' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <FiSend className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;