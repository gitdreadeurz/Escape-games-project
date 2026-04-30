import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConceptPage from './pages/ConceptPage';
import MissionsPage from './pages/MissionsPage';
import ReservationPage from './pages/ReservationPage';
import PaiementPage from './pages/PaiementPage';
import AvisPage from './pages/AvisPage';
import InscriptionPage from './pages/InscriptionPage';
import DashboardPage from './pages/DashboardPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/paiement" element={<PaiementPage />} />
        <Route path="/avis" element={<AvisPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
