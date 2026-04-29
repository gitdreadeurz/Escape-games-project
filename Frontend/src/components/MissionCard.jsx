import { Link } from 'react-router-dom';
import Button from './Button';

function MissionCard({ game }) {
  return (
    <article className="mission-card">
      <div className="mission-card-image">
        <img src={game.photo} alt={game.titre} />
        <div className="mission-card-overlay">
          <span>{game.localisation}</span>
        </div>
      </div>

      <div className="mission-card-content">
        <div className="mission-card-top">
          <p className="mission-type">{game.theme}</p>
          <p className="difficulty">{"⭐".repeat(game.difficulte)}</p>
        </div>

        <h3>{game.titre}</h3>

        <div className="mission-infos">
          <p><strong>Durée</strong><span>{game.duree} min</span></p>
          <p><strong>Joueurs</strong><span>{game.nb_joueurs}</span></p>
          <p><strong>Prix</strong><span>{game.prix} €</span></p>
        </div>

        <Link to="/reservation" className="mission-button-link">
          <Button text="Réserver" variant="secondary" />
        </Link>
      </div>
    </article>
  );
}

export default MissionCard;