import express from 'express';
import { createLigneOptionController, deleteLigneOptionController, ligneOptionByIdController, listLigneOptionsController, updateLigneOptionController } from '../controllers/ligneOptionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, createLigneOptionController);
router.get('/', authMiddleware, adminMiddleware, listLigneOptionsController);
router.get('/:id', authMiddleware, adminMiddleware, ligneOptionByIdController);
router.put('/:id', authMiddleware, adminMiddleware, updateLigneOptionController);
router.delete('/:id', authMiddleware, adminMiddleware, deleteLigneOptionController);

export default router;