import * as z from 'zod';

export const EmailSchema = z.object({
    email: z.email({
        message: 'Email must be valid'
    })
});
