import React, { Component } from 'react';
import './styles.scss';

class PlainText extends Component {
  render() {
    return (
      <div className="plain-text">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default PlainText;
