import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addToFavoriteRecipe = async (req, res) => {
  try {
    const userID = req.params.userID;
    const recipeID = req.params.recipeID;

    const user = await prisma.user.findUnique({
      where: { id: userID },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeID },
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const existInFavorite = await prisma.favoriteRecipe.findFirst({
      where: {
        userID: userID,
        recipeID: recipeID,
      },
    });

    if (existInFavorite) {
      return res.status(400).json({ message: "Recipe is already in the user's favorites" });
    }

    const favorite = await prisma.favoriteRecipe.create({
      data: {
        userID: userID,
        recipeID: recipeID,
      },
      include: {
        recipe: true,
      },
    });

    res.status(201).json({ message: 'Recipe added to favorites', favorite });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
