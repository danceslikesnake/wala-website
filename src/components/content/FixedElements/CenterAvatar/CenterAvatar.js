import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CenterAvatarImg from '../../../../utils/images/center-avatar.png';

import './CenterAvatar.css';

class CenterAvatar extends Component {
  render() {
    const { isVisible } = this.props;
    return (
      <div
        id="CenterAvatar"
        className={isVisible ? 'reveal-center-avatar' : ''}
      >
        <img src={CenterAvatarImg} alt="Woman smiling" />
      </div>
    );
  }
}

CenterAvatar.propTypes = {
  isVisible: PropTypes.bool,
};

export default CenterAvatar;
