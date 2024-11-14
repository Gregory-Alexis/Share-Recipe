import express from 'express';

import { createUser } from '../controllers/user/createUser.js';
import { deleteUserAccount } from '../controllers/user/deleteUserAccount.js';
import { login } from '../controllers/user/login.js';
import { logout } from '../controllers/user/logout.js';
import { updateUser } from '../controllers/user/updateUser.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateUserSchema, LoginSchema, UpdateSchema } from '../schema/user.js';
import verifyToken from '../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.post('/signup', validateSchema(CreateUserSchema), createUser);
userRouter.post('/login', validateSchema(LoginSchema), login);
userRouter.post('/logout', logout);
userRouter.put('/update', validateSchema(UpdateSchema), verifyToken, updateUser);
userRouter.delete('/delete/account', verifyToken, deleteUserAccount);

export default userRouter;
