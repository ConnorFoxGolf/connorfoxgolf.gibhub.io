import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import GolfStats from 'components/golfStats';
import SwingVideos from 'components/swingVideos';
import References from 'components/references';
import Academics from 'components/academics';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className="app-minus-footer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="golfstats" element={<GolfStats />} />
          <Route path="swingvideos" element={<SwingVideos />} />
          <Route path="references" element={<References />} />
          <Route path="academics" element={<Academics />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}