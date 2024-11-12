import express from 'express';
import { getAllIngredients, getOneIngredient } from '../controllers/ingredient/getIngredients.js';

const ingredientRouter = express.Router();

ingredientRouter.get('/ingredients', getAllIngredients);
ingredientRouter.get('/ingredient/:ingredientId', getOneIngredient);

export default ingredientRouter;
