import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteReview = async (req, res) => {
  const reviewID = req.params.reviewID;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUserID = decoded.userID;

    const review = await prisma.review.findUnique({
      where: {
        id: reviewID,
      },
    });

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.userID !== currentUserID) {
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
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.status(400).json({ message: error.message });
  }
};
