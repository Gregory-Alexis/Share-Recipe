import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteRecipe = async (req, res) => {
  const recipeID = req.params.recipeID;
  const userID = req.userID;

  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: recipeID,
      },
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.userID !== userID) {
      return res.status(403).json({ message: "You don't have permission to delete this recipe" });
    }

    await prisma.recipe.delete({
      where: {
        id: recipeID,
      },
    });

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
