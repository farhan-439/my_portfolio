import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MobileHero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Create floating particles for mobile
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 mb-8 bg-white/30 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            Available • May 2027
          </span>
        </motion.div>

        {/* Name with Staggered Animation */}
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-thin text-gray-900 tracking-tight mb-2"
          >
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
              Farhan
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl font-thin text-gray-900 tracking-tight"
          >
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
              Mashrur
            </span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 space-y-1"
        >
          <p className="text-xl font-light text-gray-700">
            Computer Science & Economics
          </p>
          <p className="text-lg font-light text-gray-600">
            Cornell University • Full-Stack • AI/ML
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col gap-4 mb-10 w-full max-w-xs"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-sm">
            {['React', 'Python', 'AI/ML', 'TypeScript', 'PostgreSQL', 'Flask'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                className="px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-gray-200/50 text-sm font-medium text-gray-700 shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-600 mb-3 font-light">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button for Quick Contact */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        className="fixed bottom-6 right-6 z-20"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-6 w-20 h-20 bg-blue-200/30 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-8 w-16 h-16 bg-indigo-200/30 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-4 w-12 h-12 bg-purple-200/30 rounded-full blur-lg" />
    </div>
  );
};

export default MobileHero;