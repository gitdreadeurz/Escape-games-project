import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="Escape Room" className="logo" />
        <span>Escape Room</span>
      </div>

      <nav className="nav-links">
        <Link to="/concept">Le concept</Link>
        <Link to="/missions">Les missions</Link>
        <Link to="/avis">Les avis</Link>
        <Link to="/inscription">Inscription/Contact</Link>
        <Link to="/reservation" className="nav-reserve">Réservez</Link>
      </nav>
    </header>
  );
}

export default Navbar;