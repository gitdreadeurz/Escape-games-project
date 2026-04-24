import { addUser, getAllUsers, getUserById, updateUser, deleteUser, getUserByEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.DB_JWT_SECRET;


export async function newUser(req, res) {


    try {
        const { nom, prenom, telephone, mail, mot_de_passe, date_anniv } = req.body;

        const exists = await getUserByEmail(mail);
        if (exists.length > 0) {
            return res.status(409).json({ error: "email deja utilisé" })
        } if (!mail.includes("@")) {
            return res.status(400).json({ error: "email invalide" })
        } if (mot_de_passe.length < 6) {
            return res.status(422).json({ error: "Le mot de passe doit faire au minimum 6 caractères" })

        }

        const password_hash = bcrypt.hashSync(mot_de_passe, 10);

        const user = await addUser(nom, prenom, telephone, mail, password_hash, date_anniv);

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

export async function updUser(req, res) {
    try {
        const { id } = req.params;
        const { nom, prenom, role, telephone, mail, mot_de_passe, date_inscription, date_anniv } = req.body;
        const user = await updateUser(id, nom, prenom, role, telephone, mail, mot_de_passe, date_inscription, date_anniv);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
}

export async function delUser(req, res) {
    try {
        const { id } = req.params;
        const estSupprime = req.body.estSupprime;

        const user = await deleteUser(id, estSupprime);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    }
}

