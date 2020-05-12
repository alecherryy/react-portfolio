import React, { Component } from 'react';
import Squares from '../Squares';
import './styles.scss';

class Hero extends Component {
  render() {
    const classes = [
      'hero',
      this.props.modifierClasses ? this.props.modifierClasses : ''
    ]
    return (
      <div className={classes.join(' ')}>
        { this.props.isHomepage ?
          <div className="hero__left">
            <h1 className="hero__title">I am a<br />
              <span>${this.props.profession}</span>
            </h1>
            <p className="hero__content">${this.props.intro}$</p>
          </div>
        :
          <div className="hero__left">
            <p>{this.props.intro}</p>
            <h1 className="hero__title">Get in touch by email or phone</h1>
            <a href={`mailto:${this.props.email}`}>{this.props.email}</a><br />
            <a href={`tel:${this.props.phone}`}>{this.props.phone_formatted}</a>
          </div>
        }
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