import React from 'react';
import ConstrainSmall from '../Constrain/ConstrainSmall';

const LargeText = ({ content }) => {
  return (
    <ConstrainSmall>
      <h3>{content}</h3>
    </ConstrainSmall>
  );
}

export default LargeText;
