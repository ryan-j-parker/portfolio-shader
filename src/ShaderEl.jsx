/* eslint-disable react/no-unknown-property */
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Suspense } from 'react';
import ShaderMesh from './ShaderMesh';

export default function ShaderEl() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 400,
          position: [0, 2, 8],
        }}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
      >
        <ShaderMesh />
      </Canvas>
    </Suspense>
  );
}
