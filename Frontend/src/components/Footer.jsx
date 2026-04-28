import logo from "../assets/logo.webp";
import facebook from "../assets/facebook.webp";
import instagram from "../assets/instagram.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-address">
        <strong>Où nous retrouver :</strong>
        <p>2 rue de l’aventure</p>
        <p>59000 Lille</p>
      </div>

      <img src={logo} alt="Escape Room" className="footer-logo" />

      <div className="footer-socials">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;