// src/pages/GameMemory.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const GameMemory = () => {
  return (
    <>
      <Helmet>
        <title>Memory</title>
      </Helmet>

      <Header />
      
      <div className="game-wrapper">
        <iframe src="/games/Memory Game/Memory Game.html" title="Memory Game" />
      </div>
    </>
  );
};

export default GameMemory;
