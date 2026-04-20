import express from 'express';
import { createOptionController, deleteOptionController, listOptionController, optionByIdController, updateOptionController } from '../controllers/optionController.js';

const router = express.Router();

router.post('/', createOptionController);
router.get('/', listOptionController);
router.get('/:id', optionByIdController);
router.put('/:id', updateOptionController);
router.delete('/:id', deleteOptionController);

export default router;