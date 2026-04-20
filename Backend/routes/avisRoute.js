import { newAvis, listAvis, avisById, updAvis, delAvis } from "../controllers/avisController.js";
import express from 'express'

const router = express.Router();

router.post('/', newAvis);
router.get('/', listAvis);
router.get('/:id', avisById);
router.put('/:id', updAvis);
router.delete('/:id', delAvis);

export default router;