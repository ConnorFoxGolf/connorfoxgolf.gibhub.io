import React from 'react';

interface Props {
  percentScrolled: number;
}

const MIN_OPACITY = 0.7;

export default function Collage(props: Props): JSX.Element {
  const { percentScrolled } = props;
  const opacity = MIN_OPACITY + (1 - MIN_OPACITY) * percentScrolled;

  return (
    <div style={{
      background: `linear-gradient(to right, rgba(138, 95, 224, ${opacity}), rgba(17, 138, 188, ${opacity}))`,
      height: '100%'
    }} />
  );
}
