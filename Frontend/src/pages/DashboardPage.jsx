import Navbar from "../components/Navbar";
import { getAllReservations, getAllUsers,getAllPayments } from "../../service";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import '../styles/Dashboard.css';

function DashboardPage() {
    const [reservations, setReservations] = useState([]);
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');
    const [paiements, setPaiements] = useState([]);

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

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des utilisateurs :", error);
        }
    };
    const fetchPaiements = async () => {
        try {
            const response = await getAllPayments();
            console.log(response.data);
            setPaiements(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des paiements :", error);
        }
    };

    useEffect(() => {
        fetchReservations();
        fetchUsers();
        fetchPaiements();
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
                                    <p>Jeu : {reservation.titre}</p>
                                    <p>Date de réservation : {reservation.date_reservation}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucune réservation trouvée.</p>
                    )}
                </div>

                <div className="users-list">
                    <h2>Liste des utilisateurs</h2>
                    {users.length > 0 ? (
                        <ul>
                            {users.map(users => (
                                <li key={users.user_id}>
                                    <p>{users.prenom + ' ' + users.nom}</p>
                                    <p>Rôle : {users.role}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucun utilisateur trouvé.</p>
                    )}
                </div>

                <div className="paiements-list">
                    <h2>Liste des paiements</h2>
                    {paiements.length > 0 ? (
                        <ul>
                            {paiements.map(paiement => (
                                <li key={paiement.id}>
                                    <h4>titre : {paiement.titre}</h4>
                                    <h5>Utilisateur : {paiement.prenom} {paiement.nom}</h5>
                                    <p>Montant : {paiement.montant}€</p>
                                    <p>Mode de paiement : {paiement.mode_paiement}</p>
                                    <p>Statut : {paiement.statut}</p>
                                    <p>promo : {paiement.promo}€</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucun paiement trouvé.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;