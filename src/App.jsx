import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import Perfil from './pages/Perfil.jsx';

import Header from './components/Header.jsx';

import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
    </Router>
  );
}
export default App;