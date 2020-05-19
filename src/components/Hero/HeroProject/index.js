import React from 'react';
import ProjectImage from '../../ProjectImage';
import ConstrainSmall from '../../Constrain/ConstrainSmall';
import './styles.scss';

const HeroProject = ({ title, image, type }) => {
  return (
    <div className="project-hero">
      <ConstrainSmall>
        <ProjectImage
          isHomepage={false}
          title={title}
          image={image}
          type={type}
        />
      </ConstrainSmall>
    </div>
  )
}

export default HeroProject;