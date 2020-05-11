import React, { Component } from 'react';
import ConstrainSmall from '../Constrain/ConstrainSmall';
import './styles.scss';

class LargeImage extends Component {
  render() {
    return (
      <ConstrainSmall>
        <Image src={this.props.src} alt={this.props.alt} />
      </ConstrainSmall>
    );
  }
}

export default LargeImage;
