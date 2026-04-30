import { createPayment, allPayments, getPayment, editPayment, removePayment } from "../controllers/paiementController.js";
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

import express from "express";

const router = express.Router();

// Tous les paiements
router.get("/", authMiddleware, adminMiddleware, allPayments);

// Paiement par id
router.get("/:paiement_id", authMiddleware, adminMiddleware, getPayment);

// Ajouter nouveau paiement
router.post("/", authMiddleware, createPayment);

// Update un paiement
router.put("/:paiement_id", authMiddleware, adminMiddleware, editPayment);

// Supprimer un paiement
router.delete("/:paiement_id", authMiddleware, superAdminMiddleware, removePayment);

export default router;