import { z } from 'zod';

export const CreateReviewSchema = z.object({
  content: z.string(),
  rating: z.number().min(3, 'The title must contain at least 3 characters '),
});

export const UpdateReviewSchema = z.object({
  content: z.string().optional(),
  rating: z.number().optional(),
});
