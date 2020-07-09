import React from 'react';
import './styles.scss';

const DesignImage = ({ src, alt }) => {
  return (
    <figure className="design-img" data-aos="slide-up">
      <img
        src={src}
        alt={alt}
      />
    </figure>
  )
}

export default DesignImage;