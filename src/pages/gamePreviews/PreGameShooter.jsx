// src/pages/PreGameShooter.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGameShooter = () => {
  return (
    <>
      <Helmet>
        <title>Shooter </title>
      </Helmet>
    
      <Header />
      
      <div className="game-description">
        <h1>Shooter</h1>
        <h4>Shoot as many ships as you can!</h4>
        <p>Drag your ship through the screen with your finger</p>
        <Link to='/play/shooter'>
          <button className="play-button">Play</button>
        </Link>
      </div>
    </>
  );
};

export default PreGameShooter;
