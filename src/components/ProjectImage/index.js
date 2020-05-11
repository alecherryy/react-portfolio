import React, { Component } from 'react';
import './styles.scss';

class ProjectImage extends Component {
  render() {
    const classes = [
      'proj-image',
      this.props.isHomepage ? ' is-homepage' : ''
    ]
    return (
      <figure className={`${classes.join(' ')}`} data-color={`color-${this.props.color}`}>
        <img alt={`${this.props.title}`} src={`${this.props.image}`} />
        <span className="proj-image__type">{this.props.type}</span>
      </figure>
    );
  }
}

export default ProjectImage;
