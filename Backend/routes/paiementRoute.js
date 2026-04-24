import { createPayment, allPayments, getPayment, editPayment, removePayment } from "../controllers/paiementController.js";
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

import express from "express";

const router = express.Router();

// Tous les paiements
router.get("/", adminMiddleware, authMiddleware, allPayments);

// Paiement par id
router.get("/:paiement_id", adminMiddleware, authMiddleware, getPayment);

// Ajouter nouveau paiement
router.post("/", authMiddleware, createPayment);

// Update un paiement
router.put("/:paiement_id", adminMiddleware, authMiddleware, editPayment);

// Supprimer un paiement
router.delete("/:paiement_id", superAdminMiddleware, authMiddleware, removePayment);

export default router;