import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link" to="/projects">Projects</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/about">About</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

export default Menu;