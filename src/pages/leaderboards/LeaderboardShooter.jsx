import { Helmet } from 'react-helmet';
import Header from '../../components/Header.jsx';
import BottomNav from '../../components/BottomNav.jsx';
import { Link } from 'react-router-dom';

export default function LeaderboardShooter() {
  const players = [
    { name: 'Alice', score: 3000 },
    { name: 'Bob', score: 2800 },
    { name: 'Charlie', score: 2600 },
    { name: 'David', score: 2400 },
    { name: 'Eve', score: 2200 },
    { name: 'Frank', score: 2000 },
    { name: 'Grace', score: 1800 },
    { name: 'Heidi', score: 1600 },
    { name: 'Ivan', score: 1400 },
    { name: 'Judy', score: 1200 },
  ];

  return (
    <>
      <Helmet>
        <title>Shooter Leaderboard</title>
      </Helmet>

      <Header />

      <div className="container my-4">
        <h2 className="text-center mb-4">Shooter Leaderboard</h2>

        <div className="card shadow-sm">
          <ul className="list-group list-group-flush">
            {players.map((player, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <span>{index + 1}. {player.name}</span>
                <span>{player.score}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link to="/leaderboards" className="btn btn-secondary">Back to Leaderboards</Link>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
