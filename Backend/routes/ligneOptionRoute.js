import express from 'express';
import { createLigneOptionController, deleteLigneOptionController, ligneOptionByIdController, listLigneOptionsController, updateLigneOptionController } from '../controllers/ligneOptionController.js';

const router = express.Router();

router.post('/', createLigneOptionController);
router.get('/', listLigneOptionsController);
router.get('/:id', ligneOptionByIdController);
router.put('/:id', updateLigneOptionController);
router.delete('/:id', deleteLigneOptionController);

export default router;