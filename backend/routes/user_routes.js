import express from 'express';
import { createUser, updateUser, deleteUser, login, logout } from '../controllers/user/index.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateUserSchema, LoginSchema, UpdateSchema } from '../schema/user.js';

const userRouter = express.Router();

userRouter.post('/signup', validateSchema(CreateUserSchema), createUser);
userRouter.post('/login', validateSchema(LoginSchema), login);
userRouter.post('/logout', logout);
userRouter.put('/update/:userID', validateSchema(UpdateSchema), updateUser);
userRouter.delete('/delete/:userID', deleteUser);

export default userRouter;
