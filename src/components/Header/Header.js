import React from 'react';
import './App.css';
import Logo from '../../static/logo.png';

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="overlay">
          <div id="waveTwo" className="waveBox"></div>
        </div>
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="text">KANBAN</h1>
      </div>
    </>
  );
};

export default Header;
