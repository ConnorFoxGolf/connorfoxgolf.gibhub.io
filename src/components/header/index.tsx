import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import higgins from "assets/img/higgins.jpg";

export default function Header(): JSX.Element {
  let location = useLocation().pathname;
  return (
    <>
      {/* Header */}
      {/* TODO: decide on a color scheme */}
      <div id="header" style={{
        background: `linear-gradient(to right, rgba(107, 77, 168, 0.7), rgba(17, 138, 188, 0.7)), url(${higgins}) no-repeat center bottom`,
      }}>
        <div className="container">
          <div className="row">
            <div className="col fade-in fade-in-2">
              <h1>Connor James Fox</h1>
              <p id="current-role">Junior Golfer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="navbar navbar-expand-md navbar-custom navbar-dark sticky-top">
        <div className="container-fluid">
          <div className="navbar-header" id="header-logo">
            {/* @Connor */}
            <Link className="navbar-brand scroll" to="/">AMV</Link>
          </div>

          <div className="navbar-header" id="header-button">
            <button type="button" id="navbar-btn" className="navbar-toggler" data-toggle="collapse" data-target="#collapsible-navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="collapsible-navbar">
            <div className="navbar-nav text-uppercase">
              {/* @Connor: Create the tabs that you want here */}
              <div className="nav-item dropdown">
                <Link className={"nav-link scroll " + (location==="/" ? "active" : "")} to="/">Home</Link>
              </div>
              <div className="nav-item dropdown">
                <Link className={"nav-link " + (location === "/golfhistory" ? "active" : "")} to="/golfstats">Golf Stats</Link>
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
