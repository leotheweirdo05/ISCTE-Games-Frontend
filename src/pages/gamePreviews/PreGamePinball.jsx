import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {Link, useNavigate} from "react-router-dom";
import Header from "../../components/Header";
import {FaArrowLeft} from "react-icons/fa";

const PreGamePinball = () => {
  const [highScore, setHighScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHighScore = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        if (!userId || !token) {
          setError("Please log in to view your high score");
          return;
        }

        const res = await fetch(
          `http://localhost:3000/api/scores/user-scores?game=game3&userId=${userId}`,
          {
            headers: {Authorization: `Bearer ${token}`},
          }
        );

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("Non-JSON response:", text);
          throw new Error(`Expected JSON, got ${contentType}: ${text}`);
        }

        const data = await res.json();
        if (!res.ok) {
          if (res.status === 401) {
            setError("Session expired. Please log in again.");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            navigate("/login");
            return;
          }
          throw new Error(
            `HTTP error: ${res.status} - ${data.message || "Unknown error"}`
          );
        }

        const gameScore =
          Array.isArray(data) && data.length > 0 ? data[0].score : 0;
        setHighScore(gameScore);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          err.message.includes("Please log in")
            ? err.message
            : "Could not fetch high score"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchHighScore();
  }, [navigate]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchHighScore();
  };

  return (
    <>
      <Helmet>
        <title>Pinball</title>
      </Helmet>
      <Header />
      <div style={{alignSelf: "flex-start", margin: "0.5rem 1rem"}}>
        <Link
          to="/games"
          style={{
            textDecoration: "none",
            color: "#0d28c2",
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}>
          <FaArrowLeft style={{marginRight: 8}} /> Back
        </Link>
      </div>
      <div className="game-description">
        <h1>Pinball</h1>
        <h4>Get the highest score you can by hitting the bumpers!</h4>
        <p>
          Press either the left or right side of the screen to use the flippers
        </p>
        <div
          style={{
            margin: "10px 0",
            padding: "16px 32px",
            background: "#f5f6fa",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(13,40,194,0.08)",
            color: "#0d28c2",
            fontWeight: 700,
            fontSize: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {loading ? (
            "Loading high score..."
          ) : error ? (
            <>
              <span>{error}</span>
              {error.includes("Please log in") ||
              error.includes("Session expired") ? (
                <button
                  onClick={() => navigate("/login")}
                  style={{
                    padding: "8px 16px",
                    background: "#0d28c2",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}>
                  Log In
                </button>
              ) : (
                <button
                  onClick={handleRetry}
                  style={{
                    padding: "8px 16px",
                    background: "#0d28c2",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}>
                  Retry
                </button>
              )}
            </>
          ) : (
            `Your High Score: ${highScore === 0 ? "No scores yet" : highScore}`
          )}
        </div>
        <Link to="/play/pinball">
          <button className="play-button">Play</button>
        </Link>
      </div>
    </>
  );
};

export default PreGamePinball;
