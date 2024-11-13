import express from 'express';
import { addToFavoriteRecipe } from '../controllers/favorite_recipe/addToFavoriteRecipe.js';
import { deleteFromFavoriteRecipe } from '../controllers/favorite_recipe/deleteFromFavoriteRecipe.js';
import {
  getAllFavoriteRecipes,
  getOneFavoriteRecipe,
} from '../controllers/favorite_recipe/getFavoriteRecipes.js';
import verifyToken from '../utils/verifyToken.js';

const favoriteRecipeRouter = express.Router();

favoriteRecipeRouter.get('/favorites', verifyToken, getAllFavoriteRecipes);
favoriteRecipeRouter.get('/favorites/:recipeID', verifyToken, getOneFavoriteRecipe);
favoriteRecipeRouter.post('/favorites/:recipeID', verifyToken, addToFavoriteRecipe);
favoriteRecipeRouter.delete('/favorites/:recipeID', verifyToken, deleteFromFavoriteRecipe);

export default favoriteRecipeRouter;
