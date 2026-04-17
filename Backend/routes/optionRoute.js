import express from 'express';
import { createOptionController, getAllOptionsController, getOptionByIdController, updateOptionController, deleteOptionController } from '../controllers/optionController.js';

const router = express.Router();

router.post('/new', createOptionController);
router.get('/list', getAllOptionsController);
router.get('/:id', getOptionByIdController);
router.put('/update/:id', updateOptionController);
router.delete('/delete/:id', deleteOptionController);

export default router;