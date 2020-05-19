
import React from 'react';
import SocialMedia from '../SocialMedia';
import Constrain from '../Constrain';
import './styles.scss';

const Footer = ({ email, phone, phone_formatted }) => {

  return (
    <footer className="footer">
      <Constrain>
        <div className="footer__inner" >
          <div className="footer__left">
            <span className="footer__eyebrow" >
              Got an idea?
            </span>
            <a
              
              data-aos-delay="200"
              href={`mailto:${email}`}
            >
              Shoot me an email</a>
          </div>
          <div className="footer__right">
            <a  href={`tel:${phone}`}>{phone_formatted}</a>
            <SocialMedia />
          </div>
        </div>
      </Constrain>
    </footer>
  );
}

export default Footer;
