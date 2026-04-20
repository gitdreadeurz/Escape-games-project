import { createOptionModel, deleteOptionModel, listOptionModel, optionByIdModel, updateOptionModel } from "../models/optionModel.js";

//CREATE
export async function createOptionController(req, res) {
    try {
        const libelle = req.body.libelle;
        const prix = req.body.prix;
        const result = await createOptionModel(libelle, prix)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'option' });
    }
}
//READ
export async function listOptionController(req, res) {
    try {
        const listOption = await listOptionModel()
        res.status(200).json(listOption)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des options' });
    }
}
export async function optionByIdController(req, res) {
    try {
        const id = req.params.id;
        const optionById = await optionByIdModel(id)
        res.status(200).json(optionById)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'option' });
    }
}
//UPDATE
export async function updateOptionController(req, res) {
    try {
        const id = req.params.id;
        const libelle = req.body.libelle;
        const prix = req.body.prix;
        const result = await updateOptionModel(libelle, prix, id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'option' });
    }
}
//DELETE
export async function deleteOptionController(req, res) {
    try {
        const id = req.params.id;
        const result = await deleteOptionModel(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'option' });
    }
}