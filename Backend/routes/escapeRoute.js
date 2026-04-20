import { createGame,listGames, getGame, editGame, removeGame} from "../controllers/escapeController.js";
import express from "express";

const router = express.Router();

// Tous les escapes games
router.get("/", listGames);

// Escape game par id
router.get("/:game_id", getGame);

// Ajouter un nouvel escape game
router.post("/", createGame);

// Update un escape game
router.put ("/:game_id", editGame);

// Supprimer un escape game
router.delete("/:game_id", removeGame);

export default router;