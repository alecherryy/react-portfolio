import React, { Component } from 'react';
import './App.scss';
import Homepage from './components/Homepage';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Content>
        <Homepage />
        {/* <Contact /> */}
      </Content>
    );
  }
}

export default App;
