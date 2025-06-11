// src/pages/GameShooter.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const GameShooter = () => {
  return (
    <>
      <Helmet>
        <title>Shooter</title>
      </Helmet>

      <Header />

      <div className="game-wrapper">
        <iframe src="/games/Shooter/ShootEmUp.html" title="Shooter Game" />
      </div>
    </>
  );
};

export default GameShooter;
