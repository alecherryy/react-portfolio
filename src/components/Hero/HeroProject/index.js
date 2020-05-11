import React, { Component } from 'react';
import ProjectImage from '../../ProjectImage';
import ConstrainSmall from '../../Constrain/ConstrainSmall';
import './styles.scss';

class HeroProject extends Component {
  render() {
    return (
      <div className="project-hero">
        <ConstrainSmall>
          <ProjectImage
            isHomepage={false}
            title={this.props.title}
            image={this.props.image}
            type={this.props.type}
          />
        </ConstrainSmall>
      </div>
    );
  }
}

export default HeroProject;