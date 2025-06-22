// src/components/ProceduralTerrain.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, gridHelper } from '@react-three/drei';
import * as THREE from 'three';

const WIDTH      = 20;
const DEPTH      = 20;
const SEGMENTS   = 80;
const SPEED      = 0.5;
const AMPL_X     = 0.3;
const AMPL_Z     = 0.3;
const FREQ_X     = 0.5;
const FREQ_Z     = 0.3;

const Terrain: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * SPEED;
    const geo = ref.current.geometry as THREE.BufferGeometry;
    const pos = geo.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y =
        Math.sin(x * FREQ_X + t) * AMPL_X +
        Math.cos(z * FREQ_Z + t) * AMPL_Z;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[WIDTH, DEPTH, SEGMENTS, SEGMENTS]} />
      <meshStandardMaterial
        color="#88ff88"
        side={THREE.DoubleSide}
        flatShading
        roughness={0.8}
      />
    </mesh>
  );
};

const ProceduralTerrain: React.FC = () => (
  <Canvas
    style={{ width: '100%', height: '600px' }}
    camera={{ position: [0, 5, 8], fov: 60 }}
    shadows
    gl={{ antialias: true }}
  >
    {/* Sky-blue background */}
    <color attach="background" args={['#87ceeb']} />

    {/* Even lighting */}
    <hemisphereLight args={['#ffffff', '#444444', 0.6]} />
    <directionalLight
      position={[5, 10, 5]}
      intensity={0.6}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
    <ambientLight intensity={0.4} />

    {/* Faint grid just above the plane */}
    <gridHelper
      args={[WIDTH, WIDTH, '#ccc', '#888']}
      position={[0, 0.01, 0]}
    />

    {/* Your rolling terrain */}
    <Terrain />

    {/* Orbit controls so you can pan/tilt to verify it’s there */}
    <OrbitControls enablePan={false} />
  </Canvas>
);

export default ProceduralTerrain;
