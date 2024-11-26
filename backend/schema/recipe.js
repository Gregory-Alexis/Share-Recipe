import { z } from 'zod';

export const CreateRecipeSchema = z.object({
  title: z.string(),
  content: z.string(),
  image_url: z.string(),
});

export const UpdateRecipeSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  image_url: z.string().optional(),
});
