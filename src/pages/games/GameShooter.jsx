// src/pages/GameShooter.jsx
import React, {useEffect, useRef} from "react";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import {FaXmark} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const GameShooter = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sendToken = () => {
      const token = localStorage.getItem("token");
      if (token && iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          {type: "SET_TOKEN", token},
          "http://localhost"
        );
        console.log("Sent token to iframe:", token); // Debug log
      } else {
        console.log("Token or iframe not ready:", {
          token,
          iframe: !!iframeRef.current,
        });
      }
    };

    // Send token when iframe loads
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", sendToken);
    }

    // Retry sending token after a short delay
    const timer = setTimeout(sendToken, 15000);

    // Cleanup
    return () => {
      if (iframe) {
        iframe.removeEventListener("load", sendToken);
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
        <button
          onClick={() => navigate("/games")}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 10,
            padding: 8,
            background: "#0d28c2", // ISCTE blue
            color: "#fff",
            border: "2px solid #0d28c2",
            borderRadius: "50%",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          aria-label="Exit Game">
          <FaXmark />
        </button>
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
