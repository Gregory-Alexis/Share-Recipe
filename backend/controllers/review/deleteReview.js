import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteReview = async (req, res) => {
  const reviewID = req.params.reviewID;
  const userID = req.userID;

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
      return res.status(403).json({ message: "You don't have permission to delete this review" });
    }

    await prisma.review.delete({
      where: {
        id: reviewID,
      },
    });

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
