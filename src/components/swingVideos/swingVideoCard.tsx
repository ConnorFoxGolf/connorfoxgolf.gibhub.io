import React, { useEffect, useRef, useState } from 'react';
import './swingVideoCard.css';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  video: string;
}

export default function SwingVideoCard(props: Props) {
  const { video } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    }
  }, [isVisible]);

  return (
    <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
      <video 
        ref={videoRef}
        controls
        autoPlay
        // playsInline
        loop
        className='swing-video-card-container' 
        preload='meta'
      >
        <source src={video} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </VisibilitySensor>
  );
}
