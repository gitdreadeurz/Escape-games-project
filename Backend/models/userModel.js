import { connection } from "../config/db.js";

export async function addUser(nom, prenom, telephone, mail, mot_de_passe, date_anniv) {
    const add = "INSERT INTO Utilisateur (nom, prenom, telephone, mail, mot_de_passe, date_anniv) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await connection.query(add, [nom, prenom, telephone, mail, mot_de_passe, date_anniv]);
    return result;
}

export async function getAllUsers() {
    const select = "SELECT * FROM Utilisateur";
    const [result] = await connection.query(select);
    return result;
}

export async function getUserById(user_id) {
    const select = "SELECT * FROM Utilisateur WHERE user_id = ?;";
    const [result] = await connection.query(select, [user_id]);
    return result;
}

export async function getUserByEmail(mail) {
    const select = "SELECT * FROM Utilisateur WHERE mail = ?";
    const [result] = await connection.query(select, [mail]);
    return result;
}

export async function updateUser(user_id, nom, prenom, role, telephone, mail, mot_de_passe, date_inscription, date_anniv) {
    const update = "UPDATE Utilisateur SET nom = ?, prenom = ?, role = ?, telephone = ?, mail = ?, mot_de_passe = ?, date_inscription = ?, date_anniv = ? WHERE user_id = ?";
    const [result] = await connection.query(update, [nom, prenom, role, telephone, mail, mot_de_passe, date_inscription, date_anniv, user_id]);
    return result;
}

export async function deleteUser(user_id) {
    const deleteQuery = "DELETE FROM Utilisateur WHERE user_id = ?";
    const [result] = await connection.query(deleteQuery, [user_id]);
    return result;
}