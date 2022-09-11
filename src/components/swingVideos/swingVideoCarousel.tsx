import React, { useState } from 'react';
import SwingVideoCard from './swingVideoCard';
import bigTenPortrait from 'assets/img/swingVideos/big_ten_portrait.mov';
import bigTenLandscape from 'assets/img/swingVideos/big_ten_landscape.mov';
import './swingVideoCarousel.css';

const videoFiles = [
  bigTenPortrait,
  // bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape,
  bigTenPortrait,
  bigTenLandscape
];

export default function SwingVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevVideo = activeIndex > 0 ? 
    <SwingVideoCard 
      isActive={false}
      video={videoFiles[activeIndex - 1]}
    /> : null;

  const currVideo =
    <SwingVideoCard
      isActive={true}
      video={videoFiles[activeIndex]}
    />;

  const nextVideo = activeIndex < videoFiles.length ?
    <SwingVideoCard
      isActive={false}
      video={videoFiles[activeIndex + 1]}
    /> : null;

  return (
    <div className='maskedOverflow'>
      <div className="swingVideoCarouselContainer" >
        <div className="prevVideos" >
          {prevVideo}
        </div>
        <div className="currVideo" >
          {currVideo}
        </div>
        <div className="nextVideos" >
          {nextVideo}
        </div>
      </div>
    </div>
  );
}
