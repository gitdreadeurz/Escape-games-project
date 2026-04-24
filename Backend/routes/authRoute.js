import { login } from "../controllers/authController.js";
import {newUser} from "../controllers/userController.js";
import { logout } from "../controllers/authController.js";
import express from 'express';

const router = express.Router();

router.post('/register', newUser);
router.post('/login', login);
router.post ('/logout', logout);


export default router;
