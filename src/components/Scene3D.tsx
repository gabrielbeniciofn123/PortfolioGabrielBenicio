import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';

const AnimatedSphere = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      // Smooth follow mouse movement
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mousePosition.x * 2,
        0.1
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mousePosition.y * 2,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="hsl(180, 100%, 50%)"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse position to -1 to 1 range
    const x = (clientX / innerWidth) * 2 - 1;
    const y = -(clientY / innerHeight) * 2 + 1;
    
    setMousePosition({ x, y });
  };

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="hsl(150, 100%, 45%)" intensity={1} />
          <AnimatedSphere mousePosition={mousePosition} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
