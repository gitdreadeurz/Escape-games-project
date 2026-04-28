import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MissionCard from '../components/MissionCard';
import { missions } from '../data/missions';

function MissionsPage() {
    const missionsSurSite = missions.filter(m => m.type === "sur site");
    const missionsADomicile = missions.filter(m => m.type === "à domicile");

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Nos Missions</h1>
                
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
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default MissionsPage;