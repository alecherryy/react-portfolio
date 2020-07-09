import data from '../../content/data.json';
import React, { Component } from 'react';
import './styles.scss';

class SocialMedia extends Component {
  render() {
    return (
      <ul className="social-media">
        {
        Object.keys(data.global.social).map((key, i) => (
          <li className="social-media__item" key={key}>
            <a 
              className={`social-media__link social-media__link--${key}`} 
              href={`${data.global.social[key]}`} 
              target="_blank" rel="noopener noreferrer">{key}</a>
          </li>
        )
      )}
      </ul>
    );
  }
}

export default SocialMedia;
