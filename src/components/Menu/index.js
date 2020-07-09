import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Menu = ({handleClick}) => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link className="menu__link" to="/projects" onClick={handleClick}>Projects</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/about" onClick={handleClick}>About</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/contact" onClick={handleClick}>Contact</Link>
      </li>
    </ul>
  );
}

export default Menu;