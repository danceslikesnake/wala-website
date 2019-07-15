import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WalaLogomark from './WalaLogomark/WalaLogomark';
import JobsButton from './JobsButton/JobsButton';
import NavIndicator from './NavIndicator/NavIndicator';
import CenterAvatar from './CenterAvatar/CenterAvatar';

class FixedElements extends Component {
  render() {
    const {
      logomarkIsGreen,
      revealJobsButton,
      navIndicatorColor,
      navIndicatorPosition,
      revealCenterAvatar,
    } = this.props;
    return (
      <React.Fragment>
        <WalaLogomark isGreen={logomarkIsGreen} />
        <JobsButton revealJobsButton={revealJobsButton} />
        <NavIndicator
          navIndicatorPosition={navIndicatorPosition}
          navIndicatorColor={navIndicatorColor}
        />
        <CenterAvatar isVisible={revealCenterAvatar} />
      </React.Fragment>
    );
  }
}

FixedElements.propTypes = {
  logomarkIsGreen: PropTypes.bool,
  revealJobsButton: PropTypes.bool,
  navIndicatorPosition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  navIndicatorColor: PropTypes.string,
  revealCenterAvatar: PropTypes.bool,
};
export default FixedElements;
