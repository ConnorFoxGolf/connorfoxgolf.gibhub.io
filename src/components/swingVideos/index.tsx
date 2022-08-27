import React from 'react';
import SectionHeader from 'components/shared/sectionHeader';
import SwingVideoCard from './swingVideoCard';
import bigTenPortrait from 'assets/img/swingVideos/big_ten_portrait.mov';
import bigTenLandscape from 'assets/img/swingVideos/big_ten_landscape.mov';
import './index.css';

export default function SwingVideos() {
  const videoFiles = [
    bigTenPortrait,
    bigTenLandscape,
    bigTenPortrait,
    bigTenLandscape,
    bigTenPortrait,
    bigTenLandscape,
    bigTenPortrait,
    bigTenLandscape
  ];

  const videos = videoFiles.map(video => (
    <div className='videoCard'>
      <SwingVideoCard video={video} />
    </div>
  ))

  return (
    <>
      <SectionHeader header="Swing Videos" />
      <div className="videosContainer">
        <div className='videoScroller'>
          {videos}
        </div>
      </div>
    </>
  );
}

/** Based on https://web.dev/css-scroll-snap/ */
