import express from 'express';
import { createRecipe } from '../controllers/recipe/createRecipe.js';
import { updateRecipe } from '../controllers/recipe/updateRecipe.js';
import { deleteRecipe } from '../controllers/recipe/deleteRecipe.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateRecipeSchema, UpdateRecipeSchema } from '../schema/recipe.js';
import { getAllRecipe, getOneRecipe } from '../controllers/recipe/getRecipes.js';

const recipeRouter = express.Router();

recipeRouter.get('/recipes', getAllRecipe);
recipeRouter.get('/recipe/:recipeID', getOneRecipe);
recipeRouter.post('/recipe', validateSchema(CreateRecipeSchema), createRecipe);
recipeRouter.put(
  '/user/:userID/update/recipe/:recipeID',
  validateSchema(UpdateRecipeSchema),
  updateRecipe
);
recipeRouter.delete('/user/:userID/delete/recipe/:recipeID', deleteRecipe);

export default recipeRouter;
