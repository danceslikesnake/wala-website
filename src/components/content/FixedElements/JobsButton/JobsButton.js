import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './JobsButton.css';

import ReactGA from 'react-ga';

class JobsButton extends Component {
  render() {
    const { revealJobsButton } = this.props;
    return (
      <React.Fragment>
        <a
          id="JobsButton"
          className={revealJobsButton ? 'jobs-button-reveal' : null}
          href="https://wala.breezy.hr/"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => {
            ReactGA.event({
              category: 'Jobs Link',
              action: 'Floating sign up for jobs button',
            });
          }}
        >
          We're Hiring!
        </a>
      </React.Fragment>
    );
  }
}

JobsButton.propTypes = {
  revealJobsButton: PropTypes.bool,
};

export default JobsButton;
