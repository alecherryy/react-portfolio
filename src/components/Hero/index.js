import React, { Component } from 'react';
import Squares from '../Squares';
import Typewriter from 'typewriter-effect';
import './styles.scss';

class Hero extends Component {
  componentDidMount() {
    this.handleScroll();
    document.body.dataset.color = this.props.isHomepage ? 'purple-dark' : 'magenta-2';
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const el = this.myRef;
    const offsetTop = el.getBoundingClientRect().top + el.offsetHeight;
    
    if (
      window.pageYOffset > (el.getBoundingClientRect().bottom / 2) &&
      window.pageYOffset <= offsetTop
    ) {
      document.body.dataset.color = this.props.isHomepage ? 'purple-dark' : 'magenta-2';
    }
  }
  render() {

    const classes = [
      'hero',
      this.props.modifierClasses ? this.props.modifierClasses : ''
    ]

    return (
      <div
        className={classes.join(' ')}
        ref={ (ref) => { this.myRef = ref } }
      >
        {this.props.isHomepage ?
          <div className="hero__left">
            <h1 className="hero__title">I am a<br />
            <Typewriter
              options={{
                strings: ['frontend developer', 'software engineer', 'web designer', 'beer lover'],
                autoStart: true,
                loop: true,
                pauseFor: 5000,
                deleteSpeed: 100,
              }}
            />
            </h1>
            <p className="hero__content">{this.props.intro}</p>
          </div>
        :
          <div className="hero__left">
            <p className="hero__intro">{this.props.intro}</p>
            <h1 className="hero__title">Get in touch.</h1>
            <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
          </div>
        }
        <div className="hero__right">
          <div className="hero__squares">
            {
              (this.props.squares || []).map(element => { 
                return <Squares key={element} src={ `${element}` } />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;