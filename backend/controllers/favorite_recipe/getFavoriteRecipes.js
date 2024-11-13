import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllFavoriteRecipes = async (req, res) => {
  const userID = req.params.userID;

  try {
    const favoriteRecipes = await prisma.favoriteRecipe.findMany({
      where: {
        id: userID,
      },
      include: {
        recipe: true,
      },
    });

    if (!favoriteRecipes) {
      return res.status(404).json({ message: "Recipes not found in user's favorites" });
    }

    const recipes = favoriteRecipes.map((fav) => fav.recipe);

    res.status(200).json({ recipes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOneFavoriteRecipe = async (req, res) => {
  const userID = req.params.userID;
  const recipeID = req.params.recipeID;

  try {
    const favoriteRecipe = await prisma.favoriteRecipe.findFirst({
      where: {
        userID: userID,
        recipeID: recipeID,
      },
      include: {
        recipe: true,
      },
    });

    if (!favoriteRecipe) {
      return res.status(404).json({ message: "Recipe not found in user's favorites" });
    }

    res.status(200).json({ recipe: favoriteRecipe.recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
