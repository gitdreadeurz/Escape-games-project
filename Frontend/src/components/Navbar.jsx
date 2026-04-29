import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoged(true);
    } else {
      setIsLoged(false);
    }
  }, []);

  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="Escape Room" className="logo" />
        <span>Escape Room</span>
      </div>


      <nav className="nav-links">
        <button onClick={() => {
          navigate('/')
        }}>Accueil</button>
        <button onClick={() => {
          navigate('/concept')
        }}>Le concept</button>
        <button onClick={() => {
          navigate('/missions')
        }}>Les missions</button>
        <button onClick={() => {
          navigate('/avis')
        }}>Les avis</button>


        {isLoged ? <button style={{ backgroundColor: 'red' , color :"white " }} onClick={() => {
          localStorage.removeItem('token');
          setIsLoged(false);
          navigate('/');
        }}>Déconnexion</button> : <button onClick={() => {
          navigate('/inscription')
        }}>Connexion / Inscription</button>}
        <button onClick={() => {
          navigate('/reservation')
        }} className="nav-reserve">Réservez</button>
      </nav>
    </header>
  );
}

export default Navbar;