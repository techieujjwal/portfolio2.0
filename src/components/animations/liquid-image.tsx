"use client";

import { useRef, useMemo, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Image from "next/image";

const fragmentShader = `
uniform sampler2D uTexture;
uniform float uTime;
uniform float uHover;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Distort UVs based on a noise/sine wave
  float waveX = sin(uv.y * 20.0 + uTime * 2.0) * 0.05 * uHover;
  float waveY = cos(uv.x * 20.0 + uTime * 2.0) * 0.05 * uHover;
  
  uv.x += waveX;
  uv.y += waveY;
  
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`;

const vertexShader = `
varying vec2 vUv;
uniform float uHover;
uniform float uTime;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Z-axis displacement for 3D effect
  pos.z += sin(pos.x * 10.0 + uTime * 3.0) * 0.1 * uHover;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

function Scene({ imageUrl }: { imageUrl: string }) {
  const texture = useTexture(imageUrl);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [hovered, setHover] = useState(false);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uHover: { value: 0 },
    }),
    [texture]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uHover.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uHover.value,
        hovered ? 1 : 0,
        0.05
      );
    }
  });

  return (
    <mesh
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={[viewport.width, viewport.height, 1]}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export function LiquidImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  // On mobile devices where pointer is coarse, WebGL might be heavy, so we could fallback.
  // But for this premium effect, we render the Canvas on top.
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Fallback standard image behind canvas */}
      <div className="absolute inset-0 z-0">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      
      {/* WebGL Overlay */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <Canvas camera={{ position: [0, 0, 1], zoom: 1 }} orthographic>
          <Suspense fallback={null}>
            <Scene imageUrl={src} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
