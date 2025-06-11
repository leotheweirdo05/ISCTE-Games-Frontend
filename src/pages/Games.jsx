import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import GameTabs from '../components/GameTabs.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function Games() {
  return (
    <>
      <Helmet>
        <title>Games</title>
      </Helmet>

      <Header />
      <GameTabs />
      
      <div
        className="games-grid-container"
      >
        {[
          { label: '2048', link: '/preview/2048' },
          { label: 'Shooter', link: '/preview/shooter' },
          { label: 'Pinball', link: '/preview/pinball' },
          { label: 'Memory Game', link: '/preview/memory' },
        ].map((item, i) => (
          item.link ? (
            <Link to={item.link} className="game-tile text-decoration-none" key={i}>
              <div className="game-select-style placeholder-img">{item.label}</div>
            </Link>
          ) : (
            <div className="game-tile" key={i}>
              <div className="game-select-style placeholder-img">{item.label}</div>
            </div>
          )
        ))}
      </div>

      <BottomNav />
    </>
  );
}
