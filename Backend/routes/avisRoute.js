import { newAvis, listAvis, avisById, updAvis, delAvis } from "../controllers/avisController.js";
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleWare from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, newAvis);
router.get('/', listAvis);
router.get('/:id', authMiddleware, adminMiddleWare, avisById);
router.put('/:id', authMiddleware, adminMiddleWare, updAvis);
router.delete('/:id', authMiddleware, adminMiddleWare, delAvis);

export default router;