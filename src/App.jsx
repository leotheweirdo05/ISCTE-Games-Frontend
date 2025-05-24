import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import IndexPage from './pages/IndexPage.jsx';
import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

import Game2048 from './pages/games/Game2048.jsx';

import Header from './components/Header.jsx';
import LoginHeader from './components/LoginHeader.jsx';
import BottomNav from './components/BottomNav.jsx';

import './assets/css/styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ShowHeader = () => {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/forgot-password') {
      return <LoginHeader />;
    }

    return isLoggedIn ? <Header /> : null;
  };

  const ShowBottomNav = () => {
  const location = useLocation();
  return location.pathname === '/' ? <BottomNav /> : null;
};


  return (
    <Router>
      <ShowHeader />

      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={isLoggedIn ? <IndexPage /> : <Navigate to="/login" replace />} />
        <Route path="/play/2048" element={isLoggedIn ? <Game2048 /> : <Navigate to="/login" replace />} />
      </Routes>

      <ShowBottomNav />
    </Router>
  );
}

export default App;
