import { getUserByEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.DB_JWT_SECRET;

export async function login(req, res) {
    try {
        const mail = req.body.mail;
        const password_crypted = req.body.password_hash;

        const utilisateur = await getUserByEmail(mail);
        if(utilisateur.length === 0){
            return res.status(401).json({error: "email ou mot de passe incorrect"})
        }

        const isPasswordValid = bcrypt.compareSync(password_crypted, utilisateur[0].mot_de_passe);

        if(!isPasswordValid){
            return res.status(401).json({error: "email ou mot de passe incorrect"})
        }

        const token = jwt.sign(
      { mail: utilisateur[0].mail, role: utilisateur[0].role },
      JWT_SECRET,
      { expiresIn: '1h' }
      
    );
    console.log(token);

        res.json({token})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "erreur serveur"})
    }
}