import React, { useRef, useLayoutEffect } from 'react';
import './nameplate.css';

interface Props {
  setNameplateHeight: React.Dispatch<React.SetStateAction<number>>;
  topToCenterPx: number;
}

export default function Nameplate(props: Props): JSX.Element {
  const { topToCenterPx, setNameplateHeight } = props;
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setNameplateHeight(ref.current.clientHeight);
    }
  }, [ref, setNameplateHeight])

  return (
    <div
      ref={ref}
      className="nameplate-container"
      style={{
        top: `${topToCenterPx}px`
      }}
    >
      <h1>Connor James Fox</h1>
      <p>Junior Golfer</p>
    </div>
  );
}
