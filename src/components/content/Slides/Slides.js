import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';

import './Slides.css';

import Hero from './Hero/Hero';
import Earn from './Earn/Earn';
import Market from './Market/Market';
import SendMoney from './SendMoney/SendMoney';
import Prosperity from './Prosperity/Prosperity';
import ColorBars from '../ColorBars/ColorBars';
import FixedElements from '../FixedElements/FixedElements';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import DownloadAppButton from '../FixedElements/DownloadAppButton/DownloadAppButton';

class Slides extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animateColorBarsTop: false,
      animateColorBarsBottom: false,
      colorBarBackground: '#1DC4BD',
      revealSlide1Content: false,
      revealSlide2Content: false,
      revealSlide3Content: false,
      logomarkIsGreen: false,
      revealJobsButton: false,
      navIndicatorPosition: 0,
      navIndicatorColor: '#FFFFFF',
      revealCenterAvatar: false,
      revealDesktopFooter: false,
    };
  }

  animateColorBars = position => {
    switch (position) {
      default:
      case 'top':
        this.setState({
          animateColorBarsTop: !this.state.animateColorBarsTop,
        });
        break;
      case 'bottom':
        this.setState({
          animateColorBarsBottom: !this.state.animateColorBarsBottom,
        });
        break;
      case 'both':
        this.setState({
          animateColorBarsTop: !this.state.animateColorBarsTop,
          animateColorBarsBottom: !this.state.animateColorBarsBottom,
        });
        break;
    }
  };

  changeColorBarBackground = color => {
    this.setState({
      colorBarBackground: color,
    });
  };

  resetContent = () => {
    if (this.state.revealSlide1Content)
      this.setState({ revealSlide1Content: false });
    if (this.state.revealSlide2Content)
      this.setState({ revealSlide2Content: false });
    if (this.state.revealSlide3Content)
      this.setState({ revealSlide3Content: false });
  };

  animateLogoMark = () => {
    this.setState({
      logomarkIsGreen: !this.state.logomarkIsGreen,
    });
  };

  revealJobs = () => {
    this.setState({
      revealJobsButton: !this.state.revealJobsButton,
    });
  };

  setIndicator = (position, color) => {
    this.setState({
      navIndicatorPosition: position,
      navIndicatorColor: color,
    });
  };

  revealCenterAvatar = () => {
    this.setState({
      revealCenterAvatar: !this.state.revealCenterAvatar,
    });
  };

  revealDesktopFooter = () => {
    this.setState({
      revealDesktopFooter: !this.state.revealDesktopFooter,
    });
  };

  onLeave = (origin, destination, direction) => {
    this.resetContent();
    if (direction === 'down') {
      if (origin.index === 0) {
        if (destination.index < 4) {
          this.animateColorBars('top');
          this.animateLogoMark();
        } else {
          this.animateColorBars('bottom');
        }
      } else if (destination.index === 4) {
        this.animateColorBars('both');
        this.animateLogoMark();
      }
    }
    if (direction === 'up') {
      if (origin.index === 4) {
        if (destination.index > 0) {
          this.animateColorBars('both');
          this.animateLogoMark();
        } else {
          this.animateColorBars('bottom');
        }
      } else if (destination.index === 0) {
        this.animateColorBars('top');
        this.animateLogoMark();
      }
    }
    switch (destination.index) {
      default:
        break;
      case 0:
        if (this.state.revealJobsButton) this.revealJobs();
        if (this.state.revealCenterAvatar) this.revealCenterAvatar();
        this.setIndicator(0, '#FFFFFF');
        if (this.state.revealDesktopFooter) this.revealDesktopFooter();
        break;
      case 1:
        this.changeColorBarBackground('#1DC4BD');
        if (this.state.revealJobsButton) this.revealJobs();
        if (!this.state.revealCenterAvatar) this.revealCenterAvatar();
        if (!this.state.revealSlide1Content)
          this.setState({ revealSlide1Content: true });
        this.setIndicator('20%', '#1DC4BD');
        if (this.state.revealDesktopFooter) this.revealDesktopFooter();
        break;
      case 2:
        this.changeColorBarBackground('#049FE7');
        if (this.state.revealJobsButton) this.revealJobs();
        if (!this.state.revealCenterAvatar) this.revealCenterAvatar();
        if (!this.state.revealSlide2Content)
          this.setState({ revealSlide2Content: true });
        this.setIndicator('40%', '#049FE7');
        if (this.state.revealDesktopFooter) this.revealDesktopFooter();
        break;
      case 3:
        this.changeColorBarBackground('#746fb0');
        if (this.state.revealJobsButton) this.revealJobs();
        if (!this.state.revealCenterAvatar) this.revealCenterAvatar();
        if (!this.state.revealSlide3Content)
          this.setState({ revealSlide3Content: true });
        this.setIndicator('60%', '#746fb0');
        if (this.state.revealDesktopFooter) this.revealDesktopFooter();
        break;
      case 4:
        this.revealJobs();
        if (this.state.revealCenterAvatar) this.revealCenterAvatar();
        this.setIndicator('80%', '#FFFFFF');
        if (!this.state.revealDesktopFooter) this.revealDesktopFooter();
        break;
    }
  };

  render() {
    const {
      animateColorBarsTop,
      animateColorBarsBottom,
      colorBarBackground,
      revealSlide1Content,
      revealSlide2Content,
      revealSlide3Content,
      logomarkIsGreen,
      revealJobsButton,
      navIndicatorPosition,
      navIndicatorColor,
      revealCenterAvatar,
      revealDesktopFooter,
    } = this.state;

    return (
      <div id="Slides">
        <DownloadAppButton />
        <MobileNavBar />
        <ColorBars
          animateColorBarsTop={animateColorBarsTop}
          animateColorBarsBottom={animateColorBarsBottom}
          colorBarBackground={colorBarBackground}
        />
        <ReactFullpage
          onLeave={this.onLeave}
          licenseKey={'210838D4-DF3449BB-B4842840-DE49C011'}
          navigation
          navigationTooltips={[
            'Earn. Spend. Save. Prosper.',
            'Opportunities to Earn',
            'Save in the Wala Market',
            'Send Money Anywhere',
            'Prosperity Within Reach',
          ]}
          navigationPosition={'right'}
          responsiveWidth={1024}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <Hero />
                <Earn revealContent={revealSlide1Content} />
                <Market revealContent={revealSlide2Content} />
                <SendMoney revealContent={revealSlide3Content} />
                <Prosperity revealDesktopFooter={revealDesktopFooter} />
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <FixedElements
          logomarkIsGreen={logomarkIsGreen}
          revealJobsButton={revealJobsButton}
          navIndicatorPosition={navIndicatorPosition}
          navIndicatorColor={navIndicatorColor}
          revealCenterAvatar={revealCenterAvatar}
        />
      </div>
    );
  }
}

Slides.propTypes = {
  onLeave: PropTypes.func,
  revealSlide1Content: PropTypes.bool,
  revealSlide2Content: PropTypes.bool,
  revealSlide3Content: PropTypes.bool,
};

export default Slides;
