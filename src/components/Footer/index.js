import AOS from 'aos';
import React from 'react';
import SocialMedia from '../SocialMedia';
import Constrain from '../Constrain';
import './styles.scss';

const Footer = ({ email, phone, phone_formatted }) => {
  AOS.init({
    duration: 1000,
  });

  return (
    <footer className="footer">
      <Constrain>
        <div className="footer__inner" data-aos="fade-in">
          <div className="footer__left">
            <span className="footer__eyebrow" data-aos="fade-up">
              Got an idea?
            </span>
            <a
              data-aos="fade-up"
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
