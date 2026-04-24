import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.DB_JWT_SECRET;

export default function superAdminMiddleware(req, res, next) {

    const header = req.headers.authorization;
    if(!header) {
        return res.status(401).json({error: 'Token manquant'});
    }

    const [type, token] = header.split(' ');
    if (type !== 'Bearer' || !token) {
        return res.status(401).json({error: 'Format de token invalide'});
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        if (decoded.role !== 'superadmin') {
            return res.status(403).json({error: 'Accès refusé. Droits de super administrateur requis.'})
        }
        next();
    } catch (error) {
        return res.status(401).json({error: 'Token invalide ou expiré'});
    }
}