import React, { Component } from 'react';
// import data from '../../data.json';
import './App.scss';
import ProjectTeaser from './components/ProjectTeaser';

class App extends Component {
  render() {
    return (
      <div>
        <ProjectTeaser 
          color={"magenta-dark"}
          // image={"nopanic-macbook.png"}
          title={"no panic agency"}
          description={"Lorem ipsum dolor sit amet, an ius vero ferri electram. Magna autem mea at"}
          type={"wordpress"}
        />
      </div>
    );
  }
}

export default App;
