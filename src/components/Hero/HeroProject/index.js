import React from 'react';
import ProjectImage from '../../ProjectImage';
import './styles.scss';

const HeroProject = ({ title, image, type, color }) => {
  return (
    <div className="project-hero" data-aos="slide-up">
      <ProjectImage
        isHomepage={false}
        title={title}
        image={image}
        type={type}
        color={color}
      />
    </div>
  )
}

export default HeroProject;