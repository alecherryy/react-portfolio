import React, { Component } from 'react';

class Squares extends Component {
  render() {
    return (
      <img src={ this.props.src } alt="" />
    );
  }
}

export default Squares;