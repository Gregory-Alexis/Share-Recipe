import express from 'express';

import recipeRouter from './recipe_routes.js';
import userRouter from './user_routes.js';
import reviewRouter from './review_routes.js';

const router = express.Router();

router.use('/', recipeRouter);
router.use('/', userRouter);
router.use('/', reviewRouter);

export default router;
