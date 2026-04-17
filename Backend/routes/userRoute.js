import { newUser, listUsers, userById, updateUser, deleteUser } from "../controllers/userController";
import express from 'express';

const router = express.Router();

router.post('/user', newUser);
router.get('/users', listUsers);
router.get('/user/:id', userById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;