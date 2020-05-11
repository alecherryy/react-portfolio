import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class MobileImages extends Component {
  render() {
    return (
      <div className="mobile">
        <img className="mobile__img" alt={ `${this.props.title}` } src={ `${this.props.image}` } />
        <span className="mobile__word">{this.props.name}</span>
      </div>
    );
  }
}

export default MobileImages;
