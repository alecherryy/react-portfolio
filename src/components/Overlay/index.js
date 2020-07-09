import React from 'react';
import data from '../../content/data.json';
import LatestProject from '../LatestProject';
import SocialMedia from '../SocialMedia';
import Menu from '../Menu';
import Constrain from '../Constrain';
import './styles.scss';

const Overlay = ({ visible, handleClick }) => {
  const { title, description, link } = data.global.latest_project;

  return (
    <div 
      className="overlay"
      data-visible={`${visible}`} 
    >
      <Constrain>
        <div className="overlay__left">
          <Menu 
            handleClick={handleClick}
          />
        </div>
        <div className="overlay__right">
          <LatestProject 
            title={title}
            description={description}
            link={link}
            handleClick={handleClick}
          />
        </div>
      <SocialMedia />
      </Constrain>
    </div>
  );
}

export default Overlay;
