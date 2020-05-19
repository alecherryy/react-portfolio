import React from 'react';
import './styles.scss';

const PlainTextHalf = ({title, description}) => {
  return (
    <div className="plain-text plain-text--half">
      {title ? <h1>{title}</h1> : null}
      <p>{description}</p>
    </div>
  );
}

export default PlainTextHalf;
