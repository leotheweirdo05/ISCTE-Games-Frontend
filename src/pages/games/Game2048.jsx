// src/pages/Game2048.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Game2048 = () => {
  return (
    <>
      <Helmet>
        <title>2048</title>
      </Helmet>

      <div className="game-wrapper">
        <iframe src="/games/2048/2048.html" title="2048 Game" />
      </div>
    </>
  );
};

export default Game2048;
