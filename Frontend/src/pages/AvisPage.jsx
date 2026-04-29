import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Pagination from "@mui/material/Pagination";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAllAvis } from '../../service';
import { getAllGames } from '../../service';
import { addAvis } from '../../service';
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
        user_id: decoded?.user_id || "",
        game_id: "",
        notation: 5,
        commentaire: ""
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoged(true);
        } else {
            setIsLoged(false);
        }
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
            console.log(response);
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

        // Vérifier que les données sont complètes
        if (!newReview.game_id || !newReview.commentaire) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        addAvis(newReview)
            .then(response => {
                console.log(response);
                alert('Avis envoyé !');
                // Réinitialiser le formulaire
                setNewReview({
                    user_id: decoded?.user_id || "",
                    game_id: "",
                    notation: 5,
                    commentaire: ""
                });
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi de l\'avis:', error);
                alert('Erreur lors de l\'envoi de l\'avis.');
            });
    };



    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Avis de nos Clients</h1>

                <div style={{ marginTop: '2rem' }}>
                    {avis.slice(offset, offset + pageSize).map(avis => (
                        <div key={avis.id} style={{
                            background: 'white',
                            color: 'black',
                            padding: '1.5rem',
                            marginBottom: '1rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>{avis.User}</strong>
                                <p style={{ marginTop: '0.3rem', color: 'black' }}>{avis.Game}</p>
                                <span>{"⭐".repeat(avis.notation)}</span>
                            </div>
                            <p style={{ marginTop: '0.5rem', color: 'black' }}>{avis.commentaire}</p>
                        </div>
                    ))}
                </div>
                <Pagination
                    count={offset + pageSize >= avis.length ? page : page + 1} // Affiche une page de plus si on n'est pas à la fin
                    page={page}
                    onChange={handleChangePage}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '20px 0',
                        '& .MuiButtonBase-root': {
                            color: '#f4a321'
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#f4a321 !important',
                            boxShadow: '0 4px 12px rgba(244, 163, 33, 0.3)',
                            color: '#000000 !important'
                        }
                    }}
                />
                {isLoged ? (
                    <>
                        <h2 style={{ marginTop: '3rem' }} >Laisser un avis</h2>
                        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '1rem' }}>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input style={{ backgroundColor: 'white' }} type="text" id="name" placeholder={decoded ? decoded.prenom + ' ' + decoded.nom : ''} disabled />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Escape-Game">Nom du jeu</label>
                                <select id="Escape-Game" value={newReview.game_id} required onChange={(e) => setNewReview({ ...newReview, game_id: e.target.value })}>
                                    <option value="">Sélectionner un jeu</option>
                                    {escape_game.map(game => (
                                        <option key={game.game_id} value={game.game_id}>
                                            {game.titre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="note">Note</label>
                                <select id="note" value={newReview.notation} required onChange={(e) => setNewReview({ ...newReview, notation: parseInt(e.target.value) })}>
                                    <option value="5">5 étoiles</option>
                                    <option value="4">4 étoiles</option>
                                    <option value="3">3 étoiles</option>
                                    <option value="2">2 étoiles</option>
                                    <option value="1">1 étoile</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">Commentaire</label>
                                <textarea id="comment" rows="4" value={newReview.commentaire} required onChange={(e) => setNewReview({ ...newReview, commentaire: e.target.value })}></textarea>
                            </div>

                            <Button text="Envoyer" variant="primary" type="submit" />
                        </form>

                    </>
                ) : (<button onClick={() => navigate("/inscription")}>Pour laisser un avis, veuillez vous connecter en cliquant ici</button>)}
            </div>
            <Footer />
        </div>
    );
}

export default AvisPage;