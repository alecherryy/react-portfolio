import React, { Component } from 'react';
import data from '../../data.json';
import LatestProject from '../LatestProject';
import './styles.scss'; // remove this when creating a new project
import SocialMedia from '../SocialMedia';
import Menu from '../Menu';

class Overlay extends Component {
  render() {
    return (
      <div className="overlay">
        <div class="overlay__inner">
          <div class="overlay__left">
            <Menu />
          </div>
          <div class="overlay__right">
            <LatestProject 
              title={data.global.latest_project.title}
              description={data.global.latest_project.description}
            />
          </div>
          {/* <SocialMedia /> */}
        </div>
      </div>
    );
  }
}

export default Overlay;
