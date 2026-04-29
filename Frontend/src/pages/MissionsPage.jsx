import Navbar from '../components/Navbar';
import MissionCard from '../components/MissionCard';
import { missions } from '../data/missions';
import { getAllGames, deleteGame } from '../../service';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function MissionsPage() {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  

    
    const [games, setGames] = useState([]);
    const token = localStorage.getItem('token');
    const missionsSurSite = games.filter(
      game => game.localisation !== 'domicile'
    );
  
    const missionsADomicile = games.filter(
      game => game.localisation === 'domicile'
    );
    let decoded = null;
    if (token) {
        try {
            decoded = jwtDecode(token);
        } catch (error) {
            console.error('Token invalide:', error);
        }
    }

  const fetchGames = async () => {
    try {
      const response = await getAllGames();
      setGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

    const handleDelete = async (id) => {
        if (window.confirm('Supprimer cette mission ?')) {
            try {
                await deleteGame(id);
                setGames(games.filter(g => g.id !== id));
            } catch (error) {
                console.error(error);
            }
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
    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Nos Missions</h1>

                <section style={{ marginTop: '2rem' }}>
                    <h2>Les Missions sur site</h2>
                    <div className="missions-grid">
                        {missionsSurSite.map(game => (
                            <MissionCard
                                key={game.id}
                                game={game}
                                userRole={decoded?.role}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </section>

                <section style={{ marginTop: '3rem' }}>
                    <h2>Les Missions à domicile</h2>
                    <div className="missions-grid">
                        {missionsADomicile.map(game => (
                            <MissionCard
                                key={game.id}
                                game={game}
                                userRole={decoded?.role}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MissionsPage;