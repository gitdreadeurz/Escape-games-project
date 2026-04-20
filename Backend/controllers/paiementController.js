import { newPayment, getPayments, getPaymentById, updatePayment, deletePayment } from "../models/paiementModel";


// Nouveau paiement
export async function createPayment(req, res) {
    try {
        const montant = req.body.montant;
        const monde_paiement = req.body.monde_paiement;
        const promo = req.body.promo;
        const statut = req.body.statut;
        const reservation_id = req.body.reservation_id;

        const payment = await newPayment(montant, monde_paiement, promo, statut, reservation_id);
        res.json(payment)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }

}

// Tous les paiements
export async function allPayments(req, res) {
    try {
        const payment = getPayments();
        res.json(payment);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }

}

// Paiement par ID
export async function getPayment(req, res) {
    try {
        const paiement_id = req.params.paiement_id;
        const payment = await getPaymentById(paiement_id);
        res.json(payment);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }

}

// Update paiement
export async function editPayment(req, res) {
    try {
        const paiement_id = req.params.paiement_id;
        const montant = req.body.montant;
        const monde_paiement = req.body.monde_paiement;
        const promo = req.body.promo;
        const statut = req.body.statut;
        const reservation_id = req.body.reservation_id;

        const payment = await updatePayment(paiement_id, montant, monde_paiement, promo, statut, reservation_id);
        res.json(payment);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }

}

// Supprimer paiement

export async function removePayment(req, res) {
    try {
        const paiement_id = req.params.paiement_id;
        const payment = await deletePayment(paiement_id);
        res.json(payment);


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }

}