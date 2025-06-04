'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition, useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { ConsumerFormInput } from '@/components/form/FormInput';
import { FormErrorSubscribeConsumer } from '@/components/form/FormError';
import { FormSuccessSubscribeConsumer } from '@/components/form/FormSuccess';
import { EmailSchema } from '@/schemas/email';
import { cn } from '@/lib/utils';
import { subscribeToNewsletter } from '@/actions/subscribe';

const ConsumersHeroSubscribe = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof EmailSchema>>({
        resolver: zodResolver(EmailSchema),
        defaultValues: {
            email: ''
        }
    });

    const onSubmit = (values: z.infer<typeof EmailSchema>) => {
        setError(undefined);
        setSuccess(undefined);

        startTransition(async () => {
            const data = await subscribeToNewsletter(values.email);

            if (!data) {
                setError('Failed to subscribe, please try again');
            }
            if (data) {
                form.reset();
                setSuccess('Successfully subscribed, welcome aboard');
            }
        });
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full flex-col items-center space-y-4 space-x-0 px-4 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className={cn('w-full md:w-2/3')}>
                                <FormControl>
                                    <ConsumerFormInput
                                        {...field}
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="btn btn-lg btn-gradient gradient-1 rounded"
                    >
                        {isPending ? (
                            <>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Please wait...
                            </>
                        ) : (
                            'Subscribe'
                        )}
                    </Button>
                </form>
            </Form>
            <div className="flex flex-row gap-x-6">
                <div className="basis-full text-white">
                    <FormSuccessSubscribeConsumer message={success} />
                    <FormErrorSubscribeConsumer
                        message={error || form.formState.errors.email?.message}
                    />
                </div>
            </div>
        </>
    );
};
export default ConsumersHeroSubscribe;
