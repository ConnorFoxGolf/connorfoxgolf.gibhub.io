import React from 'react';
import Collage from './collage';
import Nameplate from './nameplate';

interface Props {
  percentScrolled: number;
  setNameplateHeight: React.Dispatch<React.SetStateAction<number>>;
  topToCenterPx: number;
}

export default function Banner(props:Props): JSX.Element {
  const { percentScrolled, setNameplateHeight, topToCenterPx } = props;

  return (
    <div
      className="banner"
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100%'
      }}
    >
      <Collage percentScrolled={percentScrolled} />
      <Nameplate setNameplateHeight={setNameplateHeight} topToCenterPx={topToCenterPx} />
    </div>
  );
}
