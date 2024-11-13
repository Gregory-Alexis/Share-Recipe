import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createReview = async (req, res) => {
  const recipeID = req.body.recipeID;
  const userID = req.userID;

  try {
    const review = await prisma.review.create({
      data: {
        rating: req.body.rating,
        content: req.body.content,
        user: {
          connect: {
            id: userID,
          },
        },
        recipe: {
          connect: {
            id: recipeID,
          },
        },
      },
    });

    res.json({ message: 'Review created', review });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
