import React from 'react';

export default function IndexHeader() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="header text-white py-1 px-3">
      <div className="header-content">
        <img src="/images/iscte-logo-no-background.png" alt="ISCTE Logo" height="40" />
        <div className="header-text mt-3 ms-2">
          <div className="fs-5">{formattedDate}</div>
          <h5 className="mt-2 fs-1">Your day</h5>
        </div>
      </div>
    </header>
  );
}