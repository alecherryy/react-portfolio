import React, { Component } from 'react';

class Squares extends Component {
  render() {
    return (
      <img src={this.props.src} alt="Decorative Square Icons" aria-hidden="true" />
    );
  }
}

export default Squares;