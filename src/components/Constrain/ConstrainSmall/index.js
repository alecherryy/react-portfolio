import React, { Component } from 'react';

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
