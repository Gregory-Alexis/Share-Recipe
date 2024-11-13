import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const updateUser = async (req, res) => {
  const userID = req.userID;
  const { password } = req.body;

  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      password = hashedPassword;
    }

    const user = await prisma.user.update({
      where: {
        id: userID,
      },
      data: req.body,
    });

    delete user.password;

    res.json({ message: 'User updated', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
