import { Link } from 'react-router-dom';
import Button from './Button';

function MissionCard({ mission }) {
    return (
        <div className="mission-card">
            <div className="mission-card-image">
                {/* Image placeholder - à remplacer par les vraies images */}
                <div className="mission-image-placeholder">{mission.title[0]}</div>
            </div>
            <div className="mission-card-content">
                <h3>{mission.title}</h3>
                <span className="difficulty">{mission.difficulty}</span>
                <span className="mission-type">{mission.type}</span>
                <p>{mission.description}</p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Durée:</strong> {mission.duration} min | 
                    <strong> Joueurs:</strong> {mission.minPlayers}-{mission.maxPlayers}
                </p>
                <div style={{ marginTop: '1rem' }}>
                    <Link to="/reservation">
                        <Button text="Réserver" variant="secondary" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MissionCard;