import React from 'react';
import './styles.scss';

const HamburgerMenu = ({ handleClick, isOpen }) => {
  const classes = [
    'hamburger',
    isOpen ? 'is-open' : ''
  ]
  return (
    <button type="button" className={classes.join(' ')} onClick={handleClick}>
      <span />
      <span />
      <span />
    </button>
  );
}

export default HamburgerMenu;
