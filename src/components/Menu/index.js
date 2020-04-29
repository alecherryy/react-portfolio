import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project

class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="/projects">Projects</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/about">About</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/contact">Contact</a>
        </li>
      </ul>
    );
  }
}

export default Menu;