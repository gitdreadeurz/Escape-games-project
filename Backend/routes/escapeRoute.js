import { createGame,listGames, getGame, editGame, removeGame} from "../controllers/escapeController.js";
import express from "express";
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

// Tous les escapes games
router.get("/", listGames);

// Escape game par id
router.get("/:game_id", getGame);

// Ajouter un nouvel escape game
router.post("/", adminMiddleware, authMiddleware, createGame);

// Update un escape game
router.put ("/:game_id", adminMiddleware, authMiddleware, editGame);

// Supprimer un escape game
router.delete("/:game_id", adminMiddleware, authMiddleware, removeGame);

export default router;