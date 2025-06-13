import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import GameTabs from '../components/GameTabs.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function Games() {
  // Map game labels to CSS classes
  const getImageClass = (label) => {
    switch (label.toLowerCase()) {
      case '2048':
        return 'numbers-img';
      case 'shooter':
        return 'shooter-img';
      case 'pinball':
        return 'pinball-img';
      case 'memory game':
        return 'memory-img';
      default:
        return 'placeholder-img'; // Fallback class
    }
  };

  return (
    <>
      <Helmet>
        <title>Games</title>
      </Helmet>

      <Header />
      <GameTabs />
      
      <div className="games-grid-container">
        {[
          { label: '2048', link: '/preview/2048' },
          { label: 'Shooter', link: '/preview/shooter' },
          { label: 'Pinball', link: '/preview/pinball' },
          { label: 'Memory Game', link: '/preview/memory' },
        ].map((item, i) => (
          item.link ? (
            <Link to={item.link} className="game-tile text-decoration-none" key={i}>
              <div className={`game-select-style ${getImageClass(item.label)}`}>
                <span>{item.label}</span>
              </div>
            </Link>
          ) : (
            <div className="game-tile" key={i}>
              <div className={`game-select-style ${getImageClass(item.label)}`}>
                {item.label}
              </div>
            </div>
          )
        ))}
      </div>

      <BottomNav />
    </>
  );
}
