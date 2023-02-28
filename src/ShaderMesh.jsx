/* eslint-disable react/no-unknown-property */
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import crtVertex from './shaders/crtVertex';
import crtFragment from './shaders/crtFragment';

const CrtMaterial = shaderMaterial(
  {
    randomFactors: [1, 1, 1],
    uTime: 0,
  },
  crtVertex,
  crtFragment
);
extend({ CrtMaterial });

export default function ShaderMesh() {
  const crtMaterial = useRef();

  const { size } = useThree();

  useFrame((state, delta) => {
    crtMaterial.current.uTime += delta;
  });

  return (
    <mesh>
      <planeGeometry args={[size.width, size.height]} />
      <crtMaterial ref={crtMaterial} resolution={[size.width, size.height]} />
    </mesh>
  );
}
