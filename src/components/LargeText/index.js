import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class MobileImages extends Component {
  render() {
    return (
      <figure className="mobile">
        <Image className="mobile__img" alt={ `${this.props.title}` } src={ `${this.props.image}` } />
        <span className="mobile__word">{this.props.name}</span>
      </figure>
    );
  }
}

export default MobileImages;
