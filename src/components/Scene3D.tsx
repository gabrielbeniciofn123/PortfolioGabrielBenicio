// Componente Scene3D - Cena 3D animada usada como fundo do Hero
// Usa Three.js (via React Three Fiber) para renderizar uma esfera distorcida que segue o mouse

import { Canvas, useFrame } from '@react-three/fiber'; // React Three Fiber - renderiza Three.js em React
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'; // Helpers 3D prontos
import { Suspense, useRef, useEffect, type RefObject } from 'react';
import * as THREE from 'three'; // Biblioteca 3D principal

// Componente da esfera animada que segue a posição do mouse
const AnimatedSphere = ({ mousePosition }: { mousePosition: RefObject<{ x: number; y: number }> }) => {
  const meshRef = useRef<THREE.Mesh>(null); // Referência direta ao objeto 3D
  
  // useFrame: Executa a cada frame de renderização (~60x por segundo)
  // Faz a esfera seguir suavemente a posição do mouse usando interpolação linear (lerp)
  useFrame(() => {
    if (meshRef.current) {
      // Interpolação suave no eixo X - move gradualmente em direção ao mouse
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x, // Posição atual
        (mousePosition.current?.x ?? 0) * 2, // Posição alvo (mouse * 2 para amplificar o movimento)
        0.1 // Fator de suavização (0.1 = 10% do caminho por frame)
      );
      // Interpolação suave no eixo Y
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        (mousePosition.current?.y ?? 0) * 2,
        0.1
      );
    }
  });

  return (
    // Float: Adiciona animação de flutuação automática (sobe e desce)
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* Sphere: Esfera 3D com 48x64 segmentos e escala 2.5x */}
      <Sphere ref={meshRef} args={[1, 48, 64]} scale={2.5}>
        {/* MeshDistortMaterial: Material que distorce a forma da esfera continuamente */}
        <MeshDistortMaterial
          color="hsl(180, 100%, 50%)" // Cor ciano (mesma do --primary)
          attach="material"
          distort={0.5} // Intensidade da distorção
          speed={2} // Velocidade da distorção
          roughness={0.2} // Rugosidade da superfície (0.2 = bastante brilhante)
        />
      </Sphere>
    </Float>
  );
};

// Componente principal da cena 3D
const Scene3D = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    // Container que ocupa todo o espaço disponível e captura eventos de mouse
    <div className="w-full h-full" >
      {/* Canvas: Área de renderização 3D com câmera posicionada a 5 unidades de distância */}
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
        {/* Suspense: Mostra nada (null) enquanto os assets 3D carregam */}
        <Suspense fallback={null}>
          {/* Luz ambiente - ilumina todos os objetos igualmente */}
          <ambientLight intensity={0.5} />
          {/* Luz direcional - simula o sol, vindo de cima à direita */}
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* Luz pontual verde - cria reflexo colorido na parte inferior da esfera */}
          <pointLight position={[-10, -10, -10]} color="hsl(150, 100%, 45%)" intensity={1} />
          {/* Esfera animada que segue o mouse */}
          <AnimatedSphere mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
