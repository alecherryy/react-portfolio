import React, { Component } from 'react';
import './App.scss';
import About from './components/About';
// import Homepage from './components/Homepage';
// import Contact from './components/Contact';
import Content from './components/Content';
// import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Content>
        {/* <Header /> */}
        <About />
        {/* <Contact /> */}
      </Content>
    );
  }
}

export default App;
