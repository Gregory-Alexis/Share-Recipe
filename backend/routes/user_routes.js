import express from 'express';
import { createUser, updateUser, deleteUser, login, logout } from '../controllers/user/index.js';

const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.put('/update/:userID', updateUser);
userRouter.delete('/delete/:userID', deleteUser);

export default userRouter;
