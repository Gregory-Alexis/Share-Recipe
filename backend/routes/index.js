import express from 'express';

import recipeRouter from './recipe_routes.js';
import userRouter from './user_routes.js';
import reviewRouter from './review_routes.js';
import ingredientRouter from './ingredient_routes.js';
import favoriteRecipeRouter from './favorite_recipe_routes.js';

const router = express.Router();

router.use('/', recipeRouter);
router.use('/', userRouter);
router.use('/', reviewRouter);
router.use('/', ingredientRouter);
router.use('/', favoriteRecipeRouter);

export default router;
