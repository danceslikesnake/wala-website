import React, { Component } from 'react';

import FooterNav from '../../FooterNav/FooterNav';
import './Prosperity.css';

class Prosperity extends Component {
  render() {
    return (
      <div
        id="Prosperity"
        className="has-text-centered section fp-auto-height-responsive"
      >
        <div className="mobile-add-circle">
          <h1>
            Prosperity is Within <span className="act-as-br" />
            Your Reach
          </h1>
          <h2>Take the first step and signup for Wala today!</h2>
        </div>
        <FooterNav />
      </div>
    );
  }
}

export default Prosperity;
