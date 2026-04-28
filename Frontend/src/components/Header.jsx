import Header from "./components/Header";
import Hero from "./components/Hero";
import Missions from "./components/Missions";
import Footer from "./components/Footer";
import "./App.css";

function Header() {
  return ( 
    <header>
    <div className="logo">Escape Room</div>
    <nav>
      <a href="#">Missions</a>
      <a href="#">Concept</a>
      <a href="#">Missions</a>
      <a href="#">Avis</a>
      <a href="#">Contact</a>
      <a href="#" className="btn">Reserver</a>
    </nav>
</header>
  );
}

export default Header; 