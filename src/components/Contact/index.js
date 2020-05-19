import contact from '../../content/contact.json';
import React from 'react';
import Constrain from '../Constrain';
import HeroContact from '../Hero/HeroContact';
import SocialMedia from '../SocialMedia';

const Contact = () => {
  const { intro, email, phone, phone_formatted, squares } = contact;

  return (
    <div className="contact">
      <Constrain>
        <HeroContact
          intro={intro}
          email={email}
          phone={phone}
          phone_formatted={phone_formatted}
          squares={squares}
        />
        <SocialMedia />
      </Constrain>
    </div>
  );
}

export default Contact;
