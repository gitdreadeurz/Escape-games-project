import Navbar from "../components/Navbar";
import { getAllReservations } from "../../service";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function DashboardPage() {
    const [reservations, setReservations] = useState([]);
    const token = localStorage.getItem('token');

    let decoded = null;
        if (token) {
            try {
                decoded = jwtDecode(token);
            } catch (error) {
                console.error('Token invalide:', error);
            }
        }

    const fetchReservations = async () => {
        try {
            const response = await getAllReservations();
                console.log(response.data);
                setReservations(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des réservations :", error);
            }
        };

    useEffect(() => {
        fetchReservations();
    }, []);

    return (
        <div className="page">
            <Navbar />
            <main className="dashboard-page">
                <h1>Tableau de bord</h1>
                <p>Bienvenue sur votre espace personnel !</p>
                <div className="reservations-list">
                    <h2>Vos réservations</h2>
                    {reservations.length > 0 ? (
                        <ul>
                            {reservations.map(reservation => (
                                <li key={reservation.id}>
                                    <p>{reservation.game.name}</p>
                                    <p>Date : {reservation.date}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucune réservation trouvée.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;