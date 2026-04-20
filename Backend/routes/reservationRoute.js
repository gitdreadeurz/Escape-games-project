import express from 'express';
import { createReservationController, listReservationController, reservationByIdController, updateReservationController, deleteReservationController } from '../controllers/reservationController.js';

const router = express.Router();

router.post('/', createReservationController);
router.get('/', listReservationController);
router.get('/:id', reservationByIdController);
router.put('/:id', updateReservationController);
router.delete('/:id', deleteReservationController);

export default router;