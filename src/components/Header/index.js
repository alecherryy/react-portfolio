import React, { Component } from 'react';
import HamburgerMenu from './../HamburgerMenu/index';
import Overlay from '../Overlay/index';
import './styles.scss'; // remove this when creating a new project

class Header extends Component {
  render() {
    return (
      <header>
        <HamburgerMenu />
        <Overlay />
      </header>
    );
  }
}

export default Header;
