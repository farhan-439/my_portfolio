import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MobileHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Network state for background nodes
  const nodesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    connected: boolean;
    originalX: number;
    originalY: number;
    targetX: number;
    targetY: number;
    scale: number;
    targetScale: number;
  }>>([]);

  const linesRef = useRef<Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    growing: boolean;
  }>>([]);

  const touchRef = useRef({ x: 0, y: 0, isActive: false, lastMoveTime: 0 });
  const isTouchedRef = useRef(false);
  const lastTouchTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSection = heroRef.current;
    if (!canvas || !heroSection) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match hero section
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = heroSection.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes - beautiful scattered pattern
    const nodeCount = 35;
    const nodes = nodesRef.current;
    nodes.length = 0;

    const heroRect = heroSection.getBoundingClientRect();
    const heroWidth = heroRect.width;
    const heroHeight = heroRect.height;

    // Create multiple clusters for visual appeal
    const clusters = [
      { centerX: heroWidth * 0.15, centerY: heroHeight * 0.25, radius: heroWidth * 0.12 },
      { centerX: heroWidth * 0.85, centerY: heroHeight * 0.2, radius: heroWidth * 0.1 },
      { centerX: heroWidth * 0.75, centerY: heroHeight * 0.7, radius: heroWidth * 0.08 },
      { centerX: heroWidth * 0.2, centerY: heroHeight * 0.75, radius: heroWidth * 0.06 }
    ];

    clusters.forEach((cluster, clusterIndex) => {
      const nodesInCluster = Math.floor(nodeCount / clusters.length) + (clusterIndex === 0 ? nodeCount % clusters.length : 0);
      
      for (let i = 0; i < nodesInCluster; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * cluster.radius;
        
        const x = cluster.centerX + Math.cos(angle) * distance;
        const y = cluster.centerY + Math.sin(angle) * distance;
        
        nodes.push({
          x: Math.max(20, Math.min(heroWidth - 20, x)),
          y: Math.max(20, Math.min(heroHeight - 20, y)),
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connected: false,
          originalX: x,
          originalY: y,
          targetX: x,
          targetY: y,
          scale: 1,
          targetScale: 1
        });
      }
    });

    // Touch tracking for mobile interaction
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      if (touch) {
        const newX = touch.clientX - rect.left;
        const newY = touch.clientY - rect.top;
        
        touchRef.current.x = newX;
        touchRef.current.y = newY;
        touchRef.current.isActive = true;
        touchRef.current.lastMoveTime = Date.now();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      if (touch) {
        touchRef.current.x = touch.clientX - rect.left;
        touchRef.current.y = touch.clientY - rect.top;
        touchRef.current.isActive = true;
        touchRef.current.lastMoveTime = Date.now();
      }
    };

    const handleTouchEnd = () => {
      touchRef.current.isActive = false;
    };

    // Touch tap handler for repel effect
    const handleTouchTap = (event: TouchEvent) => {
      isTouchedRef.current = true;
      lastTouchTimeRef.current = Date.now();
      
      const rect = canvas.getBoundingClientRect();
      const touch = event.changedTouches[0];
      const tapX = touch.clientX - rect.left;
      const tapY = touch.clientY - rect.top;

      nodes.forEach(node => {
        const dx = node.x - tapX;
        const dy = node.y - tapY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          node.vx += Math.cos(angle) * force * 3;
          node.vy += Math.sin(angle) * force * 3;
          node.targetScale = 0.3;
        }
      });

      setTimeout(() => {
        isTouchedRef.current = false;
      }, 1000);
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchend', handleTouchTap);

    // Animation loop
    let lastFrameTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = currentTime;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const timeSinceTouch = currentTime - lastTouchTimeRef.current;
      const timeSinceMove = currentTime - touchRef.current.lastMoveTime;
      const isTouchStill = touchRef.current.isActive && timeSinceMove > 400;

      // Update nodes with natural movement
      nodes.forEach(node => {
        if (Math.abs(node.vx) < 0.08) node.vx += (Math.random() - 0.5) * 0.04;
        if (Math.abs(node.vy) < 0.08) node.vy += (Math.random() - 0.5) * 0.04;

        if (!isTouchedRef.current) {
          node.vx *= 0.997;
          node.vy *= 0.997;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Boundary bounce
        if (node.x <= 0 || node.x >= rect.width) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(rect.width, node.x));
        }
        if (node.y <= 0 || node.y >= rect.height) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(rect.height, node.y));
        }

        // Touch interaction
        if (touchRef.current.isActive) {
          const touchDx = node.x - touchRef.current.x;
          const touchDy = node.y - touchRef.current.y;
          const touchDistance = Math.sqrt(touchDx * touchDx + touchDy * touchDy);

          if (isTouchStill && touchDistance < 140 && !isTouchedRef.current) {
            const attractionForce = (140 - touchDistance) / 140;
            const angle = Math.atan2(-touchDy, -touchDx);
            node.vx += Math.cos(angle) * attractionForce * 0.03;
            node.vy += Math.sin(angle) * attractionForce * 0.03;
          }
        }

        if (timeSinceTouch > 1000) {
          node.targetScale = 1;
        }

        node.scale += (node.targetScale - node.scale) * 0.1;
      });

      // Dynamic connections
      const lines = linesRef.current;
      const connectionDistance = 90;
      const touchDistance = 140;

      lines.length = 0;

      // Node-to-node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            lines.push({
              x1: nodes[i].x,
              y1: nodes[i].y,
              x2: nodes[j].x,
              y2: nodes[j].y,
              opacity: opacity * 0.3,
              growing: false
            });
          }
        }

        // Touch-to-node connections
        if (touchRef.current.isActive) {
          const touchDx = nodes[i].x - touchRef.current.x;
          const touchDy = nodes[i].y - touchRef.current.y;
          const touchDistanceToNode = Math.sqrt(touchDx * touchDx + touchDy * touchDy);

          if (touchDistanceToNode < touchDistance) {
            const opacity = 1 - (touchDistanceToNode / touchDistance);
            lines.push({
              x1: nodes[i].x,
              y1: nodes[i].y,
              x2: touchRef.current.x,
              y2: touchRef.current.y,
              opacity: opacity * 0.7,
              growing: true
            });
          }
        }
      }

      // Draw lines
      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        if (line.growing) {
          ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`;
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = `rgba(100, 116, 139, ${line.opacity})`;
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(node => {
        let isNearTouch = false;
        let touchDistanceToNode = Infinity;
        
        if (touchRef.current.isActive) {
          const touchDx = node.x - touchRef.current.x;
          const touchDy = node.y - touchRef.current.y;
          touchDistanceToNode = Math.sqrt(touchDx * touchDx + touchDy * touchDy);
          isNearTouch = touchDistanceToNode < 80;
        }

        ctx.beginPath();
        const baseRadius = isNearTouch ? 3 : 2;
        const scaledRadius = baseRadius * node.scale;
        ctx.arc(node.x, node.y, scaledRadius, 0, Math.PI * 2);

        if (isNearTouch) {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        } else {
          const alpha = Math.max(0.3, 0.6 * node.scale);
          ctx.fillStyle = `rgba(100, 116, 139, ${alpha})`;
        }
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);
    setIsLoaded(true);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchend', handleTouchTap);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Backdrop Layer */}
      <div className="absolute inset-0 z-0 bg-slate-50/20 backdrop-blur-sm" />
      
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 touch-none"
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 1s ease-in-out'
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center pointer-events-none">
        
        {/* Name - Main Focus with original styling */}
        <div className="mb-6 mt-4">
          <h1
            className="text-7xl sm:text-8xl md:text-9xl font-thin text-gray-900 tracking-tight mb-4"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Farhan
          </h1>
          <h2
            className="text-7xl sm:text-8xl md:text-9xl font-thin text-gray-900 tracking-tight mb-6"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Mashrur
          </h2>
        </div>

        {/* Education & Field */}
        <div className="mb-6 space-y-3">
          <p className="text-xl sm:text-2xl font-light text-gray-800 mb-3">
            Computer Science & Economics
          </p>
          
          {/* Cornell Badge - Original styling */}
          <div className="inline-flex items-center">
            <div
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-sm shadow-xl"
              style={{
                boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3), 0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <span className="mr-2"></span>
              Sophomore @ Cornell University 🎓 
            </div>
          </div>
        </div>

        {/* Contact Info - Centered in layout */}
        <motion.div
          className="mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span>fm454@cornell.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>Ithaca, NY</span>
          </div>
        </motion.div>

        {/* CTA Buttons - Original styling */}
        <div className="flex gap-4 pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-full font-medium text-sm shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{
              boxShadow: '0 8px 25px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Resume
          </motion.button>
        </div>
      </div>

      {/* Floating Professional Links - Original colorful styling */}
      <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-3 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          style={{
            boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
          }}
          title="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          style={{
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }}
          title="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default MobileHero;