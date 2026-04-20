import { listUsers, userById, updUser, delUser } from "../controllers/userController.js";
import express from 'express';

const router = express.Router();


router.get('/', listUsers);
router.get('/:id', userById);
router.put('/:id', updUser);
router.delete('/:id', delUser);


export default router;