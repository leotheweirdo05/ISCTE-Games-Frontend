// src/components/BottomNav.jsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const BottomNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="navbar fixed-bottom bg-white border-top shadow-sm py-2">
        <div className="container-fluid d-flex justify-content-around align-items-end text-center position-relative">
          <div className="nav-item">
            <div className="text-muted mb-1">🏠</div>
            <small className="text-muted">Home</small>
          </div>
          <div className="nav-item">
            <div className="text-muted mb-1">📅</div>
            <small className="text-muted">Calendar</small>
          </div>

          {/* Middle Menu Button */}
          <button
            onClick={toggleMenu}
            className="bg-white border rounded-4 d-flex flex-column align-items-center justify-content-center shadow-sm"
            style={{
              width: "64px",
              height: "64px",
              marginTop: "-32px",
              zIndex: 2,
              border: "none",
            }}
          >
            <div className="iscte-bluer-text" style={{ fontSize: "1.5rem" }}>📋</div>
            <small className="iscte-bluer-text">Menu</small>
          </button>

          <div className="nav-item">
            <div className="text-muted mb-1">📚</div>
            <small className="text-muted">Course</small>
          </div>
          <div className="nav-item">
            <div className="text-muted mb-1">💳</div>
            <small className="text-muted">Payments</small>
          </div>
        </div>
      </nav>

      {/* Custom Popup Menu */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            }}
            onClick={toggleMenu}
          />

          {/* Bottom Sheet */}
          <div
            className="position-fixed bottom-0 start-0 w-100 bg-white rounded-top"
            style={{
              zIndex: 1001,
              maxHeight: '70vh', // Try viewport height explicitly
              height: '70vh', // Add height to force it taller
              overflowY: 'auto',
              padding: '1rem 1.5rem 2rem',
              boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Menu</h5>
              <button className="btn btn-link text-decoration-none fs-4" onClick={toggleMenu}>×</button>
            </div>

            <div className="container">
              <div className="row text-center gy-4">
                {[
                  { icon: "📰", label: "Notícias" },
                  { icon: "📅", label: "Eventos" },
                  { icon: "❓", label: "Ajuda" },
                  { icon: "🔍", label: "Diretório" },
                  { icon: "📚", label: "Biblioteca" },
                  { icon: "🎾", label: "Desporto" },
                  { icon: "🗺️", label: "Mapa" },
                  { icon: "🍽️", label: "Alimentação" },
                  { icon: "ℹ️", label: "Informações Úteis" },
                  { icon: "🎮", label: "Jogos", to: "/games"},
                ].map((item, i) => (
                  <div className="col-4" key={i}>
                    {item.to ? (
                      <Link to={item.to} className="text-decoration-none">
                        <div
                          className="rounded-circle bg-light d-flex flex-column align-items-center justify-content-center mx-auto"
                          style={{ width: '64px', height: '64px' }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        </div>
                        <small className="d-block mt-2">{item.label}</small>
                      </Link>
                    ) : (
                      <div>
                        <div
                          className="rounded-circle bg-light d-flex flex-column align-items-center justify-content-center mx-auto"
                          style={{ width: '64px', height: '64px' }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        </div>
                        <small className="d-block mt-2">{item.label}</small>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}



    </>
  );
};

export default BottomNav;