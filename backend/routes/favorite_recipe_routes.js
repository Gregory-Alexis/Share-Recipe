import express from 'express';
import { addToFavoriteRecipe } from '../controllers/favorite_recipe/addToFavoriteRecipe.js';
import { deleteFromFavoriteRecipe } from '../controllers/favorite_recipe/deleteFromFavoriteRecipe.js';

const favoriteRecipeRouter = express.Router();

favoriteRecipeRouter.post('/:userID/favorite/recipe/:recipeID', addToFavoriteRecipe);
favoriteRecipeRouter.delete('/:userID/favorite/recipe/:recipeID', deleteFromFavoriteRecipe);

export default favoriteRecipeRouter;
