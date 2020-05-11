import React, { Component } from 'react';
import ProjectImage from '../ProjectImage';
import './styles.scss'; // remove this when creating a new project

class Hero extends Component {
  render() {
    return (
      <div className="project-hero">
        <ProjectImage
          isHomepage={false}
          title={this.props.title}
          image={this.props.image}
          type={this.props.type}
        />
      </div>
    );
  }
}

export default Hero;