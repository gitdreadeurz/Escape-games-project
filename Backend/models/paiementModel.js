import { connection } from "../config/db.js";


// CREATE

export async function newPayment(montant, mode_paiement, promo, statut, reservation_id) {
    const add = "INSERT INTO Paiement (montant, mode_paiement, promo, statut, reservation_id) VALUES (?,?,?,?,?);";

    const [result] = await connection.query(add, [montant, mode_paiement, promo, statut, reservation_id]);

    return result;
}

// READ

// Tous les paiements
export async function getPayments() {
    const select = "SELECT montant, mode_paiement, promo, Paiement.statut, Paiement.reservation_id FROM Paiement INNER JOIN Reservation ON Paiement.reservation_id = Reservation.reservation_id;";

    const [result] = await connection.query(select);
    return result;
}

// Paiement par id
export async function getPaymentById(paiement_id) {
    const select = "SELECT montant, mode_paiement, promo, Paiement.statut, Paiement.reservation_id FROM Paiement INNER JOIN Reservation ON Paiement.reservation_id = Reservation.reservation_id WHERE Paiement.paiement_id = ?;";


    const [result] = await connection.query(select, [paiement_id]);
    return result;

}

// UPDATE
export async function updatePayment(montant, mode_paiement, promo, statut, reservation_id, paiement_id) {

    const update = "UPDATE Paiement SET montant=?, mode_paiement=?, promo=?, statut=?, reservation_id=? WHERE paiement_id=?;"
    const [result] = await connection.query(update, [montant, mode_paiement, promo, statut, reservation_id, paiement_id])
    return result;

}

// DELETE
export async function deletePayment(paiement_id) {
    const del = "DELETE FROM Paiement WHERE paiement_id=?;";
    const [result] = await connection.query(del, [paiement_id]);
    return result;
    
}

