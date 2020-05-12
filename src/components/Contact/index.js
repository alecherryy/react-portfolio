import contact from '../../content/contact.json';
import React, { Component } from 'react';
import Constrain from '../Constrain';
import HeroContact from '../Hero/HeroContact';
import SocialMedia from '../SocialMedia';

class Contact extends Component {
  render() {
    return (
      <div class="contact">
        <Constrain>
          <HeroContact
            intro={contact.intro}
            email={contact.email}
            phone={contact.phone}
            phone_formatted={contact.phone_formatted}
            squares={contact.squares}
          />
          <SocialMedia />
        </Constrain>
      </div>
    );
  }
}

export default Contact;
