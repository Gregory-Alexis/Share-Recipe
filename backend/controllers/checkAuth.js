import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const checkAuth = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.userID,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    delete user.password;

    res.status(200).json({ message: 'User authenticated', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
