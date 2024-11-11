import express from 'express';
import { createRecipe } from '../controllers/recipe/createRecipe.js';
import { updateRecipe } from '../controllers/recipe/updateRecipe.js';
import { deleteRecipe } from '../controllers/recipe/deleteRecipe.js';

const recipeRouter = express.Router();

recipeRouter.post('/recipe', createRecipe);
recipeRouter.put('/update/recipe/:recipeID', updateRecipe);
recipeRouter.delete('/delete/recipe/:recipeID', deleteRecipe);

export default recipeRouter;
