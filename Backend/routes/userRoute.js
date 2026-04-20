import { newUser, listUsers, userById, updUser, delUser } from "../controllers/userController.js";
import express from 'express';

const router = express.Router();

router.post('/', newUser);
router.get('/', listUsers);
router.get('/:id', userById);
router.put('/:id', updUser);
router.delete('/:id', delUser);

export default router;