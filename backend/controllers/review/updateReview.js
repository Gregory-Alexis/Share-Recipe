import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateReview = async (req, res) => {
  try {
    const recipe = await prisma.review.update({
      where: {
        id: req.params.reviewID,
      },
      data: req.body,
    });
    res.status(200).json({ message: 'Review updated', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
