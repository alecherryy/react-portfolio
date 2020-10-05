import React from 'react';
import './styles.scss';

const PlainTextHalf = ({title, subtitle, description}) => {
  return (
    <div className="plain-text plain-text--half" data-aos="slide-up">
      {title ? <h1>{title}</h1> : null}
      {subtitle ? <h3>{subtitle}</h3> : null}
      <p>{description}</p>
    </div>
  );
}

export default PlainTextHalf;
