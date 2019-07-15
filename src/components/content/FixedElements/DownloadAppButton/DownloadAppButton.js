import React, { Component } from 'react';

import './DownloadAppButton.css';

import GoogleBadge from '../../../../utils/images/google-play-badge.svg';

import ReactGA from 'react-ga';

class DownloadAppButton extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="DownloadAppButton" className="level">
          <div className="level-item download-link-text">
            Take the First Step
          </div>
          <div className="level-item badge-wrapper">
            <img
              className="google-badge"
              src={GoogleBadge}
              alt="Get the Wala app the Google Play Store"
            />
          </div>
          <div className="level-item download-link-text">Download the App</div>
          <a
            href="https://download.getwala.com"
            target="_blank"
            rel="noopener noreferrer"
            className="play-store-link"
            onClick={() => {
              ReactGA.event({
                category: 'Download App',
                action: 'Floating Download Button',
              });
            }}
          >
            {' '}
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default DownloadAppButton;
