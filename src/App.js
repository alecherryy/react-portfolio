import './App.scss';
import AOS from 'aos';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import NoPanic from './components/NoPanic';
import Vilcek from './components/Vilcek';
import Catalyst from './components/Catalyst';
import Prattle from './components/Prattle';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    AOS.init({
      duration: 800
    });

    return (
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nopanic" element={<NoPanic />} />
          <Route path="/vilcek-foundation" element={<Vilcek />} />
          <Route path="/catalyst" element={<Catalyst />} />
          <Route path="/prattle" element={<Prattle />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
