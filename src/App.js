import React, { Component } from 'react';
import './App.scss';
import data from './data.json';
import MobileImages from './components/MobileImages';
import Constrain from './components/Constrain';

class App extends Component {
  render() {
    return (
      <Constrain>
        <MobileImages 
          title="Hello there"
          image={data.mobile}
          name="modern"
        />
        <MobileImages 
          title="Hello there"
          image={data.mobile}
          name="intuitive"
        />
        <MobileImages 
          title="Hello there"
          image={data.mobile}
          name="responsive"
        />
      </Constrain>
    );
  }
}

export default App;
