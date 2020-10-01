import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

let open;
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: this.props.menuIsOpen
    };
  }

  componentWillReceiveProps(menuIsOpen) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({ menuState: this.props.menuIsOpen });
    open = this.state;
  }

  handleLogoClick(e) {
    const home = document.querySelector('.homepage');
    const overlay = document.querySelector('.overlay');

    if (open) {
      overlay.style.opacity = 0;

      window.setTimeout(() => {
        overlay.style.zIndex = -1;
      }, 600)
    }

    if (home) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  render() {
    return (
      <Link className="logo" to="/" onClick={this.handleLogoClick}>alecherryy</Link>
    );
  }
}

export default Logo;
