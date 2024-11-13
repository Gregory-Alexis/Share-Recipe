import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateReview = async (req, res) => {
  const reviewID = req.params.reviewID;
  try {
    const recipe = await prisma.review.update({
      where: {
        id: reviewID,
      },
      data: req.body,
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (recipe.userID !== req.body.userID) {
      return res.status(403).json({ message: "You don't have permission to update this review" });
    }

    res.status(200).json({ message: 'Review updated', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
