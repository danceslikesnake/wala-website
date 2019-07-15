import React, { Component } from 'react';

import './SocialButtons.css';

import ReactGA from 'react-ga';

class SocialButtons extends Component {
  render() {
    return (
      <div id="SocialButtons">
        <a
          href="https://www.facebook.com/GetWalaApp/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Facebook link',
              action: 'Corner bottom right - desktop',
            });
          }}
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://twitter.com/GetWala"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Twitter link',
              action: 'Corner bottom right - desktop',
            });
          }}
        >
          <i className="fab fa-twitter" />
        </a>
      </div>
    );
  }
}

export default SocialButtons;
