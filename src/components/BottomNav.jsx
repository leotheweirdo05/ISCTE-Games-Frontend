// src/components/BottomNav.jsx
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="navbar fixed-bottom bg-light border-top shadow-sm py-4">
      <div className="container-fluid d-flex justify-content-around">
        <Link to="/" className="nav-link iscte-bluer-text text-center">
          Home
        </Link>
        <Link to="/calendar" className="nav-link iscte-bluer-text text-center">
          Calendar
        </Link>
        <Link to="/menu" className="nav-link iscte-bluer-text text-center">
          Menu
        </Link>
        <Link to="/course" className="nav-link iscte-bluer-text text-center">
          Course
        </Link>
        <Link to="/payment" className="nav-link iscte-bluer-text text-center">
          Payments
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
