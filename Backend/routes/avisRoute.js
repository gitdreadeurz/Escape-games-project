import { newAvis, listAvis, avisById, updAvis, delAvis } from "../controllers/avisController.js";
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, newAvis);
router.get('/', listAvis);
router.get('/:id', adminMiddleware, authMiddleware, avisById);
router.put('/:id', adminMiddleware, authMiddleware, updAvis);
router.delete('/:id', adminMiddleware, authMiddleware, delAvis);

export default router;