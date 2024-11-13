import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateRecipe = async (req, res) => {
  const recipeID = req.params.recipeID;
  const userID = req.userID;

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeID },
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.userID !== userID) {
      return res.status(403).json({ message: "You don't have permission to update this recipe" });
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeID },
      data: req.body,
      include: {
        ingredients: true,
      },
    });

    res.json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
