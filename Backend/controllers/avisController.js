 import { addAvis, getAllAvis, getAvisById, updateAvis, deleteAvis } from "../models/avisModel.js";

 export async function newAvis(req, res) {
    try {
        const { notation, commentaire, photo, user_id, game_id } = req.body;
        const avis = await addAvis(notation, commentaire, photo, user_id, game_id);
        res.status(201).json(avis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'ajout de l'avis" });
    }
 }

 export async function listAvis(req, res) {
    try {
        const avis = await getAllAvis();
        res.status(200).json(avis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération des avis" });
    }
 }

 export async function avisById(req, res) {
    try {
        const { id } = req.params;
        const avis = await getAvisById(id);
        res.status(200).json(avis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération de l'avis" });
    }
 }

 export async function updAvis(req, res) {
    try {
        const { id } = req.params;
        const { notation, commentaire, photo, user_id, game_id } = req.body;
        const avis = await updateAvis(id, notation, commentaire, photo, user_id, game_id);
        res.status(200).json(avis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'avis" });
    }
 }

 export async function delAvis(req, res) {
    try {
        const { id } = req.params;
        const avis = await deleteAvis(id);
        res.status(200).json(avis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de l'avis" });
    }
 }