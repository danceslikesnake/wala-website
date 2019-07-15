import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import './utils/styles/boilerplate.css';

// components
import BackgroundImage from './components/content/BackgroundImage/BackgroundImage';
import BackgroundGradient from './components/content/BackgroundGradient/BackgroundGradient';
import Slides from './components/content/Slides/Slides';
import Faq from './components/content/Faq/Faq';
import NavLine from './components/content/FixedElements/NavLine/NavLine';
import NavBar from './components/content/FixedElements/NavBar/NavBar';
import SocialButtons from './components/content/FixedElements/SocialButtons/SocialButtons';
import Terms from './components/content/Terms/Terms';
import Privacy from './components/content/Privacy/Privacy';
import NoMatch404 from './components/content/NoMatch404/NoMatch404';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-78909073-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    const MainSite = () => {
      return <Slides />;
    };

    const ScrollToTop = () => {
      window.scrollTo(0, 0);
      return null;
    };
    console.log('app', this.props);

    return (
      <Router>
        <div>
          <Route component={ScrollToTop} />
          <NavLine />
          <NavLine alignRight />
          <NavBar />
          <BackgroundImage />
          <BackgroundGradient />
          <SocialButtons />
          <Switch>
            <Route exact path="/" component={MainSite} />
            <Route path="/faq" component={Faq} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Route component={NoMatch404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
