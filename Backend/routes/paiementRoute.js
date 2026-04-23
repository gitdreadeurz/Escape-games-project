import { createPayment, allPayments, getPayment, editPayment, removePayment } from "../controllers/paiementController.js";
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleWare from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

import express from "express";

const router = express.Router();

// Tous les paiements
router.get("/", authMiddleware, adminMiddleWare, allPayments);

// Paiement par id
router.get("/:paiement_id", authMiddleware, adminMiddleWare, getPayment);

// Ajouter nouveau paiement
router.post("/", authMiddleware, createPayment);

// Update un paiement
router.put("/:paiement_id", authMiddleware, adminMiddleWare, editPayment);

// Supprimer un paiement
router.delete("/:paiement_id", superAdminMiddleware, removePayment);

export default router;