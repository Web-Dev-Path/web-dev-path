import { z } from 'zod';
import { newsletterSchema } from './newsletter';

export const contactSchema = newsletterSchema.extend({
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z
    .string()
    .min(2, 'Message must be at least 2 characters')
    .max(5000, 'Message must be 5000 characters or less'),
  subscribe: z.boolean().optional(),
});
