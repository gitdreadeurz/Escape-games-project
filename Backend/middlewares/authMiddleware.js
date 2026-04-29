import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.DB_JWT_SECRET;

export default function authMiddleware(req, res, next) {
    // Chercher le token dans l'Authorization header (Bearer token)
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') 
        ? authHeader.slice(7) 
        : req.cookies.jwt;

    if (!token) {
        return res.status(401).json({error: 'Token manquant'});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error: 'Token invalide ou expiré'})
    }
}