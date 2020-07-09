import React from 'react';
import Hero from '../../Hero';

const HeroContact = ({ intro, email, phone, phone_formatted, squares }) => {

  return (
    <Hero
      isHomepage={false}
      modifierClasses="hero--contact"
      intro={intro}
      email={email}
      phone={phone}
      phone_formatted={phone_formatted}
      squares={squares}
    />
  )
}

export default HeroContact;