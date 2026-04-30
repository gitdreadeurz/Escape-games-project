import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Pagination from '@mui/material/Pagination';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllAvis, getAllGames, addAvis } from '../../service';
import { jwtDecode } from 'jwt-decode';

function AvisPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');


    // Décoder le token s'il existe
    let decoded = null;
    if (token) {
        try {
            decoded = jwtDecode(token);
            console.log(decoded.role);
            
        } catch (error) {
            console.error('Token invalide:', error);
            localStorage.removeItem('token');
        }
    }

  const [avis, setAvis] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const offset = (page - 1) * pageSize;

  const [escape_game, setEscape_game] = useState([]);
  const [isLoged, setIsLoged] = useState(!!token && decoded !== null);
  const [newReview, setNewReview] = useState({
    user_id: decoded?.user_id || '',
    game_id: '',
    notation: 5,
    commentaire: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    
}, [])


  useEffect(() => {
    setIsLoged(!!localStorage.getItem('token'));
  }, []);

const fetchAvis = async () => {

        try {
            const response = await getAllAvis(page);
            console.log(response);
            setAvis(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChangePage = (_event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  const fetchGames = async () => {
    try {
      const response = await getAllGames();
      setEscape_game(response.data);
    } catch (error) {
      console.error(error);
    }
  };

useEffect(() => {
    fetchAvis();
    fetchGames();

}, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newReview.game_id || !newReview.commentaire) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    addAvis(newReview)
      .then(() => {
        alert('Avis envoyé !');
        setNewReview({
          user_id: decoded?.user_id || '',
          game_id: '',
          notation: 5,
          commentaire: ''
        });
        fetchAvis();
      })
      .catch(error => {
        console.error("Erreur lors de l'envoi de l'avis:", error);
        alert("Erreur lors de l'envoi de l'avis.");
      });
  };

  return (
    <div className="page">
      <Navbar />

      <main className="avis-container">
        <section className="avis-hero">
          <p className="avis-kicker">Avis clients</p>
          <h1>Avis de nos Clients</h1>
          <p>Découvrez les retours de nos joueurs après leur aventure.</p>
        </section>

        <section className="avis-list">
          {avis.slice(offset, offset + pageSize).map(avisItem => (
            <div key={avisItem.id} className="avis-card">
              <div className="avis-header">
                <div>
                  <span className="avis-user">{avisItem.User}</span>
                  <p className="avis-game">{avisItem.Game}</p>
                </div>

                <span className="avis-stars">
                  {'⭐'.repeat(avisItem.notation)}
                </span>
              </div>

              <p className="avis-comment">{avisItem.commentaire}</p>
            </div>
          ))}
        </section>

        <Pagination
          count={offset + pageSize >= avis.length ? page : page + 1}
          page={page}
          onChange={handleChangePage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '28px 0 50px',
            '& .MuiButtonBase-root': {
              color: '#f5a623'
            },
            '& .Mui-selected': {
              backgroundColor: '#f5a623 !important',
              boxShadow: '0 4px 12px rgba(245, 166, 35, 0.35)',
              color: '#000000 !important'
            }
          }}
        />

        {isLoged ? (
          <section className="avis-form-section">
            <h2>Laisser un avis</h2>

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  placeholder={decoded ? `${decoded.prenom} ${decoded.nom}` : ''}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="Escape-Game">Nom de la mission</label>
                <select
                  id="Escape-Game"
                  value={newReview.game_id}
                  required
                  onChange={(e) =>
                    setNewReview({ ...newReview, game_id: e.target.value })
                  }
                >
                  <option value="">Sélectionner une mission</option>
                  {escape_game.map(game => (
                    <option key={game.game_id} value={game.game_id}>
                      {game.titre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="note">Note</label>
                <select
                  id="note"
                  value={newReview.notation}
                  required
                  onChange={(e) =>
                    setNewReview({
                      ...newReview,
                      notation: parseInt(e.target.value)
                    })
                  }
                >
                  <option value="5">5 étoiles</option>
                  <option value="4">4 étoiles</option>
                  <option value="3">3 étoiles</option>
                  <option value="2">2 étoiles</option>
                  <option value="1">1 étoile</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="comment">Commentaire</label>
                <textarea
                  id="comment"
                  rows="4"
                  value={newReview.commentaire}
                  required
                  style={{ resize: 'none' }}
                  onChange={(e) =>
                    setNewReview({ ...newReview, commentaire: e.target.value })
                  }
                ></textarea>
              </div>

              <Button text="Envoyer" variant="primary" type="submit" />
            </form>
          </section>
        ) : (
          <button
            className="avis-login-button"
            onClick={() => navigate('/inscription')}
          >
            Pour laisser un avis, veuillez vous connecter en cliquant ici
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default AvisPage;