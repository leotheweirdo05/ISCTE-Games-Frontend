import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import GameTabs from '../components/GameTabs.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { Link } from 'react-router-dom';

export default function Leaderboards() {
  const leaderboards = [
    { title: '2048', players: ['Bob', 'Bob', 'Bob', 'Bob', 'Bob'], scores: [3000, 2800, 2600, 2400, 2200] },
    { title: 'Shooter', players: ['Bob', 'Bob', 'Bob', 'Bob', 'Bob'], scores: [1500, 1400, 1350, 1300, 1250] },
    { title: 'Pinball', players: ['Bob', 'Bob', 'Bob', 'Bob', 'Bob'], scores: [900, 850, 800, 750, 700] },
    { title: 'Memory Game', players: ['Bob', 'Bob', 'Bob', 'Bob', 'Bob'], scores: [600, 580, 560, 540, 520] },
  ];

  return (
    <>
      <Helmet>
        <title>Leaderboards</title>
      </Helmet>

      <Header />
      <GameTabs />

      <div className="container my-4">
        {leaderboards.map((board, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="card-header leaderboard-header text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{board.title}</h5>
              <Link to={`/leaderboards/${board.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-light btn-sm">
                View All
              </Link>
            </div>
            <ul className="list-group list-group-flush">
              {board.players.map((player, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between">
                  <span>{idx + 1}. {player}</span>
                  <span>{board.scores[idx]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <BottomNav />
    </>
  );
}
