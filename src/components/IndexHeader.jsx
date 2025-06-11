import React from 'react';

export default function IndexHeader() {
  return (
    <header className="header text-white py-3 px-4">
      <div className="header-content">
        <img src="/images/iscte-logo-no-background.png" alt="ISCTE Logo" height="40" />
        <div className="header-text">
          <div className="small">15 Março 2025</div>
          <h5 className="mb-0">O teu dia</h5>
        </div>
      </div>
    </header>
  );
}