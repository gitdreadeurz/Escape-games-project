import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.DB_JWT_SECRET;

export default function adminMiddleware(req, res, next) {
    // L'authentification est déjà faite par authMiddleware
    if (!req.user) {
        return res.status(401).json({error: 'Non authentifié'});
    }
    
    if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
        return res.status(403).json({error: 'Accès refusé. Droits d\'administrateur requis.'});
    }
    next();
}