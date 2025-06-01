// src/pages/GameShooter.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const GameShooter = () => {
  return (
    <>
      <Helmet>
        <title>Shooter</title>
      </Helmet>

      <div className="game-wrapper">
        <iframe src="/games/Shooter/ShootEmUp.html" title="Shooter Game" />
      </div>
    </>
  );
};

export default GameShooter;
