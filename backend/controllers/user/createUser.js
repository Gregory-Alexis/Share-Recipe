import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import generateTokenAndSetCookie from '../../utils/generateTokenAndSetCookie.js';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await prisma.user.create({
      data: {
        ...req.body,
        password: hashedPassword,
      },
    });

    generateTokenAndSetCookie(res, user.id);

    delete user.password;

    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
