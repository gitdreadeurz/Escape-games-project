import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();


  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const role = decoded.role;
      console.log(role);

      if (role === 'client' || role === 'admin' || role === 'superadmin') {
        setIsLogged(true);
        setRole(role);
      }
      else {
        setIsLogged(false);
        setRole('');
      }
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

        {isLogged && (role === 'admin' || role === 'superadmin') ? <button onClick={() => {
          navigate('/dashboard')
        }}>DashBoard</button> : null}


        {isLogged ? <button style={{ backgroundColor: 'red', color: "white " }} onClick={() => {
          localStorage.removeItem('token');
          setIsLogged(false);
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