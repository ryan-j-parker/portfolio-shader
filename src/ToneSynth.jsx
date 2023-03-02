import React from 'react';
import * as Tone from 'tone';

export default function ToneSynth() {
  const synth = new Tone.Synth().toDestination();

  function playSynth() {
    synth.triggerAttackRelease('C4', '8n');
  }

  return <div>ToneSynth</div>;
}
