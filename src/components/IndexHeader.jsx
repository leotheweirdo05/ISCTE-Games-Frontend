import React from 'react';
import styles from './IndexHeader.module.css';

export default function IndexHeader() {
  return (
    <header className={`d-block py-4 ${styles.indexHeader}`}>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <img src="/images/iscte-logo.png" alt="ISCTE Logo" height="60" />
            <div className="mt-2">
              <h5 className="mb-0">ISCTE Games Portal</h5>
              <small className="text-muted">Powered by Students, for Students</small>
            </div>
          </div>
          <div className="col"></div>
          <div className="col">[img]</div>
        </div>
      </div>
    </header>
  );
}