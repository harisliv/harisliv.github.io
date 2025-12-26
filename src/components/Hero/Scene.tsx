import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  ContactShadows,
  Html,
  useProgress
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import MacBook from './MacBook';

// Loading component that shows progress
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Spinning loader */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
        </div>

        {/* Progress text */}
        <div className="text-center">
          <p className="text-lg font-semibold text-purple-400">Loading...</p>
          <p className="text-sm text-gray-400">{progress.toFixed(0)}%</p>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

const Scene = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({
    open: Number(open),
    config: {
      tension: 40,
      friction: 40,
      mass: 1.5
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto h-[450px] w-full max-w-[600px] cursor-pointer sm:h-[500px] lg:h-[550px]">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, -30], fov: 35 }}
        style={{ background: 'transparent' }}
      >
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ['#f0f0f0', '#8b5cf6'])}
        />
        <ambientLight intensity={0.4} />
        <Suspense fallback={<Loader />}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <MacBook
              open={open}
              hinge={props.open.to([0, 1], [1.575, -0.425])}
            />
          </group>
        </Suspense>
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
