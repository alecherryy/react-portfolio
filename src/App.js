import './App.scss';
import AOS from 'aos';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import NoPanic from './components/NoPanic';
import Vilcek from './components/Vilcek';
import Catalyst from './components/Catalyst';

class App extends Component {
  render() {
    AOS.init({
      duration: 800
    });
    return (
      <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/nopanic">
              <NoPanic />
            </Route>
            <Route path="/vilcek-foundation">
              <Vilcek />
            </Route>
            <Route path="/catalyst">
              <Catalyst />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
