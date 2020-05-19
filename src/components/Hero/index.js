import AOS from 'aos';
import React, { Component } from 'react';
import Squares from '../Squares';
import './styles.scss';

class Hero extends Component {
  componentDidMount() {
    document.body.dataset.color = this.props.isHomepage ? 'purple-dark' : 'magenta-dark';
    window.addEventListener('scroll', this.handleScroll);
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
    AOS.init({
      duration: 1000,
    });

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
          <div className="hero__left" data-aos="fade-in">
            <h1 className="hero__title">I am a<br />
              <span>front end developer</span>
            </h1>
            <p className="hero__content">{this.props.intro}</p>
          </div>
        :
          <div className="hero__left" data-aos="fade-in">
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