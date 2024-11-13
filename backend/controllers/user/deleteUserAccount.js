import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteUserAccount = async (req, res) => {
  const userID = req.userID;

  try {
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
