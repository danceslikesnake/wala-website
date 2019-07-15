import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WalaLogomark.css';

import ReactGA from 'react-ga';

class WalaLogomark extends Component {
  render() {
    const { isGreen } = this.props;
    return (
      <a
        href="/"
        onClick={() => {
          ReactGA.event({
            category: 'Homepage link',
            action: 'Corner top left - desktop',
          });
        }}
      >
        <svg
          version="1.1"
          id="WalaLogomark"
          className="wala-logomark"
          x="0px"
          y="0px"
          viewBox="0 0 242 134.5"
          enableBackground="new 0 0 242 134.5"
          xmlSpace="preserve"
        >
          <g className={isGreen ? 'green' : 'white'}>
            <polygon className="st0" points="242,94.5 227.9,81.5 196.7,89.1 	" />
            <polygon
              className="st1"
              points="104.9,111.4 108.9,66.5 160.5,97.9 	"
            />
            <polygon className="st1" points="155.8,11.2 173.5,83.8 217.5,84 	" />
            <g>
              <polygon
                className="st0"
                points="73.4,105.9 104.9,111.4 10.1,134.5 		"
              />
              <polygon className="st0" points="0,93.1 125.3,82.5 73.4,105.9 		" />
              <polygon
                className="st1"
                points="125.3,82.5 172.2,78.6 176,94.1 183.6,125.2 104.9,111.4 73.4,105.9 		"
              />
            </g>
            <polygon className="st1" points="21.3,0 242,94.5 176,94.1 	" />
            <polygon className="st0" points="217.5,84 183.6,125.2 21.3,0 	" />
          </g>
        </svg>
      </a>
    );
  }
}

WalaLogomark.propTypes = {
  isGreen: PropTypes.bool,
};

export default WalaLogomark;
