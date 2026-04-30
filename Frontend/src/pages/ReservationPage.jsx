import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { addReservation, getAllGames, getAllOptions } from '../../service';
import { useLocation } from 'react-router-dom';

function ReservationPage() {

    const [formData, setFormData] = useState({
        mission: "",
        localisation: "",
        date: "",
        time: "",
        players: "",
        option: "",
    });

    const [games, setGames] = useState([]);
    const [options, setOptions] = useState([]);
    const location = useLocation();
    const selectedGameId = location.state?.gameId;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedGameId && games.length > 0) {
            const selectedGame = games.find(
                g => String(g.game_id) === String(selectedGameId)
            );

            setFormData(prev => ({
                ...prev,
                mission: selectedGameId,
                localisation: selectedGame?.localisation || ""
            }));
        }
    }, [selectedGameId, games]);



    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await getAllGames();

                console.log("DATA:", data);

                const gamesArray = Array.isArray(data)
                    ? data
                    : data?.data || [];

                setGames(gamesArray);

            } catch (error) {
                console.error("Erreur chargement jeux :", error);
                setGames([]);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const data = await getAllOptions();

                console.log("OPTIONS:", data);

                const optionsArray = Array.isArray(data)
                    ? data
                    : data?.data || [];

                setOptions(optionsArray);

            } catch (error) {
                console.error("Erreur chargement options :", error);
                setOptions([]);
            }
        };

        fetchOptions();
    }, []);



    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData(prev => {
            const updated = {
                ...prev,
                [id]: value
            };

            

            if (id === "mission") {
                const selectedGame = games.find(
                    g => String(g.game_id) === String(value)
                );

                updated.localisation = selectedGame?.localisation || "";
            }

            return updated;
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            date_reservation: formData.date,
            creneau: formData.time,
            statut: "en attente",
            user_id: 1,
            game_id: formData.mission,
            localisation: formData.localisation,
            option_id: formData.option
        };

        try {
            await addReservation(dataToSend);
            alert("Réservation envoyée !");

            setFormData({
                mission: "",
                localisation: "",
                date: "",
                time: "",
                players: "",
                option: ""
            });

        } catch (error) {
            console.error(error);
            alert("Erreur lors de la réservation");
        }
    };
    return (
        <div className="page">
            <Navbar />

            <div className="page-content">
                <h1 style={{ color: "#F5A623", textAlign: "center" }}>
                    Réservation
                </h1>

                <form onSubmit={handleSubmit} style={{
                    maxWidth: '600px',
                    backgroundColor: '#2C2C3A',
                    padding: '2rem',
                    borderRadius: '8px',
                    margin: '2rem auto',
                    border: '2px solid #444'
                }}>


                    <div className="form-group">
                        <label>Mission</label>
                        <select
                            id="mission"
                            required
                            value={formData.mission}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une mission</option>

                            {Array.isArray(games) && games.length > 0 ? (
                                games.map(game => (
                                    <option key={game.game_id} value={game.game_id}>
                                        {game.titre}
                                    </option>
                                ))
                            ) : (
                                <option>Chargement...</option>
                            )}
                        </select>
                    </div>


                    <div className="form-group">
                        <label>Localisation</label>
                        <select
                            id="localisation"
                            value={formData.localisation}
                            onChange={handleChange}
                        >
                            <option value="">Localisation</option>

                            {[...new Set(games.map(g => g.localisation))].map(loc => (
                                <option key={loc} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            id="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label>Heure</label>
                        <input
                            type="time"
                            id="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label>Nombre de joueurs</label>
                        <input
                            type="number"
                            id="players"
                            min="2"
                            max="8"
                            required
                            value={formData.players}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label>Options</label>

                        <select
                            id="option"
                            value={formData.option}
                            onChange={handleChange}
                        >
                            <option value="">Choisir une option</option>

                            {Array.isArray(options) && options.length > 0 ? (
                                options.map(opt => (
                                    <option key={opt.id} value={opt.id}>
                                        {opt.libelle} (+{opt.prix}€)
                                    </option>
                                ))
                            ) : (
                                <option disabled>Chargement...</option>
                            )}
                        </select>
                    </div>

                    <Button text="Réserver" variant="primary" type="submit"/>

                </form>
            </div>

            <Footer />
        </div>
    );
}

export default ReservationPage;