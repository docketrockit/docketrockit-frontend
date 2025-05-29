'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition, useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import { AccountFormInput } from '@/components/form/FormInput';
import { FormErrorSubscribe } from '@/components/form/FormError';
import { FormSuccessSubscribe } from '@/components/form/FormSuccess';
import { EmailSchema } from '@/schemas/email';
import { cn } from '@/lib/utils';
import { subscribeToNewsletter } from '@/actions/subscribe';

const FooterSubscribe = () => {
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
                    className="validate dark-fields"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div id="mc_embed_signup_scroll2">
                                        <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                                            <Input
                                                {...field}
                                                name="email"
                                                type="text"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex-1">
                        <Button
                            type="submit"
                            disabled={isPending}
                            className={cn('h-12 rounded-xl capitalize')}
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
                    </div>
                </form>
            </Form>

            <div className="flex flex-row gap-x-6">
                <div className="basis-full text-white">
                    <FormSuccessSubscribe message={success} />
                    <FormErrorSubscribe
                        message={error || form.formState.errors.email?.message}
                    />
                </div>
            </div>
        </>
    );
};

export default FooterSubscribe;
