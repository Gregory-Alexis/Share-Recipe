import express from 'express';

import recipeRouter from './recipe_routes.js';
import userRouter from './user_routes.js';
import reviewRouter from './review_routes.js';
import ingredientRouter from './ingredient_routes.js';
import favoriteRecipeRouter from './favorite_recipe_routes.js';

const router = express.Router();

router.use('/api', recipeRouter);
router.use('/api', userRouter);
router.use('/api', reviewRouter);
router.use('/api', ingredientRouter);
router.use('/api', favoriteRecipeRouter);

export default router;
