import express from 'express';
import { createReservationController, deleteReservationController, listReservationController, reservationByIdController, updateReservationController } from '../controllers/reservationController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleWare from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.post('/', authMiddleware, createReservationController);
router.get('/', authMiddleware, adminMiddleWare, listReservationController);
router.get('/:id', authMiddleware, adminMiddleWare, reservationByIdController);
router.put('/:id', authMiddleware, adminMiddleWare, updateReservationController);
router.delete('/:id', authMiddleware, deleteReservationController);

export default router;