import React, { Component } from 'react';
import './App.scss';
import Constrain from './components/Constrain';
import ProjectDetail from './components/ProjectDetail';

class App extends Component {
  render() {
    return (
      <Constrain>
        <ProjectDetail />
      </Constrain>
    );
  }
}

export default App;
