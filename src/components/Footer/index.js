import React, { Component } from 'react';
import data from '../../data.json';
import './styles.scss'; // remove this when creating a new project
import SocialMedia from '../SocialMedia';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__eyebrow">
              Got an idea?
            </span>
            <a className="footer__email" href={data.global.email}>Shoot me an email</a>
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
