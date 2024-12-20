import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import generateTokenAndSetCookie from '../../utils/generateTokenAndSetCookie.js';

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    generateTokenAndSetCookie(res, user.id);

    delete user.password;

    res.json({ message: 'User logged in', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
