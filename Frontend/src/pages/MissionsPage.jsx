import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MissionCard from '../components/MissionCard';
import { missions } from '../data/missions';
import { getAllGames } from '../../service';
import { useEffect, useState } from 'react';

function MissionsPage() {
    const missionsSurSite = missions.filter(m => m.type === "sur site");
    const missionsADomicile = missions.filter(m => m.type === "à domicile");
    
    const [games, setGames] = useState([]);

    const fetchGames = async () => {
        try {
            const response = await getAllGames();
            console.log(response);
            setGames(response.data)
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
            <div className="page-content">
                <h1>Nos missions</h1>
                <div className="missions-grid">
                  {games.map((game) => (
                    <MissionCard key={game.id} game={game} />
                  ))}
                </div>
                {/* <h1>Nos Missions</h1>
                
                <section style={{ marginTop: '2rem' }}>
                    <h2>Les Missions sur site</h2>
                    <div className="missions-grid">
                        {missionsSurSite.map(mission => (
                            <MissionCard key={mission.id} mission={mission} />
                        ))}
                    </div>
                </section>
                
                <section style={{ marginTop: '3rem' }}>
                    <h2>Les Missions à domicile</h2>
                    <div className="missions-grid">
                        {missionsADomicile.map(mission => (
                            <MissionCard key={mission.id} mission={mission} />
                        ))}
                    </div>
                </section> */}
            </div>
        </div>
    );
}

export default MissionsPage;