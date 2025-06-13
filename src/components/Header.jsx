import React from 'react';
import styles from './Header.module.css';
import { RiAccountCircleFill } from "react-icons/ri";


export default function Header() {
  return (
    <header className={`d-block p-2 ${styles.header}`}>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src="/images/iscte-logo.png" alt="ISCTE Logo" height="40" />
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"><RiAccountCircleFill className="header-icon"/></div>
        </div>
      </div>
    </header>
  );
}
