import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from "../models/userModel";

export async function newUser(req, res) {
    try {
        const {nom, prenom, email, mot_de_passe, date_inscription, date_anniv} = req.body;
        const user = await addUser(nom, prenom, email, mot_de_passe, date_inscription, date_anniv);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
}

export async function listUsers(req, res) {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
    }
}

export async function userById(req, res) {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
    }
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv } = req.body;
        const user = await updateUser(id, nom, prenom, role, telephone, mot_de_passe, date_inscription, date_anniv);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const user = await deleteUser(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    }
}