import { createGame,listGames, getGame, editGame, removeGame} from "../controllers/escapeController.js";
import express from "express";
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleWare from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

// Tous les escapes games
router.get("/", listGames);

// Escape game par id
router.get("/:game_id", getGame);

// Ajouter un nouvel escape game
router.post("/", authMiddleware, adminMiddleWare, createGame);

// Update un escape game
router.put ("/:game_id", authMiddleware, adminMiddleWare, editGame);

// Supprimer un escape game
router.delete("/:game_id", authMiddleware, adminMiddleWare, removeGame);

export default router;