import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import higgins from "assets/img/higgins.jpg";
import { Parallax } from 'react-parallax';
import Banner from './banner';

export default function Header(): JSX.Element {
  let location = useLocation().pathname;
  const [nameplateHeight, setNameplateHeight] = useState(0);

  return (
    <>
      {/* Header */}
      <Parallax
        renderLayer={(): JSX.Element => {
          const scrolledPx = window.scrollY;
          const initialHeight = 400;
          const height = initialHeight - scrolledPx;
          const minHeight = (initialHeight + nameplateHeight) / 2;
          const percentScrolled = (initialHeight - height) / (initialHeight - minHeight);
          return (
            <div
              style={{
                color: 'white',
                textTransform: 'uppercase',
                width: '100vw',
                height: `${height}px`,
                minHeight: `${minHeight}px`,
                background: `url(${higgins}) no-repeat center bottom`,
                backgroundSize: 'cover'
              }}
            >
              <Banner 
                setNameplateHeight={setNameplateHeight} 
                topToCenterPx={(height + scrolledPx) / 2} 
                percentScrolled={percentScrolled} 
              />
            </div>
          );
        }}
      />

      {/* Nav Bar */}
      <nav className="navbar navbar-expand-md navbar-custom navbar-dark sticky-top">
        <div className="container-fluid">
          <div className="navbar-header" id="header-logo">
            {/* @Connor: Change "AMV" (my initials) to be whatever you want. This is just a link to the top of the homepage. */}
            <Link className="navbar-brand scroll" to="/" onClick={() => window.scrollTo({top: 0,left: 0, behavior: 'smooth'})}>AMV</Link>
          </div>

          <div className="navbar-header" id="header-button">
            <button type="button" id="navbar-btn" className="navbar-toggler" data-toggle="collapse" data-target="#collapsible-navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="collapsible-navbar">
            <div className="navbar-nav text-uppercase">
              <div className="nav-item dropdown">
                <Link className={"nav-link scroll " + (location==="/" ? "active" : "")} to="/">Home</Link>
              </div>
              <div className="nav-item dropdown">
                <Link className={"nav-link " + (location === "/golfstats" ? "active" : "")} to="/golfstats">Golf Stats</Link>
              </div>
              <div className="nav-item dropdown">
                <Link className={"nav-link " + (location === "/swingvideos" ? "active" : "")} to="/swingvideos">Swing Videos</Link>
              </div>
              <div className="nav-item dropdown">
                <Link className={"nav-link " + (location === "/references" ? "active" : "")} to="/references">References</Link>
              </div>
              <div className="nav-item">
                <Link className={"nav-link " + (location === "/academics" ? "active" : "")} to="/academics">Academics</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
