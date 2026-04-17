import { newUser, listUsers, userById, updateUser, deleteUser } from "../controllers/userController";
import express from 'express';

const router = express.Router();

router.post('/', newUser);
router.get('/', listUsers);
router.get('/:id', userById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;