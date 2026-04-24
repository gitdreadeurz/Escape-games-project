import { listUsers, userById, updUser, softDelUser, hardDelUser } from "../controllers/userController.js";
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import superAdminMiddleware from "../middlewares/superAdminMiddleware.js";

const router = express.Router();

router.get('/', adminMiddleware, authMiddleware, listUsers);
router.get('/:id', adminMiddleware, authMiddleware, userById);
router.put('/:id', superAdminMiddleware, authMiddleware, updUser);
router.delete('/:id', superAdminMiddleware, authMiddleware, softDelUser);
router.delete('/delete/:id', superAdminMiddleware, authMiddleware, hardDelUser);

export default router;