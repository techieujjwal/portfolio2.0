import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random";
import { Mesh, Points as ThreePoints } from "three";

interface StarsProps {
  count?: number;
  radius?: number;
}

function Stars({ count = 5000, radius = 1.5, ...props }: StarsProps) {
  const ref = useRef<ThreePoints>(null);
  const { mouse } = useThree();
  
  const [sphere] = useMemo(() => {
    const positions = random.inSphere(new Float32Array(count * 3), { radius }) as Float32Array;
    return [positions];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // React to mouse movement
      ref.current.rotation.x += mouse.x * 0.001;
      ref.current.rotation.y += mouse.y * 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#C8A2D8"  // Lavender color
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingOrb() {
  const ref = useRef<Mesh>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = mouse.x * 0.5;
      ref.current.position.y = mouse.y * 0.5;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={[0, 0, -0.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#4ECDC4"  // Teal color
          emissive="#4ECDC4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}
export function EnhancedStarsBackground() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Stars />
        <Stars />
        <FloatingOrb />
      </Canvas>
    </div>
  );
}