import React, { Component } from 'react';
import Logo from './../Logo';
import HamburgerMenu from './../HamburgerMenu/index';
import Overlay from '../Overlay/index';

let open;
let show;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      showMenu: false,
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    const overlay = document.querySelector('.overlay');

    this.setState(state => ({
      menuIsOpen: !state.menuIsOpen
    }));
  
    window.setTimeout(() => {
      if (open) {
        overlay.style.zIndex = 3;
        overlay.style.opacity = 1;
        
        window.setTimeout(() => {
          this.setState(state => ({
            showMenu: true
          }));
        }, 600)
      } else {
        
        this.setState(state => ({
          showMenu: false
        }));
        window.setTimeout(() => {
          overlay.style.opacity = 0;

          window.setTimeout(() => {
            overlay.style.zIndex = -1;
          }, 600)
        }, 600)
      }
    }, 100)
  }

  handleLogoClick(e) {
    const home = document.querySelector('.homepage');
    const overlay = document.querySelector('.overlay');

    if (home) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    this.setState(state => ({
      showMenu: false
    }));
    
    window.setTimeout(() => {
      overlay.style.opacity = 0;

      window.setTimeout(() => {
        overlay.style.zIndex = -1;
      }, 600)
    }, 600)
  }

  render() {
    open = this.state.menuIsOpen ? true : false;
    show = this.state.showMenu ? true : false;

    return (
      <header>
        <Logo
          menuIsOpen={open}
          handleClick={this.handleLogoClick}
        />
        <HamburgerMenu 
          isOpen={open}
          handleClick={this.handleMenuToggle}
        />
        <Overlay 
          handleClick={this.handleMenuToggle}
          visible={`${show}`} 
        />
      </header>
    );
  }
}

export default Header;
