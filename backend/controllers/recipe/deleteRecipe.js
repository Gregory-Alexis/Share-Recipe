import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteRecipe = async (req, res) => {
  try {
    await prisma.recipe.delete({
      where: {
        id: req.params.recipeID,
      },
    });

    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
