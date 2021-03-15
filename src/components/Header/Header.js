import React from 'react';
import './Header.css';
import Logo from '../../static/logo.png';

const Header = () => {
  return (
    <>
      <div className="container">
        <div id="waveTwo" className="waveBox"></div>
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="text">KANBAN</h1>
      </div>
    </>
  );
};

export default Header;
