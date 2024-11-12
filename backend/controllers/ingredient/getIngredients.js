import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await prisma.ingredient.findMany({
      where: {
        id: req.body.ingredientId,
      },
    });
    res.status(200).json({ ingredients });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOneIngredient = async (req, res) => {
  try {
    const ingredient = await prisma.ingredient.findUnique({
      where: {
        id: req.params.ingredientId,
      },
    });
    res.status(200).json({ ingredient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
