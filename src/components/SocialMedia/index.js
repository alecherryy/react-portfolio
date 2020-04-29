import React, { Component } from 'react';
import data from '../../data.json';
import './styles.scss'; // remove this when creating a new project

class SocialMedia extends Component {
  render() {
    return (
      <ul className="social-media">
        {
        Object.keys(data.global.social).map((key, i) => (
          <li className="social-media__item">
            <a className={ `social-media__link social-media__link--${key}` } href={ `${data.global.social[key]}` } target="_blank" rel="noopener noreferrer">{key}</a>
          </li>
        )
      )}
      </ul>
    );
  }
}

export default SocialMedia;
