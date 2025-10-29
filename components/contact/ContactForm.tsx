'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { ReloadIcon } from '@radix-ui/react-icons';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form/FormError';
import { ContactSchema } from '@/schemas/contact';
import { cn } from '@/lib/utils';
import { createContact } from '@/actions/contact';

const ContactForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            subject: '',
            message: '',
            email: ''
        }
    });

    const onSubmit = (values: z.infer<typeof ContactSchema>) => {
        startTransition(async () => {
            const data = await createContact(values);
            if (data?.error) {
                setError(data.error);
            }
            if (!data.error) {
                setSuccess(true);
                toast.success('Message submitted');
            }
        });
    };

    return (
        <>
            <section className="wrapper !bg-[#ffffff] pt-16">
                <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                            <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:mx-[-35px] lg:mx-[-20px]">
                                <div className="w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                                    {!success ? (
                                        <Form {...form}>
                                            <FormError message={error} />
                                            <form
                                                className="contact-form needs-validation"
                                                onSubmit={form.handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <div className="flex flex-wrap mx-[-10px]">
                                                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                                                        <div className="form-floating relative !mb-4">
                                                            <FormField
                                                                control={
                                                                    form.control
                                                                }
                                                                name="firstName"
                                                                render={({
                                                                    field
                                                                }) => (
                                                                    <FormItem
                                                                        className={cn(
                                                                            'w-full'
                                                                        )}
                                                                    >
                                                                        <FormControl>
                                                                            <Input
                                                                                type="text"
                                                                                placeholder="First Name"
                                                                                {...field}
                                                                                className={cn(
                                                                                    'form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]'
                                                                                )}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* /column */}
                                                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                                                        <div className="form-floating relative !mb-4">
                                                            <FormField
                                                                control={
                                                                    form.control
                                                                }
                                                                name="lastName"
                                                                render={({
                                                                    field
                                                                }) => (
                                                                    <FormItem
                                                                        className={cn(
                                                                            'w-full'
                                                                        )}
                                                                    >
                                                                        <FormControl>
                                                                            <Input
                                                                                type="text"
                                                                                placeholder="Last Name"
                                                                                {...field}
                                                                                className={cn(
                                                                                    'form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]'
                                                                                )}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* /column */}
                                                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                                                        <div className="form-floating relative !mb-4">
                                                            <FormField
                                                                control={
                                                                    form.control
                                                                }
                                                                name="email"
                                                                render={({
                                                                    field
                                                                }) => (
                                                                    <FormItem
                                                                        className={cn(
                                                                            'w-full'
                                                                        )}
                                                                    >
                                                                        <FormControl>
                                                                            <Input
                                                                                type="text"
                                                                                placeholder="Email"
                                                                                {...field}
                                                                                className={cn(
                                                                                    'form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]'
                                                                                )}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* /column */}
                                                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                                                        <div className="form-select-wrapper !mb-4">
                                                            <FormField
                                                                control={
                                                                    form.control
                                                                }
                                                                name="subject"
                                                                render={({
                                                                    field
                                                                }) => (
                                                                    <FormItem
                                                                        className={cn(
                                                                            'w-full'
                                                                        )}
                                                                    >
                                                                        <FormControl>
                                                                            <Input
                                                                                type="text"
                                                                                placeholder="Subject"
                                                                                {...field}
                                                                                className={cn(
                                                                                    'form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]'
                                                                                )}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* /column */}
                                                    <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                                                        <div className="form-floating relative !mb-4">
                                                            <FormField
                                                                control={
                                                                    form.control
                                                                }
                                                                name="message"
                                                                render={({
                                                                    field
                                                                }) => (
                                                                    <FormItem
                                                                        className={cn(
                                                                            'w-full'
                                                                        )}
                                                                    >
                                                                        <FormControl>
                                                                            <div className="mt-2">
                                                                                <Textarea
                                                                                    {...field}
                                                                                    placeholder="What do you want to tell us..."
                                                                                    className={cn(
                                                                                        'form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] min-h-[calc(2.5rem_+_2px)] !leading-[1.25] h-36'
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="absolute opacity-0 pointer-events-none"
                                                        aria-hidden="true"
                                                        tabIndex={-1}
                                                    >
                                                        <FormField
                                                            control={
                                                                form.control
                                                            }
                                                            name="website"
                                                            render={({
                                                                field
                                                            }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Input
                                                                            {...field}
                                                                            autoComplete="off"
                                                                            tabIndex={
                                                                                -1
                                                                            }
                                                                        />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    {/* /column */}

                                                    <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                                                        <Button
                                                            type="submit"
                                                            disabled={isPending}
                                                            className={cn(
                                                                'capitalize btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]'
                                                            )}
                                                            size="lg"
                                                        >
                                                            {isPending ? (
                                                                <>
                                                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                                                    Please
                                                                    wait...
                                                                </>
                                                            ) : (
                                                                'Send Message'
                                                            )}
                                                        </Button>
                                                    </div>
                                                    {/* /column */}
                                                </div>
                                                {/* /.row */}
                                            </form>
                                        </Form>
                                    ) : (
                                        <div className="flex h-full w-full flex-col justify-between space-y-8 rounded-3xl bg-white px-12 py-5 align-middle  sm:justify-between sm:space-x-0 md:space-x-4">
                                            Thank you for your message. We will
                                            endeavour to get back to you as soon
                                            as possible.
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/*/.row */}
                        </div>
                        {/* /column */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            {/* /section */}
        </>
    );
};

export default ContactForm;
