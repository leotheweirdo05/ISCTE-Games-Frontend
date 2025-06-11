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

      <div className="container bg-white p-3">
        {/* Welcome Box */}
        <div className="bg-success text-white p-3 rounded mb-4">
          <h5 className="fw-bold">Bem-vindo ao ISCTE</h5>
          <p className="mb-2">
            Na página inicial podes ver as tuas próximas aulas, notificações,
            próximos eventos e a ementas disponíveis.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <span>Vai até ao mapa e começa a explorar o campus!</span>
            <Link to="#" className="text-white text-decoration-underline">Começar</Link>
          </div>
        </div>

        {/* Horário Section */}
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h6 className="fw-bold text-primary m-0">HORÁRIO</h6>
          <Link to="#" className="text-decoration-none text-primary">Ver tudo</Link>
        </div>

        {/* Class Cards */}
        <div className="mb-3 p-3 border rounded bg-light">
          <div className="d-flex justify-content-between">
            <span className="fw-bold text-secondary">09:30</span>
            <span className="text-danger small">Mudança de Sala: P1.02</span>
          </div>
          <div className="fw-semibold text-dark">Programação para Internet</div>
        </div>

        <div className="mb-5 p-3 border rounded bg-light">
          <div className="d-flex justify-content-between">
            <span className="fw-bold text-secondary">14:00</span>
          </div>
          <div className="fw-semibold text-dark">Bases de Dados</div>
          <div className="text-muted small">Sala P3.03</div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}