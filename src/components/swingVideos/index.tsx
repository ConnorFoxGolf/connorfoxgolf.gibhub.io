import React, { useEffect, useMemo, useRef, useState } from 'react';
import SectionHeader from 'components/shared/sectionHeader';
import SwingVideoCard from './swingVideoCard';
import bigTenPortrait from 'assets/img/swingVideos/big_ten_portrait.mov';
import bigTenLandscape from 'assets/img/swingVideos/big_ten_landscape.mov';
import './index.css';
import Carousel, { Alignment } from 'nuka-carousel';


const videoFiles = [
  bigTenPortrait,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape
];

export default function SwingVideos() {

  const [active, setActive] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const initialRefs: (HTMLDivElement | null)[] = [];
  videoFiles.forEach(() => initialRefs.push(null));
  const videoRefs = useRef<(HTMLDivElement | null)[]>(initialRefs);

  useEffect(() => {
    // for (let i = 0; i < videoFiles.length; i++) {
    //   videoRefs.current.push(null);
    // }
    // videoRefs.current = videoRefs.current.slice(0, videoFiles.length);
    console.log("useeffect")
    console.log(scrollerRef.current?.scrollLeft);
    console.log(videoRefs.current);

    console.log(active);
  }, []);

  const videos = videoFiles.map((video, i) => (
    // <div 
    //   // key={i} /** @Todo */
    //   // className='videoCard'
    //   ref={(elt) => videoRefs.current[i] = elt}
    // >
      <SwingVideoCard isActive={true} video={video} key={i} />
    // </div>
  ));

  console.log(scrollerRef.current?.scrollLeft);
  console.log(videoRefs.current);

  console.log(active);

  return (
    <>
      <SectionHeader header="Swing Videos" />
      {/* <div className="videosContainer">
        <div ref={scrollerRef} className='videoScroller'>
          {videos}
        </div>
      </div> */}
      <Carousel
        cellAlign={Alignment.Center}
        wrapAround={false} 
        slidesToShow={3}
        className='videoScroller'
      >
        {videos}
      </Carousel>
    </>
  );
}

/** Based on https://web.dev/css-scroll-snap/ */
