import { connection } from "../config/db.js";

export async function addAvis(notation, commentaire, photo, user_id, game_id) {
    const add = `INSERT INTO Avis (notation, commentaire, photo, user_id, game_id) VALUE (?, ?, ?, ?, ?);`;
    const [result] = await connection.query(add, [notation, commentaire, photo, user_id, game_id]);
    return result;
}

export async function getAllAvis() {
    const select = `SELECT avis_id, notation, commentaire, a.photo, a.user_id, a.game_id FROM Avis a
                    INNER JOIN Utilisateur u ON a.user_id = u.user_id
                    INNER JOIN Escape_Game g ON a.game_id = g.game_id;`;
    const [result] = await connection.query(select);
    return result;
}

export async function getAvisById(avis_id) {
    const select = `SELECT avis_id, notation, commentaire, a.photo, a.user_id, a.game_id FROM Avis a
                    INNER JOIN Utilisateur u ON a.user_id = u.user_id
                    INNER JOIN Escape_Game g ON a.game_id = g.game_id
                    WHERE a.avis_id = ?;`;
    const [result] = await connection.query(select, [avis_id]);
    return result;
}

export async function updateAvis(avis_id, notation, commentaire, photo, user_id, game_id) {
    const update = `UPDATE Avis SET notation = ?, commentaire = ?, photo = ?, user_id = ?, game_id = ? WHERE avis_id = ?;`;
    const [result] = await connection.query(update, [notation, commentaire, photo, user_id, game_id, avis_id]);
    return result;
}

export async function deleteAvis(estSupprime, avis_id) {
    const del = `UPDATE Avis SET estSupprime = ? WHERE avis_id = ?;`;
    const [result] = await connection.query (del, [estSupprime, avis_id]);
    return result; 
}