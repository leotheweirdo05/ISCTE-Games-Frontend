import React from 'react';
import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={`d-block p-2 ${styles.header}`}>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src="/images/iscte-logo.png" alt="ISCTE Logo" height="40" />
          </div>
          <div className="col"></div>
          <div className="col">[img]</div>
        </div>
      </div>
    </header>
  );
}
