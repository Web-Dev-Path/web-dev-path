import { z } from 'zod';

export const newsletterSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name must be 80 characters or less'),
  email: z.string().email('Please enter a valid email address'),
});
