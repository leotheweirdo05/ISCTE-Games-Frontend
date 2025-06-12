import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

const Game2048 = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const sendToken = () => {
      const token = localStorage.getItem('token');
      if (token && iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: 'SET_TOKEN', token },
          'http://localhost'
        );
        console.log('Sent token to 2048 iframe:', token);
      } else {
        console.log('Token or 2048 iframe not ready:', { token, iframe: !!iframeRef.current });
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', sendToken);
    }
    const timer = setTimeout(sendToken, 1000);

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
        <title>2048</title>
      </Helmet>

      <Header />

      <div className="game-wrapper">
        <iframe
          ref={iframeRef}
          src="/games/2048/2048.worker.html"
          title="2048 Game"
        />
      </div>
    </>
  );
};

export default Game2048;