import React, { Component } from 'react';

import './Hero.css';

import WalaLogo from '../../../../utils/images/wala-white-logo.svg';

class Hero extends Component {
  render() {
    return (
      <div id="Hero" className="has-text-centered section">
        <img className="hero-logo" src={WalaLogo} alt="Wala Logo" />
        <h1>Earn. Save. Spend. Prosper.</h1>
        <h2>
          Everything you need to earn, spend and save{' '}
          <span className="act-as-br" />
          money in one place, the Wala app.
          <br />
          <span className="act-as-br" />
          Take the first step towards <span className="act-as-br" />
          financial prosperity...
        </h2>
      </div>
    );
  }
}

export default Hero;
