import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ColorBars.css';

class ColorBars extends Component {
  render() {
    const {
      animateColorBarsTop,
      animateColorBarsBottom,
      colorBarBackground,
    } = this.props;
    return (
      <div id="ColorBars">
        <div
          className={[
            animateColorBarsTop ? 'bar bar1 active' : 'bar bar1',
            animateColorBarsBottom ? 'moveUp' : null,
          ].join(' ')}
        />
        <div
          className={[
            animateColorBarsTop ? 'bar bar2 active' : 'bar bar2',
            animateColorBarsBottom ? 'moveUp' : null,
          ].join(' ')}
        />
        <div
          className={[
            animateColorBarsTop ? 'bar bar3 active' : 'bar bar3',
            animateColorBarsBottom ? 'moveUp' : null,
          ].join(' ')}
          style={{ backgroundColor: colorBarBackground }}
        />
        <div
          className={[
            animateColorBarsTop ? 'bar bar3BG active' : 'bar bar3BG',
            animateColorBarsBottom ? 'moveUp' : null,
          ].join(' ')}
          style={{ backgroundColor: colorBarBackground }}
        />
        <div
          className={[
            animateColorBarsTop ? 'bar bar4 active' : 'bar bar4',
            animateColorBarsBottom ? 'moveUp' : null,
          ].join(' ')}
        />
      </div>
    );
  }
}

ColorBars.propTypes = {
  animateColorBarsTop: PropTypes.bool,
  animateColorBarsBottom: PropTypes.bool,
  colorBarBackground: PropTypes.string,
};

export default ColorBars;
