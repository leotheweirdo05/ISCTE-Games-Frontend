// src/pages/GameShooter.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const GameShooter = () => {
  useEffect(() => {
    // Pass token to Godot game
    const token = localStorage.getItem('token');
    if (token) {
      // Set global variable for Godot to access
      window.godotToken = token;
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Shooter</title>
      </Helmet>

      <Header />

      <div className="game-wrapper">
        <iframe
          src="/games/Shooter/ShootEmUp.worker.html"
          title="Shooter Game"
          style={{ width: '100%', height: '600px', border: 'none' }}
        />
      </div>
    </>
  );
};

export default GameShooter;