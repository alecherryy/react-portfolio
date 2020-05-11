import React, { Component } from 'react';
import './App.scss';
import data from './data.json';
import MobileImages from './components/MobileImages';

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
