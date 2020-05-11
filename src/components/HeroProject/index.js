import React, { Component } from 'react';
import Constrain from '../Constrain';
import ProjectImage from '../ProjectImage';
import './styles.scss'; // remove this when creating a new project

class Hero extends Component {
  render() {
    return (
      <Constrain>
        <div className="project-hero">
        <ProjectImage
          isHomepage={false}
          title={this.props.title}
          image={this.props.image}
          type={this.props.type}
        / >
        </div>
      </Constrain>
    );
  }
}

export default Hero;