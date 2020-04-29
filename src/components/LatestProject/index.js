import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class LatestProject extends Component {
  render() {
    return (
      <div className="latest-project">
        <span className="latest-project__eyebrow">Latest Project</span>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <a href="http://localhost:3000/" className="latest-project__link">Read More</a>
      </div>
    );
  }
}

export default LatestProject;
