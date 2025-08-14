import Image from 'next/image';

import { steps } from '@/data/steps';
import ConsumersCTASubscribe from '@/components/consumers/ConsumersCTASubscribe';

const ConsumersMainSection = () => {
    return (
        <>
            <section className="wrapper !bg-[#ffffff] pb-20">
                <div className="container pt-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 ">
                    <div className="flex flex-wrap mx-[-15px] !text-center mb-10">
                        <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
                            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
                                Key Features & Benefits
                            </h2>
                            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-9 xl:!px-12">
                                No more paper clutter. No more digging through
                                emails. Just smart, seamless receipts—right
                                where you need them.
                            </h3>
                        </div>
                        {/* /column */}
                    </div>
                    {/* /.row */}
                    <div className="flex flex-wrap mx-[-15px] !mt-[-40px] ">
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
                                        DocketRockit stores every digital
                                        receipt safely and securely in your
                                        personal repository.
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
                                        Find any receipt—by store, product,
                                        amount, date, tag, or category—in
                                        seconds.
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
                                        Label purchases for business, personal,
                                        or shared use. Perfect for budgeting,
                                        tracking, and tax time.
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
                                        No more stress finding that receipt from
                                        six months ago. Just search, show, and
                                        go.
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
                                        View, sort, and manage your receipts
                                        from your phone or desktop—whenever you
                                        need them.
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
                                        offers with instant access to exactly
                                        what you bought and when.
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
                                        business expenses, and GST-deductible
                                        items with ease.
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
                                        Track where your money&apos;s going with
                                        a clear breakdown of spending by
                                        category, store, or time period.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*/column */}
                    </div>
                    {/*/.row */}
                </div>
            </section>
            <section
                id="snippet-2"
                className="wrapper !bg-[#F5F5F5] items-center"
            >
                <div className="container pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20 items-center">
                    <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 text-center">
                        How does it work?
                    </h2>
                    <p className="lead !mb-8 !text-[1.05rem] !leading-[1.6] text-center">
                        We make your purchases
                        <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                            {` `}stress-free{` `}
                        </span>
                        for you to keep track of your receipts.
                    </p>
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] process-wrapper line">
                        {/* import { steps2, stepsData } from "@/data/steps"*/}
                        {steps.map((column, index) => (
                            <div
                                key={index}
                                className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative ${
                                    !column.isLast
                                        ? "after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden"
                                        : ''
                                }`}
                            >
                                <span
                                    className={
                                        index == 1
                                            ? 'icon btn btn-circle btn-lg btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]'
                                            : 'icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]'
                                    }
                                >
                                    <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                                        {column.number}
                                    </span>
                                </span>
                                <h4 className="!mb-1">{column.title}</h4>
                                <p className="!mb-0">{column.description}</p>
                            </div>
                        ))}
                        {/*/column */}
                    </div>
                    {/*/.row */}
                </div>
                {/* /.container */}

                {/* /.container */}
            </section>
            <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    {/*/.row */}
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
                        <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
                            <figure className="m-0 p-0">
                                <Image
                                    className="w-auto"
                                    alt="image"
                                    src="/assets/img/photos/i7.png"
                                    width={800}
                                    height={621}
                                />
                            </figure>
                        </div>
                        {/*/column */}
                        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
                                We make your spending stress-free for you to
                                keep track of what&apos;s going on.
                            </h3>
                            <p className="!mb-6">
                                DocketRockit: Your all-in-one digital receipt
                                hub! Instantly store and organise every receipt,
                                no matter where you shop or how it&apos;s sent.
                            </p>
                            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                                <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full">
                                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                                        <li className="relative !pl-6">
                                            <span>
                                                <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                            </span>
                                            <span>
                                                Access all your receipts in one
                                                secure app.
                                            </span>
                                        </li>
                                        <li className="relative !pl-6 !mt-3">
                                            <span>
                                                <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                            </span>
                                            <span>
                                                Effortlessly track purchases
                                                from any store.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/*/column */}
                                <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full">
                                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                                        <li className="relative !pl-6">
                                            <span>
                                                <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                            </span>
                                            <span>
                                                Say goodbye to lost receipts.
                                            </span>
                                        </li>
                                        <li className="relative !pl-6 !mt-3">
                                            <span>
                                                <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                                            </span>
                                            <span>
                                                Simplify returns, warranties,
                                                and expense tracking.
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
                </div>
                {/* /.container */}
            </section>
            <section className="wrapper !bg-[#f0f0f8]">
                <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <div className="flex flex-wrap mx-[-15px] !mb-8">
                        <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                            <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
                                Subscribe now
                            </h2>
                            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-0">
                                Coming soon! Subscribe now to get more
                                information on when we launch!
                            </h3>
                        </div>
                        {/* /column */}
                    </div>
                    {/* /.row */}
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                            {/* <form onSubmit={(e) => e.preventDefault()}> */}
                            <ConsumersCTASubscribe />
                            {/* </form> */}
                        </div>
                        {/* /column */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
                <figure className="m-0 p-0">
                    <Image
                        className="w-full max-w-full !h-auto"
                        alt="image"
                        src="/assets/img/photos/clouds.png"
                        width={3170}
                        height={250}
                    />
                </figure>
            </section>
        </>
    );
};

export default ConsumersMainSection;
