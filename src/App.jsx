import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import IndexPage from './pages/IndexPage.jsx';
import Games from './pages/Games.jsx';
import Leaderboards from './pages/Leaderboards.jsx';
import GameShooter from './pages/games/GameShooter.jsx';
import Game2048 from './pages/games/Game2048.jsx';
import GamePinball from './pages/games/GamePinball.jsx';

import GameTabs from './components/GameTabs.jsx';

import './assets/css/styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/games" element={isLoggedIn ? <Games /> : <Navigate to="/login" replace />} />
        <Route path="/leaderboards" element={isLoggedIn ? <Leaderboards /> : <Navigate to="/login" replace />} />


        {/* Authenticated routes without tabs */}
        <Route path="/index" element={isLoggedIn ? <IndexPage /> : <Navigate to="/login" replace />} />
        <Route path="/play/2048" element={isLoggedIn ? <Game2048 /> : <Navigate to="/login" replace />} />
        <Route path="/play/shooter" element={isLoggedIn ? <GameShooter /> : <Navigate to="/login" replace />} />
        <Route path="/play/pinball" element={isLoggedIn ? <GamePinball /> : <Navigate to="/login" replace />} />

        {/* Root redirect */}
        <Route path="/" element={<Navigate to={isLoggedIn ? "/index" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;