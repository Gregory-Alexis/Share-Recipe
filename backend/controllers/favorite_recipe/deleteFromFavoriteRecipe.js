import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteFromFavoriteRecipe = async (req, res) => {
  try {
    const recipeID = req.params.recipeID;
    const userID = req.userID;

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
      where: { userID, recipeID },
    });

    if (!existInFavorite) {
      return res.status(400).json({ message: 'Recipe is not in your favorite' });
    }

    const deleteFromFavorite = await prisma.favoriteRecipe.delete({
      where: {
        id: existInFavorite.id,
      },
    });

    res.status(201).json({ message: 'Recipe deleted from favorites', deleteFromFavorite });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
