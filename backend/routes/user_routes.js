import express from 'express';
import { createUser, updateUser, login, logout } from '../controllers/userController/index.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', login);
router.post('/logout', logout);
router.put('/update/:userID', updateUser);

export default router;
