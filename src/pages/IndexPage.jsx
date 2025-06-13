import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import IndexHeader from '../components/IndexHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { FaChevronRight } from 'react-icons/fa';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>ISCTE</title>
      </Helmet>

      <IndexHeader />

      <div className="container bg-white p-3">
        {/* Welcome Box */}
        <div className="intro-box p-3 rounded mb-5">
          <h5 className='fw-bold'>Welcome to ISCTE</h5>
          <p className="mb-2 fw-semibold">
            In the home page you can see your next classes, notifications, next events and available meals.
          </p>
          <p className="mb-2 fw-semibold">
            Go to the map and start exploring the campus!
          </p>
          <div className="text-end">
            <Link to="#" className="text-decoration-none fw-semibold d-inline-flex align-items-center" style={{ color: '#28640c' }}>
              Start <FaChevronRight className="ms-1" style={{ color: '#0d28c2' }} />
            </Link>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h6 className="fw-semibold iscte-blue-text m-0">SCHEDULE</h6>
          <Link to="#" className="text-decoration-none" style={{ color: '#696e77' }}>See all <FaChevronRight className="ms-1"/></Link>
        </div>

        <div className="mb-3 p-0 rounded d-flex bg-body-tertiary overflow-hidden" style={{ minHeight: '90px' }}>
          {/* Time block */}
          <div className="px-3 py-3 schedule-hour-box d-flex align-items-center justify-content-center">
            <span className="text-dark fs-5">09:30</span>
          </div>

          {/* Content */}
          <div className="flex-grow-1 schedule-class-box px-3 d-flex flex-column justify-content-center">
            <div className="fs-5 fw-semibold text-dark">Internet Programming</div>
            <div>
              <span className="text-danger">Room Switch:</span>{' '}
              <span className="text-muted">P1.02</span>
            </div>
          </div>

          {/* Arrow icon */}
          <div className="d-flex align-items-center pe-3 schedule-class-box">
            <FaChevronRight className="text-primary" />
          </div>
        </div>

        <div className="mb-3 p-0 rounded d-flex bg-body-tertiary overflow-hidden" style={{ minHeight: '90px' }}>
          {/* Time block */}
          <div className="px-3 py-3 schedule-hour-box d-flex align-items-center justify-content-center">
            <span className="text-dark fs-5">14:00</span>
          </div>

          {/* Content */}
          <div className="flex-grow-1 schedule-class-box px-3 d-flex flex-column justify-content-center">
            <div className="fs-5 fw-semibold text-dark">Databases</div>
            <div className="text-muted">Room P3.03</div>
          </div>


          {/* Arrow icon */}
          <div className="d-flex align-items-center pe-3 schedule-class-box">
            <FaChevronRight className="text-primary" />
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
