import express from 'express';
import { createOptionController, getAllOptionsController, getOptionByIdController, updateOptionController, deleteOptionController } from '../controllers/OptionController.js';

const router = express.Router();

router.post('/nouveau', createOptionController);
router.get('/liste', getAllOptionsController);
router.get('/:id', getOptionByIdController);
router.put('/modif/:id', updateOptionController);
router.delete('/sup/:id', deleteOptionController);

export default router;