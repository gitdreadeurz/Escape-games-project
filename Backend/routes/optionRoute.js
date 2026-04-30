import express from 'express';
import { createOptionController, deleteOptionController, listOptionController, optionByIdController, updateOptionController } from '../controllers/optionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, createOptionController);
router.get('/', authMiddleware, listOptionController);
router.get('/:id', authMiddleware, optionByIdController);
router.put('/:id', authMiddleware, adminMiddleware, updateOptionController);
router.delete('/:id', authMiddleware, adminMiddleware, deleteOptionController);

export default router;