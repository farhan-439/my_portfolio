// src/components/Hero.tsx
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import profileImg from '../assets/profile.jpg';
import demo1 from '../assets/demo1.mp4';
import demo2 from '../assets/demo2.mp4';
import demo3 from '../assets/demo3.mp4';

const projectVideos = [
  { title: "JobLink AI Platform", tech: "React • Flask • NLP", video: demo1 },
  { title: "Disease Detection ML", tech: "TensorFlow • PyTorch", video: demo2 },
  { title: "TableTalk Analytics", tech: "Python • OpenAI", video: demo3 }
];

function Model() {
  try {
    // Load the spline export from public directory
    const { scene } = useGLTF('/spline.gltf');
    
    // Debug: Log the scene to see if it loaded
    console.log('Spline scene loaded:', scene);
    
    // Clone the scene to avoid issues with multiple instances
    const clonedScene = scene.clone();
    
    // Make sure the model has materials
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        console.log('Found mesh:', child.name);
        // Ensure the mesh is visible
        child.visible = true;
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Add a basic material if none exists
        if (!child.material) {
          child.material = new THREE.MeshStandardMaterial({ color: 0x4f46e5 });
        }
      }
    });
    
    return (
      <primitive 
        object={clonedScene} 
        position={[0, -1, 0]} 
        scale={1.5} 
        rotation={[0, Math.PI, 0]} 
        castShadow 
        receiveShadow 
      />
    );
  } catch (error) {
    console.error('Error loading Spline model:', error);
    return <FallbackModel />;
  }
}

// Visible fallback model
function FallbackModel() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main geometric shape */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#4f46e5" 
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Orbiting elements */}
      <mesh position={[2, 1, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[-1.5, -0.5, 1]} castShadow receiveShadow>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload('/spline.gltf');

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [modelError, setModelError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fallback component in case the 3D model fails to load
  const ModelFallback = () => (
    <FallbackModel />
  );

  return (
    <div className="relative min-h-screen pt-16 bg-white dark:bg-black overflow-hidden">
      {/* 3D Spline Model in background */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        shadows
        onCreated={(state) => {
          // Enable shadows
          state.gl.shadowMap.enabled = true;
          state.gl.shadowMap.type = THREE.PCFSoftShadowMap;
          state.gl.setClearColor('#f0f0f0');
          console.log('Canvas created successfully');
        }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <hemisphereLight 
          skyColor="#ffffff" 
          groundColor="#444444" 
          intensity={0.4} 
        />
        <Suspense fallback={<ModelFallback />}>
          {!modelError ? (
            <ErrorBoundary onError={() => setModelError(true)}>
              <Model />
            </ErrorBoundary>
          ) : (
            <ModelFallback />
          )}
        </Suspense>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Apple-style subtle grid background overlay (still under content) */}
      <div className="absolute inset-0 bg-white dark:bg-black pointer-events-none">
        <div
          className="absolute inset-0 dark:opacity-20"
          style={{
            backgroundImage:
              `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/10">
              <img
                src={profileImg}
                alt="Farhan Mashrur"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full ring-4 ring-white dark:ring-black flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-3 tracking-tight">
            Farhan Mashrur
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Computer Science & Economics
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            Cornell University • Class of 2027 • 3.87 GPA
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Full-Stack Developer','ML Researcher','Startup Co-founder'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 space-y-4 text-left">
            <p>
              I'm <strong>Farhan Mashrur</strong>, a junior at <strong>Cornell University</strong> pursuing dual BA degrees in CS & Economics, graduating May 2027 with a 3.87 GPA.
            </p>
            <p>
              As <strong>Co-Founder & Full-Stack Engineer at JobLink</strong> (launched Feb 2025), I built an AI-powered job-tracking platform parsing Gmail with NLP—achieving 95%+ precision and delighting 100+ students.
            </p>
            <p>
              I'm also a <strong>TA for Jon Kleinberg's CS 1340</strong>, guiding 750+ students through algorithms.
            </p>
            <p>
              Last summer, I interned at <strong>BRAC Bkash Ltd.</strong> in Dhaka, deploying a real-time seating system handling 100k+ daily queries on AWS microservices.
            </p>
            <p>
              As VP of Tech at Cornell Data Strategy, I lead 25+ developers and recently won a hackathon with an AI poultry-disease detector.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Coursework */}
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              Key Coursework
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <div className="max-h-64 overflow-y-auto space-y-3 scrollbar-hide">
                {[
                  "Machine Learning","Systems Architecture","Data Structures","Probability & Stats",
                  "Linear Algebra","Functional Programming","Design & Dev","Discrete Math",
                  "Intermediate Macro","Behavioral Econ","Risk & Insurance"
                ].map((course) => (
                  <div
                    key={course}
                    className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              Featured Projects
            </h3>
            <div className="space-y-4">
              {projectVideos.map((project, i) => (
                <div
                  key={i}
                  className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  onMouseEnter={() => setHoveredVideo(i)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-sm">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.tech}
                      </p>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="#timeline"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                View all projects
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#timeline"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Explore Timeline
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// Simple Error Boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('3D Model loading error:', error, errorInfo);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export default Hero;