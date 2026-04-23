import express from 'express';
import { createReservationController, deleteReservationController, listReservationController, reservationByIdController, updateReservationController } from '../controllers/reservationController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, createReservationController);
router.get('/', authMiddleware, adminMiddleware, listReservationController);
router.get('/:id', authMiddleware, adminMiddleware, reservationByIdController);
router.put('/:id', authMiddleware, adminMiddleware, updateReservationController);
router.delete('/:id', authMiddleware, superAdminMiddleware, deleteReservationController);

export default router;