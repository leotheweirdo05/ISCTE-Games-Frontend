import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const GamePinball = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const sendToken = () => {
      const token = localStorage.getItem('token');
      if (token && iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: 'SET_TOKEN', token },
          'http://localhost'
        );
        console.log('Sent token to Pinball iframe:', token);
      } else {
        console.log('Token or Pinball iframe not ready:', { token, iframe: !!iframeRef.current });
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', sendToken);
    }
    const timer = setTimeout(sendToken, 10000);

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
        <title>Pinball</title>
      </Helmet>

      <Header />

      <div className="game-wrapper">
        <iframe
          ref={iframeRef}
          src="/games/Pinball/pinball.worker.html"
          title="Pinball Game"
        />
      </div>
    </>
  );
};

export default GamePinball;