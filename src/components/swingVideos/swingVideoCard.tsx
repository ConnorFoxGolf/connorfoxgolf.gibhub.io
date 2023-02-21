import React, { useEffect, useRef } from 'react';
import './swingVideoCard.css';
import { Video } from '@fluentui/react-northstar';

interface Props {
  isActive: boolean;
  video: string;
}

export default function SwingVideoCard(props: Props) {
  const { isActive, video } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    }
  }, [isActive]);
  const className = `swing-video ${isActive ? 'swing-video-active' : 'swing-video-inactive'}`;

  return (
    <div className='swing-video-card-container'>
      <Video
        src={video}
        className={className}
        ref={videoRef}
      />
    </div>
  );
}
