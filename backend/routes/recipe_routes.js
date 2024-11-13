import express from 'express';
import { createRecipe } from '../controllers/recipe/createRecipe.js';
import { updateRecipe } from '../controllers/recipe/updateRecipe.js';
import { deleteRecipe } from '../controllers/recipe/deleteRecipe.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateRecipeSchema, UpdateRecipeSchema } from '../schema/recipe.js';
import { getAllRecipe, getOneRecipe } from '../controllers/recipe/getRecipes.js';
import verifyToken from '../utils/verifyToken.js';

const recipeRouter = express.Router();

recipeRouter.get('/recipes', getAllRecipe);
recipeRouter.get('/recipes/:recipeID', getOneRecipe);
recipeRouter.post('/recipes', validateSchema(CreateRecipeSchema), verifyToken, createRecipe);
recipeRouter.put(
  '/recipes/:recipeID',
  validateSchema(UpdateRecipeSchema),
  verifyToken,
  updateRecipe
);
recipeRouter.delete('/recipes/:recipeID', verifyToken, deleteRecipe);

export default recipeRouter;
