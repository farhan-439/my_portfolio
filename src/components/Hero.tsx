import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCode, FiServer, FiDatabase } from 'react-icons/fi';

const Hero = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Professional testimonials/recommendations
  const testimonials = [
    {
      quote: "Exceptional full-stack developer with strong problem-solving skills",
      name: "Tech Lead",
      company: "Previous Internship"
    },
    {
      quote: "Delivered high-quality code and exceeded project expectations",
      name: "Project Manager",
      company: "Freelance Client"
    },
    {
      quote: "Great team player with excellent technical communication",
      name: "Senior Developer",
      company: "Open Source Contributor"
    },
    {
      quote: "Innovative thinking and clean code architecture",
      name: "CTO",
      company: "Startup Collaboration"
    },
    {
      quote: "Reliable, efficient, and always delivers on time",
      name: "Product Manager",
      company: "Contract Work"
    },
    {
      quote: "Strong grasp of modern web technologies and best practices",
      name: "Senior Engineer",
      company: "Code Review"
    }
  ];

  // Skills that float around
  const floatingSkills = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" },
    { name: "AI/ML", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Cloud", icon: "☁️", color: "from-sky-500 to-blue-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-teal-600" }
  ];

  const achievements = [
    "Co-Founded JobLink",
    "Cornell CS Graduate",
    "Full-Stack Engineer",
    "Open Source Contributor",
    "AI/ML Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Skills */}
      {floatingSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`absolute z-10 px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-medium shadow-lg`}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            x: Math.random() * (window.innerWidth - 200),
            y: Math.random() * (window.innerHeight - 100),
            opacity: 0.8
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + (index % 4) * 20}%`,
            top: `${10 + Math.floor(index / 4) * 25}%`
          }}
        >
          <span className="mr-2">{skill.icon}</span>
          {skill.name}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 text-green-600 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Farhan
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Mashrur
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed">
                Full-Stack Engineer & Co-Founder
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Cornell CS & Economics graduate building innovative solutions at JobLink. 
                Passionate about creating scalable applications that solve real-world problems.
              </p>
            </motion.div>

            {/* Animated Testimonial */}
            <motion.div 
              className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg"
              variants={fadeInUp}
            >
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-800 font-medium mb-3">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <p className="text-sm text-gray-600">
                  — {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].company}
                </p>
              </motion.div>
            </motion.div>

            {/* Location & Education */}
            <motion.div className="flex flex-wrap gap-6 text-gray-600" variants={fadeInUp}>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-blue-500" size={18} />
                <span>Ithaca, NY</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Cornell University</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
              
              <motion.button
                className="group px-8 py-4 bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 font-semibold rounded-xl hover:bg-white/70 hover:border-gray-300/50 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload size={18} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex space-x-6" variants={fadeInUp}>
              {[
                { icon: FiGithub, href: "https://github.com/farhanmashrur", label: "GitHub" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/farhanmashrur", label: "LinkedIn" },
                { icon: FiTwitter, href: "https://twitter.com/farhanmashrur", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/30 backdrop-blur-sm border border-gray-200/30 text-gray-600 rounded-xl hover:bg-white/50 hover:border-gray-300/50 hover:text-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element with Profile */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                      FM
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Moving Achievements Marquee */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="marquee-container">
          <div className="marquee-inner">
            <div className="marquee-content">
              {achievements.map((achievement, i) => (
                <div key={`achievement-${i}`} className="marquee-item">
                  <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-gray-700 font-medium shadow-lg">
                    {achievement}
                  </div>
                </div>
              ))}
            </div>
            <div className="marquee-content">
              {achievements.map((achievement, i) => (
                <div key={`achievement-repeat-${i}`} className="marquee-item">
                  <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-gray-700 font-medium shadow-lg">
                    {achievement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ borderColor: ['#9CA3AF', '#3B82F6', '#9CA3AF'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        /* Marquee styles */
        .marquee-container {
          position: relative;
          overflow: hidden;
          height: 60px;
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        
        .marquee-inner {
          width: fit-content;
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        
        .marquee-content {
          display: flex;
          width: max-content;
          align-items: center;
        }
        
        .marquee-item {
          white-space: nowrap;
          padding: 0 16px;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Mobile speeds */
        @media (max-width: 767px) {
          .marquee-inner {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;