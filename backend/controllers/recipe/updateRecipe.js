import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateRecipe = async (req, res) => {
  try {
    const recipe = await prisma.recipe.update({
      where: {
        id: req.params.recipeID,
      },
      data: req.body,
    });

    res.json({ message: 'Recipe updated', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
