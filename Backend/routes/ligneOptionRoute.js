import express from 'express';
import { createLigneOptionController, deleteLigneOptionController, ligneOptionByIdController, listLigneOptionsController, updateLigneOptionController } from '../controllers/ligneOptionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', adminMiddleware, authMiddleware, createLigneOptionController);
router.get('/', adminMiddleware, authMiddleware, listLigneOptionsController);
router.get('/:id', adminMiddleware, authMiddleware, ligneOptionByIdController);
router.put('/:id', adminMiddleware, authMiddleware, updateLigneOptionController);
router.delete('/:id', adminMiddleware, authMiddleware, deleteLigneOptionController);

export default router;