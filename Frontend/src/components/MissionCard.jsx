import { Link } from 'react-router-dom';
import Button from './Button';

function MissionCard({ game }) {
    return (
        <div className="mission-card">
            <div className="mission-card-image">
                <img src={game.photo} alt={game.titre} className="src" />
            </div>
            <div className="mission-card-content">
                <h3>{game.titre}</h3>
                <p className="mission-type">{game.theme}</p>
                <p>Difficulte : {"⭐".repeat(game.difficulte)}</p>
                <p>
                    <strong>Durée:</strong> {game.duree} min |
                    <strong> Joueurs:</strong> {game.nb_joueurs} 
                </p>
                <p>
                    <strong> Prix:</strong> {game.prix} €
                </p>
                <p>
                    <strong> Localisation:</strong> {game.localisation}
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