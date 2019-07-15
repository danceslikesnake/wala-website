import React, { Component } from 'react';
import Headroom from 'react-headroom';
import queryString from 'query-string';

import './MobileNavBar.css';

import WalaLogo from '../../../utils/images/wala-teal-logo.svg';

import ReactGA from 'react-ga';

class MobileNavBar extends Component {
  parseParams = () => {
    let params = queryString.parse(this.props.location.search);
    return params;
  };

  render() {

    console.log(this.props);

    return (
      <Headroom>
        <nav id="MobileNavBar" className="level is-mobile">
          <div className="level-left">
            <a
              href="/"
              onClick={() => {
                ReactGA.event({
                  category: 'Homepage',
                  action: 'Mobile top nav',
                });
              }}
            >
              <img src={WalaLogo} className="mobile-nav-logo" alt="Wala Logo" />
            </a>
          </div>
          <div className="level-right">
            <a
              href="https://play.google.com/store/apps/details?id=com.walareactnative&referrer=utm_source%3DWalaWebsite%2520%26utm_medium%3DDlButton%26anid%3Dadmob"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: 'Download app',
                  action: 'Mobile top nav',
                });
              }}
            >
              <i className="fab fa-google-play" />
            </a>
          </div>
        </nav>
      </Headroom>
    );
  }
}

export default MobileNavBar;
