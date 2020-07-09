import React from 'react';
import './styles.scss';

const PlainTextHalf = ({title, description}) => {
  return (
    <div className="plain-text plain-text--half" data-aos="slide-up">
      {title ? <h1>{title}</h1> : null}
      <p>{description}</p>
    </div>
  );
}

export default PlainTextHalf;
