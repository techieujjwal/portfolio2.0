"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Points as ThreePoints } from "three";

interface StarsProps {
  count?: number;
  radius?: number;
}

function Stars({ count = 5000, radius = 1.5, ...props }: StarsProps) {
  const ref = useRef<ThreePoints>(null);
  const sphere = random.inSphere(new Float32Array(count * 3), { radius }) as Float32Array;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
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
export function StarsBackground() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Stars />
      </Canvas>
    </div>
  );
}