import express from 'express';
import { createRecipe } from '../controllers/recipe/createRecipe.js';
import { updateRecipe } from '../controllers/recipe/updateRecipe.js';
import { deleteRecipe } from '../controllers/recipe/deleteRecipe.js';
import { validateSchema } from '../middleware/zod.js';
import { CreateRecipeSchema, UpdateRecipeSchema } from '../schema/recipe.js';

const recipeRouter = express.Router();

recipeRouter.post('/recipe', validateSchema(CreateRecipeSchema), createRecipe);
recipeRouter.put('/update/recipe/:recipeID', validateSchema(UpdateRecipeSchema), updateRecipe);
recipeRouter.delete('/delete/recipe/:recipeID', deleteRecipe);

export default recipeRouter;
