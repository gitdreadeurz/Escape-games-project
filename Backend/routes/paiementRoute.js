import { createPayment, allPayments, getPayment, editPayment, removePayment } from "../controllers/paiementController";

import express from "express";

const router = express.Router();

// Tous les paiements
router.get("/all",allPayments);

// Paiement par id
router.get("/:paiement_id", getPayment);

// Ajouter nouveau paiement
router.post("/add", createPayment);

// Update un paiement
router.put("/edit/:paiement_id",editPayment);

// Supprimer un paiement
router.delete("/delete/:paiement_id",removePayment);

export default router;