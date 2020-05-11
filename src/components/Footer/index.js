import data from '../../data.json';
import React, { Component } from 'react';
import SocialMedia from '../SocialMedia';
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__eyebrow">
              Got an idea?
            </span>
            <a className="footer__email" href={`mailto:${data.global.email}`}>Shoot me an email</a>
          </div>
          <div className="footer__right">
            <SocialMedia />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
