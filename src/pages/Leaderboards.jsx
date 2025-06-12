import {Helmet} from "react-helmet";
import Header from "../components/Header.jsx";
import GameTabs from "../components/GameTabs.jsx";
import BottomNav from "../components/BottomNav.jsx";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Leaderboards() {
  const [leaderboards, setLeaderboards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const gameTitles = {
    game1: "2048",
    game2: "Shooter",
    game3: "Pinball",
    game4: "Memory Game",
  };

  // Function to convert game title to URL-friendly slug
  const toSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        setLoading(true);
        const games = ["game1", "game2", "game3", "game4"];
        const leaderboardPromises = games.map(async (game) => {
          const response = await fetch(`http://localhost:3000/api/scores/leaderboard?game=${game}`);
          console.log(`Response for ${game}:`, {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
          });

          const contentType = response.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            const text = await response.text();
            console.error(`Non-JSON response for ${game}:`, text);
            throw new Error(`Expected JSON, got ${contentType}: ${text}`);
          }

          const scores = await response.json();
          if (!response.ok) {
            throw new Error(
              `HTTP error: ${response.status} - ${
                scores.message || "Unknown error"
              }`
            );
          }

          return {
            title: gameTitles[game],
            gameId: game,
            scores: scores.map((score) => ({
              player: score.user?.name || "Unknown",
              score: score.score,
            })),
          };
        });

        const results = await Promise.all(leaderboardPromises);
        setLeaderboards(results);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLeaderboards();
  }, []);

  if (loading) {
    return (
      <div className="container my-4 text-center">
        <p>Loading leaderboards...</p>
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
        <title>Leaderboards</title>
      </Helmet>

      <Header />
      <GameTabs />

      <div className="container my-4">
        {leaderboards.map((board, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="card-header leaderboard-header text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{board.title}</h5>
              <Link
                to={`/leaderboards/${toSlug(board.title)}`}
                className="btn btn-light btn-sm">
                View All
              </Link>
            </div>
            <ul className="list-group list-group-flush">
              {board.scores.map((entry, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between">
                  <span>
                    {idx + 1}. {entry.player}
                  </span>
                  <span>{entry.score}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <BottomNav />
    </>
  );
}
