// src/pages/PreGameMemory.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGameMemory = () => {
  return (
    <>
      <Helmet>
        <title>Memory</title>
      </Helmet>

      <Header />
  
      <div className="game-description">
        <h1>Memory Game</h1>
        <h4>Match all pairs of cards as fast as possible!</h4>
        <p>Click on a card to flip it</p>
        <Link to='/play/memory'>
          <button className="play-button">Play</button>
        </Link>
      </div>
    </>
  );
};

export default PreGameMemory;
