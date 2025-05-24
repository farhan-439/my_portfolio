import React, { useRef, useEffect, useState } from 'react';

const AppleStyleHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Network state
  const nodesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    connected: boolean;
  }>>([]);
  const linesRef = useRef<Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    growing: boolean;
  }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = 90;
    const nodes = nodesRef.current;
    nodes.length = 0;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connected: false
      });
    }

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach(node => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bounce
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Check connections and draw lines
      const lines = linesRef.current;
      const connectionDistance = 120;
      const mouseDistance = 180;

      // Clear old lines
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

        // Mouse-to-node connections
        const mouseDx = nodes[i].x - mouseRef.current.x;
        const mouseDy = nodes[i].y - mouseRef.current.y;
        const mouseDistanceToNode = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistanceToNode < mouseDistance) {
          const opacity = 1 - (mouseDistanceToNode / mouseDistance);
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: mouseRef.current.x,
            y2: mouseRef.current.y,
            opacity: opacity * 0.8,
            growing: true
          });
        }
      }

      // Draw lines
      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        
        if (line.growing) {
          ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`; // Blue for mouse connections
          ctx.lineWidth = 2;
        } else {
          ctx.strokeStyle = `rgba(100, 116, 139, ${line.opacity})`; // Gray for node connections
          ctx.lineWidth = 1;
        }
        
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(node => {
        // Check if node is near mouse
        const mouseDx = node.x - mouseRef.current.x;
        const mouseDy = node.y - mouseRef.current.y;
        const mouseDistanceToNode = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        const isNearMouse = mouseDistanceToNode < 100;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isNearMouse ? 4 : 2, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? 'rgba(59, 130, 246, 0.8)' : 'rgba(100, 116, 139, 0.6)';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Pre-title */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-gray-200/30">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Available for Full-Time • May 2027</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-thin text-gray-900 tracking-tight">
                Farhan
              </h1>
              <h2 className="text-6xl md:text-8xl font-thin text-gray-900 tracking-tight">
                Mashrur
              </h2>
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-light text-gray-700">
                Computer Science & Economics
              </p>
              <p className="text-lg md:text-xl font-light text-gray-600">
                Cornell University • Full-Stack Engineer • AI/ML
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                View Projects
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Get In Touch
              </button>
            </div>

            {/* Skills Highlight */}
            <div className="pt-12">
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
                {['React', 'Python', 'AI/ML', 'TypeScript', 'PostgreSQL', 'Flask'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-gray-200/50"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.8s ease-out forwards',
                      opacity: 0,
                      transform: 'translateY(20px)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600 font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AppleStyleHero;