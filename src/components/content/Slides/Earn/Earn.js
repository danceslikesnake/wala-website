import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EarnGraphic from './EarnGraphic';
import EarnGraphicMobile from './EarnGraphicMobile';
import ProfilePixel from '../../../../utils/images/pixel-profile.png';
import EarnPixel from '../../../../utils/images/pixel-earn.png';

import './Earn.css';

class Earn extends Component {
  render() {
    const { revealContent } = this.props;
    console.log('earn reveal', revealContent);
    return (
      <div id="Earn" className="section fp-auto-height-responsive">
        <div className="content-wrapper">
          <div className="content-width">
            <h3 className={revealContent ? 'reveal-h3' : null}>
              Find Opportunities to Earn
            </h3>
            <p className={revealContent ? 'reveal-p' : null}>
              Complete jobs in the app offered by global organizations and earn
              in Dala, the digital money that powers Wala.
            </p>
          </div>
        </div>
        <div className="mobile-content-image tealBg">
          <EarnGraphicMobile />
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
            src={EarnPixel}
            alt="Pixel phone with Earn screen"
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
            'earn-graphic-wrapper',
            revealContent ? 'reveal-earn-graphic-wrapper' : '',
          ].join(' ')}
        >
          <EarnGraphic />
        </div>
      </div>
    );
  }
}

Earn.propTypes = {
  revealContent: PropTypes.bool,
};

export default Earn;
