import React, {useEffect, useRef} from "react";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";
import {FaXmark} from "react-icons/fa6";
import Header from "../../components/Header";

const Game2048 = () => {
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
        console.log("Sent token to 2048 iframe:", token);
      } else {
        console.log("Token or 2048 iframe not ready:", {
          token,
          iframe: !!iframeRef.current,
        });
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", sendToken);
    }
    const timer = setTimeout(sendToken, 10000);

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
        <title>2048</title>
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
          src="/games/2048/2048.worker.html"
          title="2048 Game"
        />
      </div>
    </>
  );
};

export default Game2048;
