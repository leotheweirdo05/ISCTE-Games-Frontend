// src/pages/GameShooter.jsx
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const GameShooter = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const sendToken = () => {
      const token = localStorage.getItem('token');
      if (token && iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: 'SET_TOKEN', token },
          'http://localhost'
        );
        console.log('Sent token to iframe:', token); // Debug log
      } else {
        console.log('Token or iframe not ready:', { token, iframe: !!iframeRef.current });
      }
    };

    // Send token when iframe loads
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', sendToken);
    }

    // Retry sending token after a short delay
    const timer = setTimeout(sendToken, 15000);

    // Cleanup
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', sendToken);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Shooter</title>
      </Helmet>

      <Header />

      <div className="game-wrapper">
        <iframe
          ref={iframeRef}
          src="/games/Shooter/ShootEmUp.worker.html"
          title="Shooter Game"
        />
      </div>
    </>
  );
};

export default GameShooter;