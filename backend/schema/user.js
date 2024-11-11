import { z } from 'zod';

export const CreateUserSchema = z.object({
  firstname: z.string().min(3, 'First name must contain at least 3 characters'),
  lastname: z.string().min(3, 'Last name must contain at least 3 characters'),
  password: z.string().min(6, 'Password must contain at least 6 characters'),
  email: z.string().email('Invalid email format'),
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must contain at least 6 characters'),
});

export const UpdateSchema = z.object({
  firstname: z.string().min(3).optional(),
  lastname: z.string().min(3).optional(),
  password: z.string().min(6).optional(),
  email: z.string().email().optional(),
});
