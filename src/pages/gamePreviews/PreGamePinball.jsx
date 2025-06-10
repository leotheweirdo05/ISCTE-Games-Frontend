// src/pages/PreGamePinball.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGamePinball = () => {
  return (
    <>
      <Helmet>
        <title>Pinball</title>
      </Helmet>
  
      <Header />
    
      <div className="game-description">
        <h1>Pinball</h1>
        <h4>Get the highest score you can by hitting the bumpers!</h4>
        <p>Press either the left or right side of the screen to use the flippers</p>
        <Link to='/play/pinball'>
          <button className="play-button">Play</button>
        </Link>
      </div>
    </>
  );
};

export default PreGamePinball;
