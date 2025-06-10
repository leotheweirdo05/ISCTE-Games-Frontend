import React from 'react';
import styles from './IndexHeader.module.css';

export default function IndexHeader() {
  return (
    <header style={{ backgroundColor: "#0d28c2" }} className="text-white py-3 px-4">
      <div className="d-flex align-items-center justify-content-between">
        <img src="/images/iscte-logo.png" alt="ISCTE Logo" height="40" />
        <div className="text-end">
          <div className="small">15 Março 2025</div>
          <h5 className="mb-0">O teu dia</h5>
        </div>
      </div>
    </header>
  );
}