import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from 'components/shared/sectionHeader';
import SwingVideoCard from './swingVideoCard';
import bigTenPortrait from 'assets/img/swingVideos/big_ten_portrait.mov';
import bigTenLandscape from 'assets/img/swingVideos/big_ten_landscape.mov';
import './index.css';
import Carousel, { Alignment } from 'nuka-carousel';
import { Icon } from '@fluentui/react/lib/Icon';

const videoFiles = [
  bigTenPortrait,
  bigTenPortrait,
  bigTenLandscape,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape
];

export default function SwingVideos(): JSX.Element {
  const [active, setActive] = useState(0);
  const [numDisplayVideos, setNumDisplayVideos] = useState(2);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const initialRefs: (HTMLDivElement | null)[] = [];
  videoFiles.forEach(() => initialRefs.push(null));

  const videos = videoFiles.map((video, i) => (
    <div 
      key={i}
      className='video-card'
    >
      <SwingVideoCard isActive={active === i} video={video} />
    </div>
  ));

  useEffect(() => {
    const clientWidth = scrollerRef.current?.clientWidth;
    if (clientWidth) {
      if (clientWidth < 500) {
        setNumDisplayVideos(1);
      } else if (clientWidth < 1000) {
        setNumDisplayVideos(2);
      } else {
        setNumDisplayVideos(3);
      }
    }
  });


  return (
    <div
      ref={scrollerRef}
    >
      <SectionHeader header="Swing Videos" />
      <Carousel
        cellAlign={Alignment.Center}
        slidesToShow={numDisplayVideos}
        className='video-scroller'
        cellSpacing={20}
        beforeSlide={(_, finishSlide) => setActive(finishSlide)}
        animation='zoom'
        speed={1000}
        defaultControlsConfig={{
          pagingDotsContainerClassName: "pagination-dots-container",
          nextButtonText: <Icon iconName="next" />,
          nextButtonClassName: "pagination-button",
          prevButtonText: <Icon iconName="previous" />,
          prevButtonClassName: "pagination-button",
        }}
      >
        {videos}
      </Carousel>
    </div>
  );
}
