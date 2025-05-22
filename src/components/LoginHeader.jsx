import React from 'react';
import styles from './LoginHeader.module.css';

export default function LoginHeader() {
  return (
    <header className={`d-block ${styles.header}`}>
      <div className="container text-center">
        <div className="row">
          <div className="col">ISCTE</div>
        </div>
      </div>
    </header>
  );
}
