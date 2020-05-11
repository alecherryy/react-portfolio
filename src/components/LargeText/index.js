import React, { Component } from 'react';
import ConstrainSmall from '../Constrain/ConstrainSmall';

class LargeText extends Component {
  render() {
    return (
      <ConstrainSmall>
        <h3>{this.props.content}</h3>
      </ConstrainSmall>
    );
  }
}

export default LargeText;
