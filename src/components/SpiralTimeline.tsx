import React, { useRef, useEffect, useState } from 'react';

/**
 * If you already have a `projects` array/import, swap it here.
 * Each item needs at least: { title: string; videoURL: string }.
 */
const projects = [
  {
    title: 'AI Resume Scorer',
    videoURL: '/src/assets/demo1.mp4',
  },
  {
    title: 'Review Scraper',
    videoURL: '/src/assets/demo2.mp4',
  },
  {
    title: 'Office Seating System',
    videoURL: '/src/assets/demo3.mp4',
  },
  // …add more items as desired
];

/**
 * Hook: useInView – returns { ref, inView }.
 * Once the element enters the viewport (rootMargin), it sets inView=true.
 */
function useInView(rootMargin = '0px') {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return { ref, inView };
}

interface TimelineItemProps {
  x: number;
  y: number;
  project: { title: string; videoURL: string };
}

const TimelineItem: React.FC<TimelineItemProps> = ({ x, y, project }) => {
  const { ref, inView } = useInView('-100px');

  return (
    <div
      ref={ref}
      className={`
        absolute
        w-36
        md:w-48
        bg-gray-200 dark:bg-gray-800
        rounded-lg
        overflow-hidden
        shadow-lg
        transition-all
        duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        top: `${y}px`,
        left: `calc(50% + ${x}px)`,
        transform: `translateX(-50%)`,
      }}
    >
      {/* Video Preview */}
      <div className="h-24 md:h-28 bg-white dark:bg-black flex items-center justify-center overflow-hidden">
        <video
          src={project.videoURL}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Title Bar */}
      <div className="p-2 bg-gray-300 dark:bg-gray-700">
        <h3 className="text-black dark:text-white text-sm md:text-base font-medium text-center">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const SpiralTimeline: React.FC = () => {
  const deltaTheta = 1.2; // ~68° between points
  const b = 60;           // “growth” factor in px

  // 1) Compute raw (x,y) for each index
  const rawPositions = projects.map((_, i) => {
    const theta = (i + 1) * deltaTheta;
    const r = b * theta;
    return {
      x: r * Math.cos(theta),
      y: r * Math.sin(theta),
    };
  });

  // 2) Find min/max Y to size container
  const allYs = rawPositions.map((p) => p.y);
  const minRawY = Math.min(...allYs);
  const maxRawY = Math.max(...allYs);
  const verticalPadding = 120;
  const containerHeight = maxRawY - minRawY + verticalPadding * 2;

  return (
    <div
      className="relative w-full bg-white dark:bg-black"
      style={{ height: `${containerHeight}px` }}
    >
      {rawPositions.map((pos, idx) => {
        const shiftedY = pos.y - minRawY + verticalPadding;
        return (
          <TimelineItem
            key={projects[idx].title + idx}
            x={pos.x}
            y={shiftedY}
            project={projects[idx]}
          />
        );
      })}
    </div>
  );
};

export default SpiralTimeline;
