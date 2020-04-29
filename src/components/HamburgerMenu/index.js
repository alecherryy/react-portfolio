import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  render() {
    return (
      <button 
        type="button"
        className={
          this.state.isOpen ? 'hamburger is-open' : 'hamburger'
        }
        onClick={this.handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  }
}

export default HamburgerMenu;
