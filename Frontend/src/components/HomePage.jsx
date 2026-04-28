import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { missions } from '../data/missions';
import MissionCard from '../components/MissionCard';
import { Link } from 'react-router-dom';

import heroImage from "../assets/hero.webp";

function HomePage() {
  const missionsSurSite = missions.filter(m => m.type === "sur site").slice(0, 3);
  const missionsADomicile = missions.filter(m => m.type === "à domicile").slice(0, 3);

  return (
    <div className="page">
      <Navbar />

      <section className="hero-image">
  <img src={heroImage} alt="Escape game" />
</section>

      <section className="intro">
        <h1>Bienvenue</h1>
        <p>
          Prêt à relever le défi ? Que ce soit dans l'immersion totale de nos salles
          thématiques ou directement dans votre salon, nous transformons votre réalité
          en une aventure inoubliable. Découvrez nos scénarios captivants et choisissez
          votre terrain de jeu : chez nous ou chez vous, l'évasion n'attend que vous !
        </p>

        <Link to="/reservation">
          <Button text="Réserver" variant="primary" />
        </Link>
      </section>

      <section className="page-content">
        <h2>Les Missions sur site</h2>
        <div className="missions-grid">
          {missionsSurSite.map(mission => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>

        <h2>Les Missions à domicile</h2>
        <div className="missions-grid">
          {missionsADomicile.map(mission => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;