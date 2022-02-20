import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Experiences from './components/experiences';
import Publications from './components/publications';
import Header from './components/header';
import Footer from './components/footer';
import 'assets/js/main';
import GolfStats from 'components/golfStats';

export default function App(): JSX.Element {
  return (
    <div className="App fade-in fade-in-1">
      <div className="app-minus-footer">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="golfstats" element={<GolfStats />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="publications" element={<Publications />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}