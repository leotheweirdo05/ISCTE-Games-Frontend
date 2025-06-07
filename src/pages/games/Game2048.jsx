// src/pages/Game2048.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const Game2048 = () => {
  return (
    <>
      <Helmet>
        <title>2048</title>
      </Helmet>

      <Header />
      
      <div className="game-wrapper">
        <iframe src="/games/2048/2048.html" title="2048 Game" />
      </div>
    </>
  );
};

export default Game2048;
