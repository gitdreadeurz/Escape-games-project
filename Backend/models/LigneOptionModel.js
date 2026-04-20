import { connection } from "../config/db.js";

//CREATE
export async function addLigneOption(game_id, option_id) {
    const add = "INSERT INTO LigneOption (game_id, option_id) VALUES (?,?);";
    const [result] = await connection.query(add, [game_id, option_id]);
    return result;
}

//READ
export async function listLigneOptionsModel() {
    const list = "SELECT * FROM LigneOption l JOIN options o ON l.option_id = o.option_id JOIN escape_game eg ON l.game_id = eg.game_id;";
    const [result] = await connection.query(list);
    return result;
}
export async function ligneOptionByIdModel(id) {
    const ligneOptionById = "SELECT * FROM LigneOption l JOIN options o ON l.option_id = o.option_id JOIN escape_game eg ON l.game_id = eg.game_id WHERE ligne_id = ?;";
    const [result] = await connection.query(ligneOptionById, [id]);
    return result;
}

//UPDATE
export async function updateLigneOptionModel(game_id, option_id, id) {
    const update = "UPDATE LigneOption SET game_id = ?, option_id = ? WHERE ligne_id = ?;";
    const [result] = await connection.query(update, [game_id, option_id, id]);
    return result;
}

//DELETE
export async function deleteLigneOptionModel(id) {
    const deleteQuery = "DELETE FROM LigneOption WHERE ligne_id = ?;";
    const [result] = await connection.query(deleteQuery, [id]);
    return result;
}
