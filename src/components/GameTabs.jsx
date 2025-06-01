import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export default function GameTabs() {
  const path = useLocation().pathname;
  const isGames = path.startsWith("/games");
  const isLeaderboards = path.startsWith("/leaderboards");

  return (
    <>
      <div className="bg-light border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className={`col p-3 ${isGames ? 'bg-white' : 'iscte-bluer'}`}>
              <Link to="/games" className="text-decoration-none d-block">
                <span className={isGames ? 'iscte-bluer-text' : 'text-white'}>Games</span>
              </Link>
            </div>
            <div className={`col p-3 ${isLeaderboards ? 'bg-white' : 'iscte-bluer'}`}>
              <Link to="/leaderboards" className="text-decoration-none d-block">
                <span className={isLeaderboards ? 'iscte-bluer-text' : 'text-white'}>Leaderboards</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}
