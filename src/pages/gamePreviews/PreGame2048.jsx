// src/pages/PreGame2048.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGame2048 = () => {
  return (
    <>
      <Helmet>
        <title>Pre2048</title>
      </Helmet>

      <Header />
      <h1>Test</h1>
      <p>Epic test page</p>
      <Link to='/play/2048'>[DEBUG LINK TO 2048 GAEM]</Link>
      
    </>
  );
};

export default PreGame2048;
