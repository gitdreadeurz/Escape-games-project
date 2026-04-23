import { addGame, getAllGames, getGameById, updateGame, deleteGame } from "../models/escapeModel.js";

// CREATE

export async function createGame(req, res) {
    try {
        const { titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo } = req.body;
        const result = await addGame(titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }
}

// READ

// Tous les escape games
export async function listGames(req, res) {
    try {
        const games = await getAllGames();
        res.status(200).json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }
}

// Escape game par id
export async function getGame(req, res) {
    try {
        const id = req.params.game_id;
        const game = await getGameById(id);
        if (!game) {
            return res.status(404).json({ error: "Game not found" });
        }
        res.status(200).json(game);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" });
    }
}

// UPDATE

export async function editGame(req, res) {
    try {
        const id = req.params.game_id;

        const { titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo } = req.body;
        const result = await updateGame(id, titre, duree, difficulte, nb_joueurs, prix, localisation, theme, disponible, photo);
        if (!result) {
            return res.status(404).json({ error: "Game not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" });
    }
}

// DELETE

export async function removeGame(req, res) {
    try {
        const id = req.params.game_id;
        const estSupprime = req.body.estSupprime;

        const result = await deleteGame(id, estSupprime);
        if (!result) {
            return res.status(404).json({ error: "Game not found" });
        }
        res.status(200).json({ message: "Game deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" });
    }
}


