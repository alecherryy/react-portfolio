import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project
import Squares from '../Squares';
import Constrain from '../Constrain';

class Hero extends Component {
  render() {
    return (
      <Constrain>
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__title">I am a<br />
              <span>{ this.props.profession }</span>
            </h1>
            <p className="hero__content">{ this.props.intro }</p>
          </div>
          <div className="hero__right">
            <div className="hero__squares">
              {
                (this.props.squares || []).map(element => { 
                  return <Squares src={ `${element}` } />
                })
              }
            </div>
          </div>
        </div>
      </Constrain>
    );
  }
}

export default Hero;