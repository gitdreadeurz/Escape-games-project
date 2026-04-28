import { Link } from 'react-router-dom';
import Button from './Button';

function MissionCard({ game }) {
    return (
        <div className="mission-card">
            <div className="mission-card-image">
                <div className="mission-image-placeholder">
                    <img src={game.photo} alt={game.titre} className="src" 
                    style={{width : "90%", height: "70%", objectFit: "contain"}}/>
                </div>
            </div>
            <div className="mission-card-content">
                <h3>{game.titre}</h3>
                <span>Difficulte : {"⭐".repeat(game.difficulte)}</span>
                <span className="mission-type">{game.type}</span>
                <p>{game.description}</p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Durée:</strong> {game.duree} min | 
                    <strong> Joueurs:</strong> {game.nb_joueurs}
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