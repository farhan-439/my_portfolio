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
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false, lastMoveTime: 0 });
  const isClickedRef = useRef(false);
  const lastClickTimeRef = useRef(0);

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
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push({
        x,
        y,
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

    // Mouse tracking with movement detection
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = event.clientX - rect.left;
      const newY = event.clientY - rect.top;
      
      // Detect if mouse is actually moving
      const moved = Math.abs(newX - mouseRef.current.x) > 1 || Math.abs(newY - mouseRef.current.y) > 1;
      
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
      mouseRef.current.isMoving = moved;
      mouseRef.current.lastMoveTime = Date.now();
    };

    // Click handler for zoom away effect
    const handleClick = (event: MouseEvent) => {
      isClickedRef.current = true;
      lastClickTimeRef.current = Date.now();
      
      // Create explosive push away effect
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      
      nodes.forEach(node => {
        const dx = node.x - clickX;
        const dy = node.y - clickY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          const angle = Math.atan2(dy, dx);
          
          // Push nodes away
          node.vx += Math.cos(angle) * force * 3;
          node.vy += Math.sin(angle) * force * 3;
          
          // Scale down temporarily
          node.targetScale = 0.3;
        }
      });
      
      // Reset click state after animation
      setTimeout(() => {
        isClickedRef.current = false;
      }, 1000);
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    // Track mouse stillness
    let mouseStillTimer: NodeJS.Timeout;
    const checkMouseStillness = () => {
      const timeSinceLastMove = Date.now() - mouseRef.current.lastMoveTime;
      mouseRef.current.isMoving = timeSinceLastMove < 100;
      mouseStillTimer = setTimeout(checkMouseStillness, 50);
    };
    checkMouseStillness();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();
      const timeSinceClick = currentTime - lastClickTimeRef.current;
      const timeSinceMove = currentTime - mouseRef.current.lastMoveTime;
      const isMouseStill = timeSinceMove > 500; // Mouse still for 500ms

      // Update nodes
      nodes.forEach(node => {
        // Ensure minimum movement - add small random drift
        if (Math.abs(node.vx) < 0.1) node.vx += (Math.random() - 0.5) * 0.05;
        if (Math.abs(node.vy) < 0.1) node.vy += (Math.random() - 0.5) * 0.05;

        // Natural movement with very light damping to keep nodes moving
        if (!isClickedRef.current) {
          node.vx *= 0.998; // Reduced damping to maintain movement
          node.vy *= 0.998;
        }

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bounce
        if (node.x <= 0 || node.x >= canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y <= 0 || node.y >= canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        // Calculate distance to mouse
        const mouseDx = node.x - mouseRef.current.x;
        const mouseDy = node.y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        // Attraction effect when mouse is still and close to nodes
        if (isMouseStill && mouseDistance < 150 && !isClickedRef.current) {
          const attractionForce = (150 - mouseDistance) / 150;
          const angle = Math.atan2(-mouseDy, -mouseDx);
          
          // Gentle attraction towards mouse
          node.vx += Math.cos(angle) * attractionForce * 0.02;
          node.vy += Math.sin(angle) * attractionForce * 0.02;
        }
        
        // Scale handling for click effect only
        if (timeSinceClick > 1000) {
          node.targetScale = 1;
        }

        // Smooth scale transition
        node.scale += (node.targetScale - node.scale) * 0.1;
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

        // Mouse-to-node connections (stronger when mouse is still)
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
        
        // Apply scale to node radius
        const baseRadius = isNearMouse ? 4 : 2;
        const scaledRadius = baseRadius * node.scale;
        
        ctx.arc(node.x, node.y, scaledRadius, 0, Math.PI * 2);
        
        // Standard colors
        if (isNearMouse) {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        } else {
          const alpha = Math.max(0.3, 0.6 * node.scale); // Fade out when scaled down
          ctx.fillStyle = `rgba(100, 116, 139, ${alpha})`;
        }
        
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
      canvas.removeEventListener('click', handleClick);
      clearTimeout(mouseStillTimer);
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
        className="absolute inset-0 z-10 cursor-crosshair"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center pointer-events-none">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Pre-title */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-gray-200/30">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Available for Full-Time • May 2027</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4 ">
              <h1 className="w-fit mx-auto text-6xl md:text-8xl font-thin text-gray-900 tracking-tight bg-slate-50/20 backdrop-blur-sm ">
                Farhan
              </h1>
              <h2 className="w-fit mx-auto text-6xl md:text-8xl font-thin text-gray-900 bg-slate-50/20 backdrop-blur-sm tracking-tight">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 pointer-events-auto">
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
          <span className="text-sm text-gray-600 font-light">Scroll to explore • Hold still to attract nodes • Click to repel</span>
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