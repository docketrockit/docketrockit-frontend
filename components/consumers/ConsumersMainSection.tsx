import React from 'react';
import Image from 'next/image';
const ConsumersMainSection = () => {
    return (
        <section className="wrapper !bg-[#ffffff]">
            <div className="container pt-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 pb-[4.5rem] xl:pb-32 lg:pb-32 md:pb-32">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
                        <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                            Key Features & Benefits
                        </h2>
                        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-9 xl:!px-12">
                            No more paper clutter. No more digging through
                            emails. Just smart, seamless receipts—right where
                            you need them.
                        </h3>
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
                <div className="flex flex-wrap mx-[-15px] !mt-[-40px] !mb-[7rem]">
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/folder.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    All Your Receipts in One Place
                                </h3>
                                <p className="!mb-0">
                                    No more drawers full of crumpled paper.
                                    DocketRockit stores every digital receipt
                                    safely and securely in your personal
                                    repository.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/search.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Lightning-Fast Search
                                </h3>
                                <p className="!mb-0">
                                    Find any receipt—by store, product, amount,
                                    date, tag, or category—in seconds.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/receipt.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Categorise for Life&apos;s Needs
                                </h3>
                                <p className="!mb-0">
                                    Label purchases for business, personal, or
                                    shared use. Perfect for budgeting, tracking,
                                    and tax time.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/repeat.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Returns & Warranties Made Easy
                                </h3>
                                <p className="!mb-0">
                                    No more stress finding that receipt from six
                                    months ago. Just search, show, and go.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/shield.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Safe, Secure & Private
                                </h3>
                                <p className="!mb-0">
                                    Your data stays yours. No selling of
                                    identifiable info—ever. Only anonymised,
                                    aggregated insights may be shared.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/iphone.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Mobile & Web Portal Access
                                </h3>
                                <p className="!mb-0">
                                    View, sort, and manage your receipts from
                                    your phone or desktop—whenever you need
                                    them.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/moneybag.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Effortless Claims & Cashback
                                </h3>
                                <p className="!mb-0">
                                    Simplify insurance claims and cashback
                                    offers with instant access to exactly what
                                    you bought and when.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/briefcase.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Tax & Expense Reporting
                                </h3>
                                <p className="!mb-0">
                                    Generate summaries of your spending,
                                    business expenses, and GST-deductible items
                                    with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    alt="image"
                                    src="/assets/img/photos/abacus.png"
                                    width={438}
                                    height={327}
                                    className=" !w-[4rem] !h-[4rem] !mr-4"
                                />
                            </div>
                            <div>
                                <h3 className="!text-[1.1rem] !mb-1">
                                    Smarter Budgeting & Spending Insights
                                </h3>
                                <p className="!mb-0">
                                    Track where your money’s going with a clear
                                    breakdown of spending by category, store, or
                                    time period.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                </div>
                {/*/.row */}
                <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] items-center">
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
                        <figure className="m-0 p-0">
                            <Image
                                className="w-auto"
                                alt="image"
                                src="/assets/img/photos/3d2.png"
                                width={800}
                                height={925}
                            />
                        </figure>
                    </div>
                    {/*/column */}
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
                        <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                            Have Perfect Control
                        </h2>
                        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4">
                            We bring solutions to make life easier for our
                            customers.
                        </h3>
                        <p className="!mb-6">
                            Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Cras
                            justo odio, dapibus ac facilisis in, egestas eget
                            quam. Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue rutrum.
                        </p>
                        <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                                    <li className="relative !pl-6">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>
                                            Aenean quam ornare. Curabitur
                                            blandit.
                                        </span>
                                    </li>
                                    <li className="relative !pl-6 !mt-3">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>
                                            Nullam quis risus eget urna mollis
                                            ornare.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            {/*/column */}
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                                    <li className="relative !pl-6">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>
                                            Etiam porta euismod malesuada
                                            mollis.
                                        </span>
                                    </li>
                                    <li className="relative !pl-6 !mt-3">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                        </span>
                                        <span>
                                            Vivamus sagittis lacus vel augue
                                            rutrum.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            {/*/column */}
                        </div>
                        {/*/.row */}
                    </div>
                    {/*/column */}
                </div>
                {/*/.row */}
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] items-center">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative !mt-[50px]">
                        <figure className="rounded-[0.4rem]">
                            <Image
                                className="max-w-full h-auto rounded-[0.4rem]"
                                alt="image"
                                src="/assets/img/photos/about27.jpg"
                                width={625}
                                height={590}
                            />
                        </figure>
                        <div
                            className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute xl:block lg:block md:block max-sm:!hidden"
                            style={{ top: '15%', left: '-7%' }}
                        >
                            <div className="card-body py-4 px-5">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 234.66"
                                            data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/cloud-group.svg"
                                            className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia mr-3"
                                        >
                                            <circle
                                                className="fill-secondary"
                                                cx={128}
                                                cy="149.33"
                                                r="21.33"
                                            />
                                            <path
                                                className="fill-secondary"
                                                d="M162.67 234.66H93.34a8 8 0 01-8-8v-16a29.36 29.36 0 0129.33-29.33h26.67a29.35 29.35 0 0129.33 29.33v16a8 8 0 01-8 8zm32-64h-14.19a55.46 55.46 0 0116.85 40v2.67H216a8.06 8.06 0 008-8V200a29.32 29.32 0 00-29.33-29.34zm-133.34 0A29.31 29.31 0 0032 200v5.35a8.06 8.06 0 008 8h18.67v-2.67a55.46 55.46 0 0116.85-40z"
                                            />
                                            <circle
                                                className="fill-secondary"
                                                cx="74.67"
                                                cy="138.66"
                                                r="21.33"
                                            />
                                            <circle
                                                className="fill-secondary"
                                                cx="181.33"
                                                cy="138.66"
                                                r="21.33"
                                            />
                                            <path
                                                className="fill-primary"
                                                d="M27.2 162.94a52.21 52.21 0 018.8-6.56A42.48 42.48 0 01107.73 112a41 41 0 0140.54 0A42.48 42.48 0 01220 156.38a55.09 55.09 0 015.83 4 64.4 64.4 0 00-26.65-118.49A81.31 81.31 0 00128 0C90.19 0 57.39 26.3 49.1 62.18 21.54 65.07 0 88.22 0 116.26c0 19.93 11 37.21 27.2 46.68z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="!text-[1.25rem] counter !leading-[1.4] !mb-0 whitespace-nowrap">
                                            25000+
                                        </h3>
                                        <p className="!text-[0.8rem] leading-normal !mb-0 whitespace-nowrap">
                                            Happy Clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*/.card-body */}
                        </div>
                        {/*/.card */}
                        <div
                            className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute !text-center xl:block lg:block md:block max-sm:!hidden"
                            style={{ bottom: '10%', left: '-10%' }}
                        >
                            <div className="card-body p-6">
                                <div className="progressbar semi-circle fuchsia !relative !mb-3 !m-[0_auto_1rem] !w-[8.5rem] !h-[4.25rem]">
                                    {/* <ProgressCircle max={80} /> */}
                                </div>
                                <h4 className="!mb-0">Time Saved</h4>
                            </div>
                            {/*/.card-body */}
                        </div>
                        {/*/.card */}
                    </div>
                    {/*/column */}
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                        <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                            What Makes Us Different?
                        </h2>
                        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4 xl:mr-[-1.25rem] lg:mr-[-1.25rem]">
                            We make spending stress free so you have the perfect
                            control.
                        </h3>
                        <p className="!mb-6">
                            Etiam porta sem malesuada magna mollis euismod.
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros. Fusce dapibus, tellus ac cursus. Integer
                            posuere erat a ante venenatis dapibus posuere velit.
                        </p>
                        <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
                            <li className="relative !pl-6">
                                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-[#e2e2f3] !text-[#605dba] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                                Stuff
                            </li>
                        </ul>
                    </div>
                    {/*/column */}
                </div>
                {/*/.row */}
            </div>
            {/* /.container */}
        </section>
    );
};

export default ConsumersMainSection;
