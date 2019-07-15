import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WalaLogomark from '../FixedElements/WalaLogomark/WalaLogomark';
import FooterNav from '../FooterNav/FooterNav';

import WalaLogo from '../../../utils/images/wala-white-logo-full.svg';
import './Faq.css';
import { faqData, faqDalaData } from './FaqData';
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import DownloadAppButton from "../FixedElements/DownloadAppButton/DownloadAppButton";

class Faq extends Component {
  render() {
    const questions = faqData.map((question, idx) => {
      let qNumber = idx + 1;
      return (
        <FaqQuestion
          key={'w' + qNumber}
          questionNumber={qNumber}
          label={question.label}
          answer={question.answer}
        />
      );
    });

    const dalaQuestions = faqDalaData.map((question, idx) => {
      let qNumber = idx + 1;
      return (
        <FaqQuestion
          key={'d' + qNumber}
          questionNumber={qNumber}
          label={question.label}
          answer={question.answer}
        />
      );
    });

    return (
      <div id="Faq">
        <MobileNavBar />
        <DownloadAppButton />
        <WalaLogomark />
        <div className="has-text-centered legal-header">
          <img src={WalaLogo} alt="Wala Logo" className="legal-logo" />
          <div className="legal-headline">FAQs</div>
        </div>
        <div className="legal-section-name">Wala FAQ</div>
        {questions}
        <div className="legal-section-name">Earn FAQ</div>
        {dalaQuestions}
        <div className="extra-padding-on-mobile" />
        <FooterNav />
      </div>
    );
  }
}

class FaqQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  render() {
    const { questionNumber, label, answer } = this.props;
    return (
      <div
        className="question-wrapper"
        onClick={() => {
          this.setState({ isOpened: !this.state.isOpened });
        }}
      >
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <div className="question-number">{questionNumber}</div>
            </div>
            <div className="level-item">
              <div className="question">{label}</div>
            </div>
          </div>
          <div className="level-right">
            <i className={['fas', this.state.isOpened ? 'fa-chevron-up' : 'fa-chevron-down'].join(' ')} />
          </div>
        </div>
        <div className={['answer', this.state.isOpened ? 'reveal-answer' : null].join(' ')}>{answer}</div>
      </div>
    );
  }
}

FaqQuestion.propTypes = {
  questionNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  answer: PropTypes.string,
};

export default Faq;
