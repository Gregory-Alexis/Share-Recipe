import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateReview = async (req, res) => {
  const reviewID = req.params.reviewID;
  const userID = req.userID;
  const { content } = req.body;

  try {
    const review = await prisma.review.findUnique({
      where: {
        id: reviewID,
      },
    });

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.userID !== userID) {
      return res.status(403).json({ message: "You don't have permission to update this review" });
    }

    const updatedReview = await prisma.review.update({
      where: {
        id: reviewID,
      },
      data: { content },
    });

    res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
