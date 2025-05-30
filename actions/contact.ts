'use server';

import * as z from 'zod';
import { ContactSchema } from '@/schemas/contact';
import { getErrorMessage, renderError } from '@/lib/handleError';
import { sendContactEmail } from '@/lib/mail';

export const createContact = async (values: z.infer<typeof ContactSchema>) => {
    try {
        const validatedFields = ContactSchema.safeParse(values);

        if (!validatedFields.success) {
            return {
                data: null,
                error: getErrorMessage('Invalid fields!')
            };
        }

        const { firstName, lastName, subject, email, message } =
            validatedFields.data;

        await sendContactEmail({
            firstName,
            lastName,
            subject,
            email,
            message
        });

        return { error: null };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'An error occurred'
        };
    }
};
