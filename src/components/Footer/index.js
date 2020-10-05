
import data from '../../content/data.json';
import React from 'react';
import SocialMedia from '../SocialMedia';
import Constrain from '../Constrain';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Constrain>
        <div className="footer__inner" data-aos="slide-up">
          <div className="footer__left">
            <span className="footer__eyebrow" >
              Want to collaborate?
            </span>
            <a
              
              data-aos-delay="200"
              href={`mailto:${data.global.email}`}
            >
              Shoot me an email</a>
          </div>
          <div className="footer__right">
            <a  href={`tel:${data.phone}`}>{data.phone_formatted}</a>
            <SocialMedia />
          </div>
        </div>
      </Constrain>
    </footer>
  );
}

export default Footer;
