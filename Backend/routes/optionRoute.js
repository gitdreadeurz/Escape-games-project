import express from 'express';
import { createOptionController, deleteOptionController, listOptionController, optionByIdController, updateOptionController } from '../controllers/optionController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleWare from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, adminMiddleWare, createOptionController);
router.get('/', authMiddleware, listOptionController);
router.get('/:id', authMiddleware, optionByIdController);
router.put('/:id', authMiddleware, adminMiddleWare, updateOptionController);
router.delete('/:id', authMiddleware, adminMiddleWare, deleteOptionController);

export default router;