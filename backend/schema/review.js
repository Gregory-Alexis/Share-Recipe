import { z } from 'zod';

export const CreateReviewSchema = z.object({
  content: z.string(),
  rating: z.number(),
});

export const UpdateReviewSchema = z.object({
  content: z.string().optional(),
  rating: z.number().optional(),
});
