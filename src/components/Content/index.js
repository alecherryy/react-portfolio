import React, { Component } from 'react';

class Constrain extends Component {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

export default Constrain;
