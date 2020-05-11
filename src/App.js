import React, { Component } from 'react';
import './App.scss';
import HeroProject from './components/Hero/HeroProject';

class App extends Component {
  render() {
    return (
      <HeroProject
        title="nopanic agency"
      />
    );
  }
}

export default App;
