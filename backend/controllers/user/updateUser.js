import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
    }

    const user = await prisma.user.update({
      where: {
        id: req.params.userID,
      },
      data: req.body,
    });

    delete user.password;

    res.json({ message: 'User updated', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
