import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import GameTabs from '../components/GameTabs.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function Leaderboards() {
  return (
    <>
      <Helmet>
        <title>Leaderboards</title>
      </Helmet>

      <Header />
      <GameTabs />

      <div className="container text-center bg-white p-3">
        <h2>Leaderboards Page</h2>
      </div>

      <BottomNav />
    </>
  );
}
