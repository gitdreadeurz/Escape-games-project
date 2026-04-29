import { getUserByEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.DB_JWT_SECRET;

export async function login(req, res) {
    try {
        const mail = req.body.mail;
        const password = req.body.password || req.body.password_hash;

        if (!mail || !password) {
            return res.status(400).json({ error: "Email et mot de passe requis" });
        }

        const utilisateur = await getUserByEmail(mail);
        if (utilisateur.length === 0) {
            return res.status(401).json({ error: "email ou mot de passe incorrect" });
        }

        const isPasswordValid = bcrypt.compareSync(password, utilisateur[0].mot_de_passe);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "email ou mot de passe incorrect" })
        }

        const token = jwt.sign(
            { mail: utilisateur[0].mail, role: utilisateur[0].role, user_id: utilisateur[0].user_id, nom: utilisateur[0].nom, prenom: utilisateur[0].prenom },
            JWT_SECRET,
            { expiresIn: '1h' }

        );
        console.log(token);

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000
        });


        res.status(200).json({ message: "Connexion réussie", token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "erreur serveur" })
    }
}


export function logout(req, res) {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        res.status(200).json({ message: 'Déconnexion réussie' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la deconnexion" });

    }

};