import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllRecipe = async (req, res) => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        id: req.body.recipeID,
      },
      include: {
        review: true,
        ingredients: true,
      },
    });

    if (!recipes) {
      return res.status(404).json({ message: 'Recipes not found' });
    }

    res.status(200).json({ recipes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOneRecipe = async (req, res) => {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: req.params.recipeID,
      },
      include: {
        review: true,
        ingredients: true,
      },
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipes not found' });
    }

    res.status(200).json({ recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
