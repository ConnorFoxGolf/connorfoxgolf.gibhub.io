import React, { useEffect, useRef, useState, useMemo } from 'react';
import './swingVideoCard.css';
import VisibilitySensor from 'react-visibility-sensor';
import { Video } from '@fluentui/react-northstar'

interface Props {
  // i: number;
  isActive: boolean;
  video: string;
}

// function useIsInViewport(ref: React.RefObject<HTMLVideoElement>) {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) =>
//         setIsIntersecting(entry.isIntersecting),
//       ),
//     [],
//   );

//   useEffect(() => {
//     if (!ref.current) {
//       return;
//     }
//     observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, [ref, observer]);

//   return isIntersecting;
// }

export default function SwingVideoCard(props: Props) {
  const { video } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // console.log(props.i, videoRef);
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    }
  });

  // console.log(props.i, useIsInViewport(videoRef), isVisible);
  // console.log(props.i, videoRef);
  // console.log(props.i, videoRef.current?.getClientRects())
  // console.log(props.i, "parent parent offset left", videoRef.current?.parentElement?.parentElement?.offsetLeft)
  // console.log(props.i, "parent offset left", videoRef.current?.parentElement?.offsetLeft)
  // console.log(props.i, "offset left", videoRef.current?.offsetLeft)
  // console.log(props.i, "parent parent client left", videoRef.current?.parentElement?.parentElement?.clientLeft)
  // console.log(props.i, "parent client left", videoRef.current?.parentElement?.clientLeft)
  // console.log(props.i, "client left", videoRef.current?.clientLeft)
  // console.log(props.i, "parent parent scroll left", videoRef.current?.parentElement?.parentElement?.scrollLeft)
  // console.log(props.i, "parent scroll left", videoRef.current?.parentElement?.scrollLeft)
  // console.log(props.i, "scroll left", videoRef.current?.scrollLeft)

  return (
    <VisibilitySensor 
      onChange={(isVisible) => setIsVisible(isVisible)}
      // offset={}
    >
      <Video
        src={video}
        className='swing-video-card-container'
        ref={videoRef}
        autoPlay
      />
      {/* <video 
        ref={videoRef}
        controls
        // autoPlay
        // playsInline
        loop
        className='swing-video-card-container' 
        preload='meta'
      >
        <source src={video} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video> */}
    </VisibilitySensor>
  );
}
