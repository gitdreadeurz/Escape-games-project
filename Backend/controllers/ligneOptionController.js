import { createLigneOptionModel, deleteLigneOptionModel, ligneOptionByIdModel, listLigneOptionsModel, updateLigneOptionModel, } from '../models/ligneOptionModel.js';

//CREATE
export async function createLigneOptionController(req, res) {
    try {
        const gameId = req.body.gameId;
        const optionId = req.body.optionId;
        const result = await createLigneOptionModel(gameId, optionId)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la ligne option' });
    }
}

//READ
export async function listLigneOptionsController(req, res) {
    try {
        const list = await listLigneOptionsModel()
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des lignes options' });
    }
}
export async function ligneOptionByIdController(req, res) {
    try {
        const id = req.params.id;
        const ligneOption = await ligneOptionByIdModel(id)
        res.status(200).json(ligneOption)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la ligne option' });
    }
}

//UPDATE 
export async function updateLigneOptionController(req, res) {
    try {
        const id = req.params.id;
        const gameId = req.body.game_id;
        const optionId = req.body.option_id;
        const result = await updateLigneOptionModel(gameId, optionId, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de la ligne option' });
    }
}

//DELETE
export async function deleteLigneOptionController(req, res) {
    try {
        const id = req.params.id;
        const result = await deleteLigneOptionModel(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de la ligne option' });
    }