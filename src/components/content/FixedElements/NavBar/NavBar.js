import React, { Component } from 'react';

import './NavBar.css';

import ReactGA from 'react-ga';

class NavBar extends Component {
  render() {

    return (
      <div id="NavBar">
        <a
          className="desktop-menu-button"
          href="https://play.google.com/store/apps/details?id=com.walareactnative&referrer=utm_source%3DWalaWebsite%2520%26utm_medium%3DDlButton%26anid%3Dadmob"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Download app',
              action: 'Corner right fixed button - desktop',
            });
          }}
        >
          <i className="fab fa-google-play" />
        </a>
      </div>
    );
  }
}

export default NavBar;
