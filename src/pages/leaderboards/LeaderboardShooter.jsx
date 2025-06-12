import {Helmet} from "react-helmet";
import Header from "../../components/Header.jsx";
import BottomNav from "../../components/BottomNav.jsx";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function LeaderboardShooter() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:3000/api/scores/leaderboard?game=game2&all=true"
        );
        console.log("Response for Shooter:", {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
        });

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Non-JSON response for Shooter:", text);
          throw new Error(`Expected JSON, got ${contentType}: ${text}`);
        }

        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            `HTTP error: ${response.status} - ${
              data.message || "Unknown error"
            }`
          );
        }

        setScores(
          data.map((score) => ({
            name: score.user?.name || "Unknown",
            score: score.score,
          }))
        );
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) {
    return (
      <div className="container my-4 text-center">
        <p>Loading leaderboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-4 text-center">
        <p className="text-danger">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Shooter Leaderboard</title>
      </Helmet>

      <Header />

      <div className="container my-4">
        <h2 className="text-center mb-4">Shooter Leaderboard</h2>

        <div className="card shadow-sm">
          <ul className="list-group list-group-flush">
            {scores.map((player, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between">
                <span>
                  {index + 1}. {player.name}
                </span>
                <span>{player.score}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link to="/leaderboards" className="btn btn-secondary">
            Back to Leaderboards
          </Link>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
