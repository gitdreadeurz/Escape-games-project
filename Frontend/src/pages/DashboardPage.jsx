import Navbar from "../components/Navbar";
import { getAllReservations, getAllUsers, sofDelUser, deleteReservation } from "../../service";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function DashboardPage() {
    const [reservations, setReservations] = useState([]);
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

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

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Supprimer cet utilisateur ?')) {
            try {
                await sofDelUser(userId);
                console.log(`${userId} a été supprimé`);
                setUsers(users.filter(u => u.user_id !== userId));
            } catch (error) {
                console.error("Erreur lors de la suppression de l'utilisateur :", error);
            }
        }
    };

    const handleDeleteReservation = async (reservationId) => {
        if (window.confirm('Supprimer cette réservation ?')) {
            try {
                await deleteReservation(reservationId);
                console.log(`${reservationId} a été supprimé`);
                setReservations(reservations.filter(r => r.reservation_id !== reservationId));
            } catch (error) {
                console.error("Erreur lors de la suppression de la réservation :", error);
            }
        }
    };

    useEffect(() => {
        fetchReservations();
        fetchUsers();
    }, []);

    return (
        <div className="page">
            <Navbar />
            <main className="dashboard-page">
                <h1>Tableau de bord</h1>
                <p>Bienvenue sur votre espace personnel !</p>
                <div className="reservations-list">
                    <h2>Liste des réservations</h2>
                    {reservations.length > 0 ? (
                        <ul>
                            {reservations.filter(r => r.estSupprime !== 1).map(reservation => (
                                <li key={reservation.reservation_id}>
                                    <p><strong>Id :</strong> {reservation.reservation_id}</p>
                                    <p><strong>Utilisateur :</strong> {reservation.nom} {reservation.prenom} - <strong>Telephone :</strong> {reservation.telephone}</p>
                                    <p><strong>Jeu :</strong> {reservation.titre}</p>
                                    <p><strong>Localisation :</strong> {reservation.localisation}</p>
                                    <p><strong>Créneau :</strong> {formatDateTime(reservation.creneau)}</p>
                                    <p><strong>Date de réservation :</strong> {formatDateTime(reservation.date_reservation)}</p>
                                    <p><strong>Statut</strong> {reservation.statut}</p>
                                    <button onClick={() => handleDeleteReservation(reservation.reservation_id)} className="delete-button">Supprimer</button>
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
                            {users.filter(user => user.estSupprime !== 1).map(users => (
                                <li key={users.user_id}>
                                    <p>{users.prenom+' '+users.nom}</p>
                                    <p>Rôle : {users.role}</p>
                                    <button onClick={() => handleDeleteUser(users.user_id)} className="delete-button">Supprimer</button>
                                    <button className="edit-button">Passer Admin</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucun utilisateur trouvé.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;