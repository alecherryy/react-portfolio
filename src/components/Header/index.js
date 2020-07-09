import React, { Component } from 'react';
import Logo from './../Logo';
import HamburgerMenu from './../HamburgerMenu/index';
import Overlay from '../Overlay/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      menuIsOpen: !state.menuIsOpen
    }));
  }
  
  closeMenu () {
    this.setState({menuIsOpen: false})
  }

  render() {
    const open = this.state.menuIsOpen ? true : false;

    return (
      <header>
        <Logo 
          closeMenu={this.closeMenu}
        />
        <HamburgerMenu 
          isOpen={open}
          handleClick={this.handleClick}
        />
        <Overlay 
          handleClick={this.handleClick}
          visible={`${open}`} 
        />
      </header>
    );
  }
}

export default Header;
