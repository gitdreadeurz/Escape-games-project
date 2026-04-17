import { connection } from "../config/db.js";

export async function addUser(nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv) {
    const add = "INSERT INTO User (nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const result = await connection.query(add, [nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv]);
    return result;
}

export async function getAllUsers() {
    const select = "SELECT * FROM User";
    const result = await connection.query(select);
    return result;
}

export async function getUserById(id) {
    const select = "SELECT * FROM User WHERE id = ?";
    const result = await connection.query(select, [id]);
    return result;
}

export async function updateUser(id, nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv) {
    const update = "UPDATE User SET nom = ?, prenom = ?, role = ?, telephone = ?, mot_de_passe = ?, date_inscription = ?, date_anniv = ? WHERE id = ?";
    const result = await connection.query(update, [nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv, id]);
    return result;
}

export async function deleteUser(id) {
    const deleteQuery = "DELETE FROM User WHERE id = ?";
    const result = await connection.query(deleteQuery, [id]);
    return result;
}