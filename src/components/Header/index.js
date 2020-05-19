import React, { Component } from 'react';
import HamburgerMenu from './../HamburgerMenu/index';
import Overlay from '../Overlay/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      menuIsOpen: !state.menuIsOpen
    }));
  }
  
  render() {
    const open = this.state.menuIsOpen ? true : false;

    return (
      <header>
        <HamburgerMenu 
          isOpen={open}
          handleClick={this.handleClick}
        />
        <Overlay visible={`${open}`} />
      </header>
    );
  }
}

export default Header;
