import { createReservationModel, deleteReservationModel, listReservationModel, reservationByIdModel, updateReservationModel } from "../models/reservationModel.js";

//CREATE
export async function createReservationController(req, res) {
    try {
        const date = req.body.date_reservation;
        const creneau = req.body.creneau;
        const statut = req.body.statut;
        const userId = req.body.user_id;
        const escapeGameId = req.body.game_id;
        const result = await createReservationModel(date, creneau, statut, userId, escapeGameId);
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
    }
}
//READ
export async function listReservationController(req, res) {
    try {
        const list = await listReservationModel();
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des réservations' });
    }
}
export async function reservationByIdController(req, res) {
    try {
        const id = req.params.id;
        const reservation = await reservationByIdModel(id);
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la réservation' });
    }
}
//UPDATE
export async function updateReservationController(req, res) {
    try {
        const id = req.params.id;
        const date = req.body.date_reservation;
        const creneau = req.body.creneau;
        const statut = req.body.statut;
        const userId = req.body.user_id;
        const escapeGameId = req.body.game_id;
        const result = await updateReservationModel(date, creneau, statut, userId, escapeGameId, id);
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de la réservation' });
    }
}
//DELETE
export async function deleteReservationController(req, res) {
    try {   
        const id = req.params.id;
        const result = await deleteReservationModel(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
    }   
}


