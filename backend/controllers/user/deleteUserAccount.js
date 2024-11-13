import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteUserAccount = async (req, res) => {
  const userID = req.params.userID;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUserID = decoded.userID;

    const user = await prisma.user.findUnique({
      where: {
        id: userID,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await prisma.user.delete({
      where: {
        id: userID,
      },
    });

    res.status(200).json({ message: 'User account deleted successfully' });
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.status(400).json({ message: error.message });
  }
};
