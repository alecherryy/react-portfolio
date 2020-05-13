import React, { Component } from 'react';
import SocialMedia from '../SocialMedia';
import Constrain from '../Constrain';
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Constrain>
          <div className="footer__inner">
            <div className="footer__left">
              <span className="footer__eyebrow">
                Got an idea?
              </span>
              <a className="footer__email" href={`mailto:${this.props.email}`}>Shoot me an email</a>
            </div>
            <div className="footer__right">
              <SocialMedia />
            </div>
          </div>
        </Constrain>
      </footer>
    );
  }
}

export default Footer;
