import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MarketGraphic from './MarketGraphic';
import MarketGraphicMobile from './MarketGraphicMobile';
import ProfilePixel from '../../../../utils/images/pixel-profile.png';
import MarketPixel from '../../../../utils/images/pixel-market.png';

import './Market.css';

class Market extends Component {
  render() {
    const { revealContent } = this.props;
    return (
      <div id="Market" className="section fp-auto-height-responsive">
        <div className="content-wrapper">
          <div className="content-width">
            <h3 className={revealContent ? 'reveal-h3' : null}>
              Save on Fees in the Wala Market
            </h3>
            <p className={revealContent ? 'reveal-p' : null}>
              Use your Dala to pay for bills and buy electricity, airtime,
              satellite TV and more all in one place.
            </p>
          </div>
        </div>
        <div className="mobile-content-image blueBg">
          <MarketGraphicMobile />
          <div className="pixel-mobile-profile">
            <img
              src={ProfilePixel}
              alt="Pixel phone with Profile screen"
              className={revealContent ? 'reveal-pixel' : ''}
            />
          </div>
        </div>
        <div className="pixel-wrapper">
          <img
            src={MarketPixel}
            alt="Pixel phone with Market screen"
            className={[
              'pixel',
              'show-pixel-on-desktop',
              revealContent ? 'reveal-pixel' : '',
            ].join(' ')}
          />
          <img
            src={ProfilePixel}
            alt="Pixel phone with Profile screen"
            className={[
              'pixel',
              'show-pixel-on-mobile',
              revealContent ? 'reveal-pixel' : '',
            ].join(' ')}
          />
        </div>
        <div
          className={[
            'market-graphic-wrapper',
            revealContent ? 'reveal-market-graphic-wrapper' : '',
          ].join(' ')}
        >
          <MarketGraphic />
        </div>
      </div>
    );
  }
}

Market.propTypes = {
  revealContent: PropTypes.bool,
};

export default Market;
