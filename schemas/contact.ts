import * as z from 'zod';

export const ContactSchema = z.object({
    firstName: z.string().min(1, {
        message: 'First Name is required'
    }),
    lastName: z.string().min(1, {
        message: 'First Name is required'
    }),
    email: z.email({ message: 'Invalid email address' }),
    subject: z.string().min(1, {
        message: 'Subject is required'
    }),
    message: z.string().min(1, {
        message: 'Message is required'
    })
});
