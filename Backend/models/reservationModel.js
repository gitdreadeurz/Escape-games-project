import { Connection } from '../config/db.js';

//CREATE
export async function createReservationModel(date_reservation, creneau, statut, user_id, game_id) {
    const create = "INSERT INTO reservation (date_reservation, creneau, statut, user_id, game_id) VALUES (?, ?, ?, ?, ?)";
    const [result] = await Connection.query(create, [date_reservation, creneau, statut, user_id, game_id]);
    return result;
}

//READ
export async function listReservationModel() {
    const list = "SELECT * FROM reservation r JOIN user u ON r.user_id = u.user_id JOIN escape_game eg ON r.game_id = eg.game_id";
    const [result] = await Connection.query(list);
    return result;
}
export async function reservationByIdModel(reservation_id) {
    const reservationById = "SELECT * FROM reservation r JOIN user u ON r.user_id = u.user_id JOIN escape_game eg ON r.game_id = eg.game_id WHERE r.reservation_id = ?";
    const [result] = await Connection.query(reservationById, [reservation_id]);
    return result;
}
//UPDATE
export async function updateReservationModel(date_reservation, creneau, statut, user_id, game_id, reservation_id) {
    const update = "UPDATE reservation SET date_reservation = ?, creneau = ?, statut = ?, user_id = ?, game_id = ? WHERE reservation_id = ?";
    const [result] = await Connection.query(update, [date_reservation, creneau, statut, user_id, game_id, reservation_id]);
    return result;
}
//DELETE
export async function deleteReservationModel(reservation_id) {
    const del = "DELETE FROM reservation WHERE reservation_id = ?";
    const [result] = await Connection.query(del, [reservation_id]);
    return result;
}