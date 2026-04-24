import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.DB_JWT_SECRET;

export default function adminMiddleware(req, res, next) {

     const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({error: 'Token manquant'});
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        if (decoded.role !== 'admin' || decoded.role !== 'superadmin') {
            return res.status(403).json({error: 'Accès refusé. Droits d\'administrateur requis.'})
        }
        next();
    } catch (error) {
        return res.status(401).json({error: 'Token expiré ou pas le droit'});
    }
}