import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class LatestProject extends Component {
  render() {
    return (
      <div className="latest-project">
        <span className="latest-project__eyebrow">Latest Project</span>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <Link className="latest-project__link" to={this.props.link} onClick={this.props.handleClick}>Read more</Link>
      </div>
    );
  }
}

export default LatestProject;
