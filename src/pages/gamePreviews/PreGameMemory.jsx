// src/pages/PreGameMemory.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const PreGameMemory = () => {
  return (
    <>
      <Helmet>
        <title>PreMemory</title>
      </Helmet>

      <Header />
      <h1>Test</h1>
      <p>Epic test page</p>
      <Link to='/play/memory'>[DEBUG LINK TO Memory GAEM]</Link>
      
    </>
  );
};

export default PreGameMemory;
