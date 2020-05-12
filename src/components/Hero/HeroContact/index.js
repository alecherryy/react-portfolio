import React from 'react';
import Hero from '../../Hero';

class HeroContact extends Hero {
  render() {
    return (
      <Hero
        isHomepage={false}
        modifierClasses="hero--contact"
        intro={this.props.intro}
        email={this.props.email}
        phone={this.props.phone}
        phone_formatted={this.props.phone_formatted}
        squares={this.props.squares}
      />
    );
  }
}

export default HeroContact;