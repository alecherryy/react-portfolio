import React, { Component } from 'react';
import './styles.scss';

class MobileImage extends Component {
  render() {
    return (
      <figure className="mobile">
        <Image alt={ `${this.props.title}` } src={ `${this.props.image}` } />
        <span className="mobile__word">{this.props.name}</span>
      </figure>
    );
  }
}

export default MobileImage;
