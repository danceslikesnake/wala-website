import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavIndicator.css';

class NavIndicator extends Component {
  render() {
    const { navIndicatorColor, navIndicatorPosition } = this.props;
    return (
      <div
        id="NavIndicator"
        style={{
          top: navIndicatorPosition,
          backgroundColor: navIndicatorColor,
        }}
      />
    );
  }
}

NavIndicator.propTypes = {
  navIndicatorPosition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  navIndicatorColor: PropTypes.string,
};

export default NavIndicator;
