import React from 'react';
import data from '../../content/data.json';
import LatestProject from '../LatestProject';
import SocialMedia from '../SocialMedia';
import Menu from '../Menu';
import Constrain from '../Constrain';
import './styles.scss';

const Overlay = ({ visible }) => {
  const { title, description } = data.global.latest_project;

  return (
    <div 
      className="overlay"
      data-visible={`${visible}`} 
    >
      <Constrain>
        <div className="overlay__left">
          <Menu />
        </div>
        <div className="overlay__right">
          <LatestProject 
            title={title}
            description={description}
          />
        </div>
      </Constrain>
      <SocialMedia />
    </div>
  );
}

export default Overlay;
