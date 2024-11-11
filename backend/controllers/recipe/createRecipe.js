import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRecipe = async (req, res) => {
  try {
    const recipe = await prisma.recipe.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        image_url: req.body.image_url,
        user: {
          connect: {
            id: req.body.userID,
          },
        },

        ingredients: {
          create: req.body.ingredientIds.map((ingredientId) => ({
            ingredient: {
              connect: {
                id: ingredientId,
              },
            },
          })),
        },
      },
    });

    res.json({ message: 'Recipe created', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
