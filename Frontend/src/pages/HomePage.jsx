import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import MissionCard from '../components/MissionCard';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.webp';
import { getAllGames } from '../../service';
import { useEffect, useState } from 'react';

function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await getAllGames();
      setGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const missionsPreview = games.slice(0, 3);

  return (
    <div className="page">
      <Navbar />

      <main className="homepage">
        <section className="hero">
          <img src={heroImage} alt="Escape Room" className="hero-image" />

          <div className="hero-intro">
            <h1>Bienvenue</h1>

            <p>
              Prêt à relever le défi ? Que ce soit dans l&apos;immersion totale
              de nos salles thématiques ou directement dans votre salon, nous
              transformons votre réalité en une aventure inoubliable.
              Découvrez nos scénarios captivants et choisissez votre terrain de
              jeu : chez nous ou chez vous, l&apos;évasion n&apos;attend que
              vous !
            </p>
          </div>
        </section>

        <section className="missions-section">
          <div className="missions-grid">
            {missionsPreview.map((mission) => (
              <MissionCard key={mission.id} game={mission} />
            ))}
          </div>

          <div className="home-reservation">
            <Link to="/missions">
              <Button text="Voir toutes les missions" variant="primary" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;