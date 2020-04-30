import React, { Component } from 'react';
import data from './data.json';
import './App.scss';
import Hero from './components/Hero';
import ProjectTeaser from './components/ProjectTeaser';

class App extends Component {
  render() {
    return (
      <div>
        <Hero 
          squares={ data.homepage.squares }
          profession={ "front end developer" }
          intro={ "Lorem ipsum dolor sit amet, labores docendi reformidans ex vim, liber ceteros iracundia ex nam. Est ne movet constituam. Nominati splendide assentior cum ea. " }
        />
        <ProjectTeaser 
          title={ "no panic agency" }
          intro={ "Lorem ipsum dolor sit amet, labores docendi reformidans ex vim" }
          image={ "/images/nopanic/nopanic-macbook.png" }
          type={ "wordpress" }
        />
      </div>
    );
  }
}

export default App;
