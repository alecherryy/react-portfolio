import './styles.scss';
import React from 'react';

const AwardItem = ({title, award, organization}) => {

  return (
    <div class="award-item">
      <h6>{title}</h6>
      <p>{award},</p>
      <p><em>{organization}</em></p>
    </div>
  );
}

export default AwardItem;
