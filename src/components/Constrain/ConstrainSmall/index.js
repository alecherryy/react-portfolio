import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class ConstrainSmall extends Component {
  render() {
    return (
      <div className="constrain constrain-small">
        {this.props.children}
      </div>
    );
  }
}

export default ConstrainSmall;
