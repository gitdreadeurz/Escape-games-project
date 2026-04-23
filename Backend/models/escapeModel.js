import { connection } from "../config/db.js";


// CREATE

export async function addGame(titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo) {
    const add = "INSERT INTO Escape_Game (titre, duree, difficulte, nb_joueurs,prix, localisation, theme, disponible, photo) VALUES (?,?,?,?,?,?,?,?,?);";

    const [result] = await connection.query(add, [titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo]);

    return result;

}

// READ

// Tous les escape games
export async function getAllGames() {
    const select = "SELECT titre, duree, difficulte, nb_joueurs,prix, localisation, theme, disponible, photo FROM Escape_Game;";

    const [result] = await connection.query(select);

    return result;
}

// Escape game par id
export async function getGameById(game_id) {
    const select = "SELECT titre, duree, difficulte, nb_joueurs,prix, localisation, theme, disponible, photo FROM Escape_Game WHERE game_id = ?;";

    const [result] = await connection.query(select, [game_id]);

    return result;
}

// UPDATE

export async function updateGame(game_id, titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo) {
    const update = "UPDATE Escape_Game SET titre=?, duree=?, difficulte=?,nb_joueurs=?,prix=?,localisation=?,theme=?,disponible=?,photo=? WHERE game_id=?;";

    const [result] = await connection.query(update, [titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo, game_id]);

    return result;
}

// DELETE

export async function deleteGame(game_id, estSupprimee) {
    const del = "UPDATE Escape_Game SET estSupprime = ? WHERE game_id=?;";

    const [result] = await connection.query(del, [estSupprimee, game_id]);

    return result;
}