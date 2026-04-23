import express from 'express';
import { createLigneOptionController, deleteLigneOptionController, ligneOptionByIdController, listLigneOptionsController, updateLigneOptionController } from '../controllers/ligneOptionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleWare from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, adminMiddleWare, createLigneOptionController);
router.get('/', authMiddleware, adminMiddleWare, listLigneOptionsController);
router.get('/:id', authMiddleware, adminMiddleWare, ligneOptionByIdController);
router.put('/:id', authMiddleware, adminMiddleWare, updateLigneOptionController);
router.delete('/:id', authMiddleware, adminMiddleWare, deleteLigneOptionController);

export default router;