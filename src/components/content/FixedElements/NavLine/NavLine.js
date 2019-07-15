import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavLine.css';

class NavLine extends Component {
  render() {
    const { alignRight } = this.props;
    return (
      <React.Fragment>
        <div
          className={['nav-line', alignRight ? 'right' : 'left'].join(' ')}
        />
      </React.Fragment>
    );
  }
}

NavLine.propTypes = {
  alignRight: PropTypes.bool,
};

export default NavLine;
