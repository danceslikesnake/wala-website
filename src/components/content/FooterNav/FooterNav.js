import React, { Component } from 'react';

import './FooterNav.css';
import DalaLogo from '../../../utils/images/dala-white-logo.svg';

import ReactGA from 'react-ga';

class FooterNav extends Component {
  render() {
    return (
      <div id="FooterNav">
        <nav className="footer-nav-mobile">
          <div className="level is-mobile">
            <div className="level-left">
              <a
                href="https://dala.org"
                onClick={() => {
                  ReactGA.event({
                    category: 'Dala.org',
                    action: 'Mobile footer nav',
                  });
                }}
              >
                <img src={DalaLogo} className="dala-logo" alt="Dala Logo" />
              </a>
            </div>
            <div className="level-right social-links">
              <a
                href="https://www.facebook.com/GetWalaApp/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: 'Facebook link',
                    action: 'Mobile footer nav',
                  });
                }}
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://twitter.com/GetWala"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: 'Twitter link',
                    action: 'Mobile footer nav',
                  });
                }}
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
          <div className="level is-mobile">
            <div className="level-item">
              <a
                href="/faq"
                onClick={() => {
                  ReactGA.event({
                    category: 'FAQ',
                    action: 'Mobile footer nav',
                  });
                }}
              >
                FAQ
              </a>
            </div>
            <div className="level-item">
              <a
                href="/terms"
                onClick={() => {
                  ReactGA.event({
                    category: 'Terms',
                    action: 'Mobile footer nav',
                  });
                }}
              >
                Terms
              </a>
            </div>
            <div className="level-item">
              <a
                href="/privacy"
                onClick={() => {
                  ReactGA.event({
                    category: 'Privacy',
                    action: 'Mobile footer nav',
                  });
                }}
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="wala-copyright">
            &copy; WALA INC., ALL RIGHTS RESERVED
          </div>
        </nav>
        <nav className="footer-nav level">
          <div className="level-left">
            <div className="level-item">
              <a
                href="/faq"
                onClick={() => {
                  ReactGA.event({
                    category: 'FAQ',
                    action: 'Desktop footer nav',
                  });
                }}
              >
                FAQ
              </a>
            </div>
            <div className="level-item">
              <a
                href="/terms"
                onClick={() => {
                  ReactGA.event({
                    category: 'Terms',
                    action: 'Desktop footer nav',
                  });
                }}
              >
                Terms
              </a>
            </div>
            <div className="level-item">
              <a
                href="/privacy"
                onClick={() => {
                  ReactGA.event({
                    category: 'Privacy',
                    action: 'Desktop footer nav',
                  });
                }}
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div>&copy; WALA INC., ALL RIGHTS RESERVED</div>
            </div>
          </div>
        </nav>
        <div className="dala-link">
          <a
            href="https://dala.org"
            onClick={() => {
              ReactGA.event({
                category: 'Dala.org',
                action: 'Desktop footer nav',
              });
            }}
          >
            <img src={DalaLogo} className="dala-logo" alt="Dala Logo" />
          </a>
        </div>
        <div className="nav-gradient" />
      </div>
    );
  }
}

export default FooterNav;
