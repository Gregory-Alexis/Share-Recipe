import express from 'express';

import { checkAuth } from '../controllers/checkAuth.js';
import verifyToken from '../middleware/verifyToken.js';

const checkAuthRouter = express.Router();

checkAuthRouter.get('/check-auth', verifyToken, checkAuth);

export default checkAuthRouter;
