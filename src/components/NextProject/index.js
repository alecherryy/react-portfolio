import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class MobileImages extends Component {
  render() {
    return (
      <div className="next-project">
        <div className="next-project__inner">
          <h4>{this.props.title}</h4>
          <a href={this.props.url}>next up</a>
        </div>
      </div>
    );
  }
}

export default MobileImages;
