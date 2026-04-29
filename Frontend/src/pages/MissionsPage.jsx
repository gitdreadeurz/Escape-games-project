import Navbar from '../components/Navbar';
import MissionCard from '../components/MissionCard';
import { getAllGames } from '../../service';
import { useEffect, useState } from 'react';

function MissionsPage() {
  const [games, setGames] = useState([]);

  const missionsSurSite = games.filter(
    game => game.localisation !== 'domicile'
  );

  const missionsADomicile = games.filter(
    game => game.localisation === 'domicile'
  );

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

  return (
    <div className="page">
      <Navbar />

      <main className="missions-page">
        <div className="missions-header">
          <p className="missions-kicker">Escape Room</p>
          <h1>Nos Missions</h1>
          <p>
            Choisissez votre aventure : sur site ou directement à domicile.
          </p>
        </div>

        <section className="missions-section">
          <h2>Les Missions sur site</h2>
          <div className="missions-grid">
            {missionsSurSite.map(game => (
              <MissionCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        <section className="missions-section">
          <h2>Les Missions à domicile</h2>
          <div className="missions-grid">
            {missionsADomicile.map(game => (
              <MissionCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MissionsPage;