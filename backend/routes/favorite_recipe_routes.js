import express from 'express';
import { addToFavoriteRecipe } from '../controllers/favorite_recipe/addToFavoriteRecipe.js';
import { deleteFromFavoriteRecipe } from '../controllers/favorite_recipe/deleteFromFavoriteRecipe.js';
import {
  getAllFavoriteRecipes,
  getOneFavoriteRecipe,
} from '../controllers/favorite_recipe/getFavoriteRecipes.js';

const favoriteRecipeRouter = express.Router();

favoriteRecipeRouter.get('/user/:userID/favorite/recipe', getAllFavoriteRecipes);
favoriteRecipeRouter.get('/user/:userID/favorite/recipe/:recipeID', getOneFavoriteRecipe);
favoriteRecipeRouter.post('/:userID/favorite/recipe/:recipeID', addToFavoriteRecipe);
favoriteRecipeRouter.delete('/:userID/favorite/recipe/:recipeID', deleteFromFavoriteRecipe);

export default favoriteRecipeRouter;
