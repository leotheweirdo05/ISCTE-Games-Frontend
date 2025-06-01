import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Game2048 from './pages/games/Game2048.jsx';
import Games from './pages/Games.jsx';
import Leaderboards from './pages/Leaderboards.jsx';
import GameShooter from './pages/games/GameShooter.jsx';

import Header from './components/Header.jsx';
import LoginHeader from './components/LoginHeader.jsx';
import BottomNav from './components/BottomNav.jsx';
import GameTabs from './components/GameTabs.jsx'; // Layout wrapper

import './assets/css/styles.css';

function ShowHeader({ isLoggedIn }) {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/forgot-password') {
    return <LoginHeader />;
  }
  return isLoggedIn ? <Header /> : null;
}

function ShowBottomNav() {
  const location = useLocation();
  const hiddenPaths = ['/login', '/forgot-password'];
  return !hiddenPaths.includes(location.pathname) ? <BottomNav /> : null;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ShowHeader isLoggedIn={isLoggedIn} />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Authenticated Tabs Routes (Games + Leaderboards) */}
        {isLoggedIn && (
          <Route element={<GameTabs />}>
            <Route path="/games" element={isLoggedIn ? <Games /> : <Navigate to="/login" replace />} />
            <Route path="/leaderboards" element={isLoggedIn ? <Leaderboards /> : <Navigate to="/login" replace />} />
          </Route>
        )}

        {/* Other Authenticated Routes */}
        <Route path="/" element={<Navigate to={isLoggedIn ? "/games" : "/login"} replace />} />
        <Route path="/play/2048" element={isLoggedIn ? <Game2048 /> : <Navigate to="/login" replace />} />
        <Route path="/play/shooter" element={isLoggedIn ? <GameShooter /> : <Navigate to="/login" replace />} />
      </Routes>

      <ShowBottomNav />
    </Router>
  );
}

export default App;