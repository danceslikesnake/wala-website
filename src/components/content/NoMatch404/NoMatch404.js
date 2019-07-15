import React, { Component } from 'react';

import WalaLogomark from '../FixedElements/WalaLogomark/WalaLogomark';

import WalaLogo from '../../../utils/images/wala-white-logo-full.svg';

import './NoMatch404.css';

import ReactGA from 'react-ga';

class NoMatch404 extends Component {
  render() {
    return (
      <div id="NoMatch404">
        <WalaLogomark />
        <div className="no-match-message has-text-centered">
          <img src={WalaLogo} alt="Wala logo" className="no-match-logo" />
          <div className="no-match-header">We couldn't find that page :(</div>
          <a
            href="/"
            className="no-match-link"
            onClick={() => {
              ReactGA.event({
                category: 'Homepage',
                action: '404 page button',
              });
            }}
          >
            <i className="fas fa-home" /> Homepage
          </a>
        </div>
      </div>
    );
  }
}

export default NoMatch404;
