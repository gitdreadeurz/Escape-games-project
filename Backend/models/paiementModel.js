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
    const select = "SELECT paiement_id,montant, mode_paiement, promo, p.statut, p.reservation_id, p.estSupprime FROM paiement p INNER JOIN Reservation r ON p.reservation_id = r.reservation_id;";
    const [result] = await connection.query(select);
    return result;
}

// Paiement par id
export async function getPaymentById(paiement_id) {
    const select = "SELECT paiement_id,montant, mode_paiement, promo, Paiement.statut, Paiement.reservation_id, Paiement.estSupprime FROM Paiement INNER JOIN Reservation ON Paiement.reservation_id = Reservation.reservation_id WHERE Paiement.paiement_id = ?;";

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
export async function deletePayment(paiement_id, estSupprime) {
    const del = "UPDATE Paiement SET estSupprime=? WHERE paiement_id=?;"
    const [result] = await connection.query(del, [estSupprime, paiement_id]);
    return result;
}

