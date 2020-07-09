
import React from 'react';
import './styles.scss';

const Grid = ({ children }) => {
  return (
    <div className="grid" data-aos="slide-up">
      {children}
    </div>
  );
}

export default Grid;
