import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Games() {
  return (
    <>
      <Helmet>
        <title>Games</title>
      </Helmet>

      <div
        className="games-grid-container"
      >
        {[
          { label: '2048', link: '/play/2048' },
          { label: 'Shooter', link: '/play/shooter' },
          { label: 'gaem tree' },
          { label: 'gaem for' },
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
    </>
  );
}
