import { listUsers, userById, updUser, delUser } from "../controllers/userController.js";
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js'
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();


router.get('/', authMiddleware, adminMiddleware, listUsers);
router.get('/:id', authMiddleware, adminMiddleware, userById);
router.put('/:id', authMiddleware, superAdminMiddleware, updUser);
router.delete('/:id', authMiddleware, superAdminMiddleware, delUser);


export default router;