import React from 'react';
import './styles.scss';

const PlainText = ({title, description, link}) => {
  function ProjectLink() {
    return <a href={link} target="_blank" rel="noopener noreferrer">Visit Website</a>;
  }

  function GetMarkUp(link) {
    const hasLInk = link;
    if (hasLInk) {
      return <ProjectLink />;
    }
    return;
  }
  return (
    <div className="plain-text" data-aos="slide-up">
      {title ? <h1>{title}</h1> : null}
      <p>{description}</p>
      <GetMarkUp 
        hasLInk={link} 
      />
    </div>
  );
}

export default PlainText;
