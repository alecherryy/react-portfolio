
import React from 'react';
import './styles.scss';

const ProjectImage = ({ color, title, image, type }) => {
  return (
    <figure 
      className="proj-image" 
      data-color={`${color}`}>
      <img 
        
        alt={`${title}`} 
        src={`${image}`} />
      <span className="proj-image__type">{type}</span>
    </figure>
  );
}

export default ProjectImage;
