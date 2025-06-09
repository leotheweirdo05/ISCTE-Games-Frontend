// src/pages/PreGameShooter.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGameShooter = () => {
  return (
    <>
      <Helmet>
        <title>PreShooter</title>
      </Helmet>

      <Header />
      <h1>Test</h1>
      <p>Epic test page</p>
      <Link to='/play/shooter'>[DEBUG LINK TO shooter GAEM]</Link>
      
    </>
  );
};

export default PreGameShooter;
