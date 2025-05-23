import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import IndexPage from './pages/IndexPage.jsx';
import Perfil from './pages/Perfil.jsx';
import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

import Header from './components/Header.jsx';
import LoginHeader from './components/LoginHeader.jsx';

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

  return (
    <Router>
      <ShowHeader />

      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/" element={isLoggedIn ? <IndexPage /> : <Navigate to="/login" replace />} />
        <Route path="/perfil" element={isLoggedIn ? <Perfil /> : <Navigate to="/login" replace />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
