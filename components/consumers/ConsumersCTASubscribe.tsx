'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition, useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { ConsumerFormInput } from '@/components/form/FormInput';
import { FormErrorSubscribeConsumer } from '@/components/form/FormError';
import { FormSuccessSubscribeConsumer } from '@/components/form/FormSuccess';
import { EmailSchema } from '@/schemas/email';
import { cn } from '@/lib/utils';
import { subscribeToNewsletter } from '@/actions/subscribe';
import { Input } from '@/components/ui/input';

const ConsumersCTASubscribe = () => {
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
                    className="form-floating input-group relative"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className={cn('w-full md:w-2/3')}>
                                <FormControl>
                                    <Input
                                        {...field}
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                        className="rounded-tr-none rounded-br-none border-0 relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-tl-[0.4rem] rounded-bl-[0.4rem] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                                    />
                                </FormControl>
                                <FormLabel className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={isPending}
                        size="lg"
                        className="btn btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] hover:!translate-none h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)]"
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
export default ConsumersCTASubscribe;
