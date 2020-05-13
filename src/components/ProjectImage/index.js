import React, { Component } from 'react';
import './styles.scss';

class ProjectImage extends Component {
  render() {
    return (
      <figure className="proj-image" data-color={`${this.props.color}`}>
        <img alt={`${this.props.title}`} src={`${this.props.image}`} />
        <span className="proj-image__type">{this.props.type}</span>
      </figure>
    );
  }
}

export default ProjectImage;
