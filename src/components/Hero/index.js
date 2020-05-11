import React, { Component } from 'react';
import './styles.scss';
import Squares from '../Squares';

class Hero extends Component {
  render() {
    const classes = [
      'hero',
      this.props.modifierClasses ? this.props.modifierClasses : ''
    ]
    return (
      <div className={classes.join(' ')}>
        <div className="hero__left">
          {this.props.isHomepage
            ? <h1 className="hero__title">I am a<br />
                <span>{this.props.profession}</span>
              </h1>
            : <h1 className="hero__title">{this.props.title}</h1>
          }
          <p className="hero__content">{this.props.intro}</p>
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
    );
  }
}

export default Hero;