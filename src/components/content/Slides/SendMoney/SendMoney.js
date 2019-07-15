import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SendMoneyGraphic from './SendMoneyGraphic';
import SendMoneyGraphicMobile from './SendMoneyGraphicMobile';
import ProfilePixel from '../../../../utils/images/pixel-profile.png';
import SendMoneyPixel from '../../../../utils/images/pixel-send-money.png';

import './SendMoney.css';

class SendMoney extends Component {
  render() {
    const { revealContent } = this.props;
    return (
      <div id="SendMoney" className="section fp-auto-height-responsive">
        <div className="content-wrapper">
          <div className="content-width">
            <h3 className={revealContent ? 'reveal-h3' : null}>
              Send Money Anywhere, Instantly
            </h3>
            <p className={revealContent ? 'reveal-p' : null}>
              Instantly send Dala to family and friends anywhere Wala is
              available with zero fees.
            </p>
          </div>
        </div>
        <div className="mobile-content-image purpleBg">
          <SendMoneyGraphicMobile />
          <div className="pixel-mobile-profile add-extra-margin-mobile">
            <img
              src={ProfilePixel}
              alt="Pixel phone with Profile screen"
              className={revealContent ? 'reveal-pixel' : ''}
            />
          </div>
        </div>
        <div className="pixel-wrapper">
          <img
            src={SendMoneyPixel}
            alt="Pixel phone with Send Money screen"
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
            'send-money-graphic-wrapper',
            revealContent ? 'reveal-send-money-graphic-wrapper' : '',
          ].join(' ')}
        >
          <SendMoneyGraphic />
        </div>
      </div>
    );
  }
}

SendMoney.propTypes = {
  revealContent: PropTypes.bool,
};

export default SendMoney;
