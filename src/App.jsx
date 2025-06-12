import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {useState, useEffect} from "react";

import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import Games from "./pages/Games.jsx";
import Leaderboards from "./pages/Leaderboards.jsx";

import Leaderboard2048 from "./pages/leaderboards/Leaderboard2048.jsx";
import LeaderboardShooter from "./pages/leaderboards/LeaderboardShooter.jsx";
import LeaderboardPinball from "./pages/leaderboards/LeaderboardPinball.jsx";
import LeaderboardMemory from "./pages/leaderboards/LeaderboardMemory.jsx";

import PreGame2048 from "./pages/gamePreviews/PreGame2048.jsx";
import PreGameShooter from "./pages/gamePreviews/PreGameShooter.jsx";
import PreGamePinball from "./pages/gamePreviews/PreGamePinball.jsx";
import PreGameMemory from "./pages/gamePreviews/PreGameMemory.jsx";

import GameShooter from "./pages/games/GameShooter.jsx";
import Game2048 from "./pages/games/Game2048.jsx";
import GamePinball from "./pages/games/GamePinball.jsx";
import GameMemory from "./pages/games/GameMemory.jsx";

import GameTabs from "./components/GameTabs.jsx";

import "./assets/css/styles.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check localStorage for login flag on initial load
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // When isLoggedIn changes, update localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  // Optional: Add a logout handler to clear localStorage
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    // Optionally, redirect to login or call backend logout
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/games"
          element={isLoggedIn ? <Games /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/leaderboards"
          element={
            isLoggedIn ? <Leaderboards /> : <Navigate to="/login" replace />
          }
        />

        {/* Authenticated routes without tabs */}
        <Route path="/index" element={isLoggedIn ? <IndexPage /> : <Navigate to="/login" replace />} />

        <Route path="/leaderboards/2048" element={isLoggedIn ? <Leaderboard2048 /> : <Navigate to="/login" replace />} />
        <Route path="/leaderboards/shooter" element={isLoggedIn ? <LeaderboardShooter /> : <Navigate to="/login" replace />} />
        <Route path="/leaderboards/pinball" element={isLoggedIn ? <LeaderboardPinball /> : <Navigate to="/login" replace />} />
        <Route path="/leaderboards/memory-game" element={isLoggedIn ? <LeaderboardMemory /> : <Navigate to="/login" replace />} />

        <Route path="/preview/2048" element={isLoggedIn ? <PreGame2048 /> : <Navigate to="/login" replace />} />
        <Route path="/preview/shooter" element={isLoggedIn ? <PreGameShooter /> : <Navigate to="/login" replace />} />
        <Route path="/preview/pinball" element={isLoggedIn ? <PreGamePinball /> : <Navigate to="/login" replace />} />
        <Route path="/preview/memory" element={isLoggedIn ? <PreGameMemory /> : <Navigate to="/login" replace />} />

        <Route path="/play/2048" element={isLoggedIn ? <Game2048 /> : <Navigate to="/login" replace />} />
        <Route path="/play/shooter" element={isLoggedIn ? <GameShooter /> : <Navigate to="/login" replace />} />
        <Route path="/play/pinball" element={isLoggedIn ? <GamePinball /> : <Navigate to="/login" replace />} />
        <Route path="/play/memory" element={isLoggedIn ? <GameMemory /> : <Navigate to="/login" replace />} />

        {/* Root redirect */}
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/index" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
