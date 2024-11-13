import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRecipe = async (req, res) => {
  const userID = req.userID;

  try {
    const recipe = await prisma.recipe.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        image_url: req.body.image_url,
        user: {
          connect: {
            id: userID,
          },
        },

        ingredients: {
          create: req.body.ingredientIds.map((ingredientID) => ({
            ingredient: {
              connect: {
                id: ingredientID,
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
