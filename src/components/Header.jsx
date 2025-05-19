import React from 'react';
import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={`d-block p-2 ${styles.header}`}>
      <div className="container text-center">
        <div className="row">
          <div className="col">ISCTE</div>
          <div className="col"></div>
          <div className="col">[img]</div>
        </div>
      </div>
    </header>
  );
}
