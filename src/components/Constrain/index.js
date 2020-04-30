import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class Constrain extends Component {
  render() {
    return (
      <div className="constrain">
        {this.props.children}
      </div>
    );
  }
}

export default Constrain;
