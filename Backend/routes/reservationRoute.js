import express from 'express';
import { createReservationController, deleteReservationController, listReservationController, reservationByIdController, updateReservationController } from '../controllers/reservationController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, createReservationController);
router.get('/', adminMiddleware, authMiddleware, listReservationController);
router.get('/:id', adminMiddleware, authMiddleware, reservationByIdController);
router.put('/:id', adminMiddleware, authMiddleware, updateReservationController);
router.delete('/:id', adminMiddleware, authMiddleware, deleteReservationController);

export default router;