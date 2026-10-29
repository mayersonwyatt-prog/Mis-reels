import React from 'react';
import {AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const lines = ['¿Sabías esto?', 'Aquí va tu dato viral', 'Sígueme para más'];

const Line = ({text}: {text: string}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: f, fps});
  const o = interpolate(f, [0, 10], [0, 1], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 80}}>
      <div style={{color: 'white', fontSize: 110, fontWeight: 800, textAlign: 'center', fontFamily: 'sans-serif', opacity: o, transform: `scale(${0.7 + 0.3 * s})`}}>
        {text}
      </div>
    </AbsoluteFill>
  );
};

export const Reel = () => (
  <AbsoluteFill style={{background: 'linear-gradient(160deg,#0f172a,#7c3aed)'}}>
    {lines.map((t, i) => (
      <Sequence key={i} from={i * 150} durationInFrames={150}>
        <Line text={t} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
