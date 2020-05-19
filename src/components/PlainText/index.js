import React from 'react';
import './styles.scss';

const PlainText = ({title, description}) => {
  return (
    <div className="plain-text">
      {title ? <h1>{title}</h1> : null}
      <p>{description}</p>
    </div>
  );
}

export default PlainText;
