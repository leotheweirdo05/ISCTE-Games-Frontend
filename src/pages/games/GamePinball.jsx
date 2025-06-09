// src/pages/GamePinball.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const GamePinball = () => {
  return (
    <>
      <Helmet>
        <title>Pinball</title>
      </Helmet>

      <Header />
      
      <div className="game-wrapper">
        <iframe src="/games/Pinball/pinball.html" title="Pinball Game" />
      </div>
    </>
  );
};

export default GamePinball;
