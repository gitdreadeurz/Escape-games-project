import { createPayment, allPayments, getPayment, editPayment, removePayment } from "../controllers/paiementController.js";

import express from "express";

const router = express.Router();

// Tous les paiements
router.get("/",allPayments);

// Paiement par id
router.get("/:paiement_id", getPayment);

// Ajouter nouveau paiement
router.post("/", createPayment);

// Update un paiement
router.put("/:paiement_id",editPayment);

// Supprimer un paiement
router.delete("/:paiement_id",removePayment);

export default router;