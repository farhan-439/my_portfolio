import React, { useRef, useEffect, useState } from 'react';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '-50px', ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
};

interface Project {
  title: string;
  videoURL: string;
}

interface TimelineItemProps {
  project: Project;
  x: number;
  y: number;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ project, x, y, index }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`absolute w-40 md:w-48 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `${y}px`,
        transform: 'translateX(-50%)',
        zIndex: 10 - (index % 10)
      }}
    >
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Video Section */}
        <div className="h-24 md:h-28 bg-gray-900 flex items-center justify-center overflow-hidden relative">
          {/* Fallback background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"></div>
          
          {/* Video or placeholder */}
          <video
            className="w-full h-full object-cover relative z-10"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              // Hide video on error, show gradient background
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src={project.videoURL} type="video/mp4" />
          </video>
          
          {/* Fallback content */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm z-0">
            Project {index + 1}
          </div>
        </div>
        
        {/* Title Section */}
        <div className="p-3 bg-gray-300 dark:bg-gray-700">
          <h3 className="text-black dark:text-white text-sm md:text-base font-medium text-center leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const SpiralTimeline: React.FC = () => {
  const projects: Project[] = [
    { title: 'E-Commerce Platform', videoURL: demo1 },
    { title: 'ML Prediction Model', videoURL: demo2 },
    { title: 'Social Media Dashboard', videoURL: demo3 },
    { title: 'Task Management App', videoURL: demo1 },
    { title: 'Weather Analytics Tool', videoURL: demo2 },
    { title: 'Portfolio Website', videoURL: demo3 },
    { title: 'Real-time Chat App', videoURL: demo1 },
    { title: 'Data Visualization Dashboard', videoURL: demo2 },
    { title: 'Mobile Banking App', videoURL: demo3 },
    { title: 'AI Content Generator', videoURL: demo1 },
    { title: 'Inventory Management System', videoURL: demo2 },
    { title: 'Fitness Tracking App', videoURL: demo3 }
  ];

  // Spiral calculation parameters
  const centerX = 0; // Center of the spiral
  const centerY = 200; // Starting Y position
  const spiralSpacing = 80; // Distance between spiral arms
  const angleIncrement = 0.8; // How much the angle increases per item
  const radiusGrowth = 25; // How much radius increases per revolution

  // Calculate positions for each project
  const positions = projects.map((_, index) => {
    const angle = index * angleIncrement;
    const radius = radiusGrowth * angle;
    
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle) + (index * spiralSpacing);
    
    return { x, y, angle, radius };
  });

  // Calculate container dimensions
  const allX = positions.map(p => p.x);
  const allY = positions.map(p => p.y);
  
  const minX = Math.min(...allX) - 120; // Add padding for card width
  const maxX = Math.max(...allX) + 120;
  const minY = Math.min(...allY) - 100;
  const maxY = Math.max(...allY) + 200;
  
  const containerWidth = maxX - minX;
  const containerHeight = maxY - minY;

  // Adjust positions relative to container
  const adjustedPositions = positions.map(pos => ({
    x: pos.x - minX - containerWidth / 2,
    y: pos.y - minY
  }));

  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white text-center mb-16">
          Project Timeline
        </h2>
        
        {/* Timeline Container */}
        <div className="relative mx-auto overflow-hidden">
          <div 
            className="relative mx-auto"
            style={{ 
              width: '100%',
              maxWidth: `${Math.min(containerWidth, 1000)}px`,
              height: `${containerHeight}px`,
              minHeight: '800px'
            }}
          >
            {/* Optional: Add a subtle spiral guide line */}
            <svg 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ width: '100%', height: '100%' }}
            >
              <defs>
                <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Draw spiral path */}
              <path
                d={`M ${containerWidth/2} ${adjustedPositions[0]?.y || 0} ${
                  adjustedPositions.slice(1).map((pos, index) => 
                    `L ${pos.x + containerWidth/2} ${pos.y}`
                  ).join(' ')
                }`}
                stroke="url(#spiralGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Timeline Items */}
            {projects.map((project, index) => {
              const position = adjustedPositions[index];
              if (!position) return null;
              
              return (
                <TimelineItem
                  key={index}
                  project={project}
                  x={position.x}
                  y={position.y}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        
        {/* Timeline Legend */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Scroll through my project journey arranged in a spiral timeline. Each card represents a significant project 
            that showcases different aspects of my development skills and creative problem-solving approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpiralTimeline;