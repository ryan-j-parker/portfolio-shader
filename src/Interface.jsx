/* eslint-disable react/no-unknown-property */
import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

function playC2() {
  synth.triggerAttackRelease('C2', '8n');
}
function playDb2() {
  synth.triggerAttackRelease('Db2', '8n');
}
function playD2() {
  synth.triggerAttackRelease('D2', '8n');
}
function playEb2() {
  synth.triggerAttackRelease('Eb2', '8n');
}
function playE2() {
  synth.triggerAttackRelease('E2', '8n');
}
function playF2() {
  synth.triggerAttackRelease('F2', '8n');
}
function playGb2() {
  synth.triggerAttackRelease('Gb2', '8n');
}
function playG2() {
  synth.triggerAttackRelease('G2', '8n');
}
function playAb2() {
  synth.triggerAttackRelease('Ab2', '8n');
}
function playA2() {
  synth.triggerAttackRelease('A2', '8n');
}
function playBb2() {
  synth.triggerAttackRelease('Bb2', '8n');
}
function playB2() {
  synth.triggerAttackRelease('B2', '8n');
}
function playC3() {
  synth.triggerAttackRelease('C3', '8n');
}

function WhiteKey(note) {
  const key = useRef();

  //   useFrame((state, delta) => {
  //     key.current.rotation.x += delta * 1.2;
  //     key.current.rotation.y += delta * 2;
  //   });

  const matcapTexture = useTexture('/matcapW5.png');
  const [active, setActive] = useState(false);
  const matcapHighlight = useTexture('/tealMatcap.png');

  const toggleActiveColor = () => {
    if (active) {
      key.current.matcap.set(matcapHighlight);
    } else {
      key.current.matcap.set(matcapTexture);
    }
  };

  return (
    <mesh note={note} ref={key} onClick={() => setActive(!active)}>
      <boxGeometry args={[2.2, 13.8, 1.78]} />
      <meshMatcapMaterial matcap={active ? matcapHighlight : matcapTexture} />
    </mesh>
  );
}

function BlackKey(props) {
  const key = useRef();

  const matcapTexture = useTexture('/matcapB1.png');

  return (
    <mesh {...props} ref={key}>
      <boxGeometry args={[1.15, 8.5, 0.525]} />
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
}

export default function Interface() {
  return (
    <Canvas>
      <WhiteKey position={[-9.1, 0, 0]} onClick={playC2} />
      <BlackKey position={[-8.1, 2.65, 1.2]} onClick={playDb2} />
      <WhiteKey position={[-6.8, 0, 0]} onClick={playD2} />
      <BlackKey position={[-5.8, 2.65, 1.2]} onClick={playEb2} />
      <WhiteKey position={[-4.5, 0, 0]} onClick={playE2} />
      <WhiteKey position={[-2.2, 0, 0]} onClick={playF2} />
      <BlackKey position={[-1.2, 2.65, 1.2]} onClick={playGb2} />
      <WhiteKey position={[0.1, 0, 0]} onClick={playG2} />
      <BlackKey position={[1.1, 2.65, 1.2]} onClick={playAb2} />
      <WhiteKey position={[2.4, 0, 0]} onClick={playA2} />
      <BlackKey position={[3.4, 2.65, 1.2]} onClick={playBb2} />
      <WhiteKey position={[4.7, 0, 0]} onClick={playB2} />
      <WhiteKey position={[7, 0, 0]} onClick={playC3} />
      <OrbitControls makeDefault />
      <ambientLight intensity={5} />
    </Canvas>
  );
}
