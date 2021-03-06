import React, { Component } from 'react';
import './styles.scss';

class MobileImage extends Component {
  render() {
    return (
      <figure className="mobile">
        <img alt={`${this.props.title}`} src={`${this.props.image}`} data-aos="fade-in" data-aos-duration="1000" />
        <span className="mobile__word">{this.props.name}</span>
      </figure>
    );
  }
}

export default MobileImage;
