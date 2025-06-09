// src/pages/PreGamePinball.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGamePinball = () => {
  return (
    <>
      <Helmet>
        <title>PrePinball</title>
      </Helmet>

      <Header />
      <h1>Test</h1>
      <p>Epic test page</p>
      <Link to='/play/pinball'>[DEBUG LINK TO Pinball GAEM]</Link>
      
    </>
  );
};

export default PreGamePinball;
