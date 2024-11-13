import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllFavoriteRecipes = async (req, res) => {
  try {
    const favorite_recipe = await prisma.recipe.findMany({
      recipe: req.body.recipe,
      where: {
        id: req.body.userID,
      },
    });

    res.status(200).json({ favorite_recipe });
  } catch (error) {
    res.status(400).json({ message: error.errors });
  }
};

export const getOneFavoriteRecipe = async (req, res) => {
  try {
    const favorite_recipe = await prisma.recipe.findUnique({
      where: {
        id: req.params.recipeID,
      },
    });

    res.status(200).json({ favorite_recipe });
  } catch (error) {
    res.status(400).json({ message: error.errors });
  }
};
