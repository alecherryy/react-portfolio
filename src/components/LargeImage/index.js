import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project
import ConstrainSmall from '../Constrain/ConstrainSmall';

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
