import express from 'express';
import { createOptionController, getAllOptionsController, getOptionByIdController, updateOptionController, deleteOptionController } from '../controllers/optionController.js';

const router = express.Router();

router.post('/', createOptionController);
router.get('/', getAllOptionsController);
router.get('/:id', getOptionByIdController);
router.put('/:id', updateOptionController);
router.delete('/:id', deleteOptionController);

export default router;