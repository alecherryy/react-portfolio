import React, { Component } from 'react';
import './styles.scss';

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
    const classes = [
      'hamburger',
      this.state.isOpen ? 'is-open' : ''
    ]
    return (
      <Button type="button" className={classes.join(' ')} onClick={this.handleClick}>
        <span />
        <span />
        <span />
      </Button>
    );
  }
}

export default HamburgerMenu;
