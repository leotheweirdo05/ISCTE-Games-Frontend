import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import IndexHeader from '../components/IndexHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>ISCTE</title>
      </Helmet>
      
      <IndexHeader />

      <div className="container text-center bg-white p-3">
        <h2>Welcome!</h2>
        <Link to="/games">[DEBUG LINK TO GAMES PAGE]</Link>
      </div>

      <BottomNav />
    </>
  );
}
