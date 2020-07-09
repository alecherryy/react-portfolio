import React from 'react';
import './styles.scss';

const PlainText = ({title, description}) => {
  return (
    <div className="plain-text" data-aos="slide-up">
      {title ? <h1>{title}</h1> : null}
      <p>{description}</p>
    </div>
  );
}

export default PlainText;
