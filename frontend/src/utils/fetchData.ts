import axios from 'axios';

import { RecipeModel } from './../models/Recipes';

export const API_URL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

export const fetchAllRecipes = async (): Promise<RecipeModel[]> => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching recipes: ${error.message}`);
    }
  }
  return [];
};

export const fetchOneRecipe = async (id: string): Promise<RecipeModel> => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching recipe: ${error.message}`);
    }
  }
  return {} as RecipeModel;
};
