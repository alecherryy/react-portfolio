import React from 'react';
import { Link } from 'react-router-dom';

const LogoOverlay = (handleClick) => {
  return (
    <Link className="logo" to="/" onClick={handleClick}>alecherryy</Link>
  );
}

export default LogoOverlay;
