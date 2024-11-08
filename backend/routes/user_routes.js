import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  login,
  logout,
} from '../controllers/userController/index.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', login);
router.post('/logout', logout);
router.put('/update/:userID', updateUser);
router.delete('/delete/:userID', deleteUser);

export default router;
