import React, { Component } from 'react';
import ProjectImage from '../ProjectImage';
import './styles.scss';

class ProjectTeaser extends Component {
  render() {
    return (
      <div className="proj-teaser" data-color={`color-${this.props.color}`}>
        <div className="proj-teaser__inner">
          <ProjectImage
            isHomepage={true}
            title={this.props.title}
            image={this.props.image}
            type={this.props.type}
          / >
          <div className="proj-teaser__bottom">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <a className="proj-teaser__link" href={`${this.props.path}`}>Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTeaser;
