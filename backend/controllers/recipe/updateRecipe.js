import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateRecipe = async (req, res) => {
  const recipeID = req.params.recipeID;

  try {
    const recipe = await prisma.recipe.update({
      where: {
        id: recipeID,
      },
      data: req.body,
      include: {
        ingredients: true,
      },
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.userID !== req.body.userID) {
      return res.status(403).json({ message: "You don't have permission to update this recipe" });
    }

    res.json({ message: 'Recipe updated', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
