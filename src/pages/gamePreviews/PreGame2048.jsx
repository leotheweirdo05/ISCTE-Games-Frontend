// src/pages/PreGame2048.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGame2048 = () => {
  return (
    <>
      <Helmet>
        <title>2048</title>
      </Helmet>

      <Header />

      <div className="game-description">
        <h1>2048</h1>
        <h4>Match boxes with the same number to reach the highest number possible!</h4>
        <p>Swipe the screen to move the boxes</p>
        <Link to="/play/2048">
          <button className="play-button">Play</button>
        </Link>
      </div>
    </>
  );
};


export default PreGame2048;
