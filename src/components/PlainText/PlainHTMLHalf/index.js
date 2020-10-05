import React from 'react';

const PlainHTMLHalf = ({children}) => {
  return (
    <div className="plain-text plain-text--half" data-aos="slide-up">
      {children}
    </div>
  );
}

export default PlainHTMLHalf;
