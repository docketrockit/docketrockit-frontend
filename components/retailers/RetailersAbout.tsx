'use client';
import { useState } from 'react';
import Image from 'next/image';

const RetailersAbout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="wrapper !bg-[#ffffff]">
                <div className="container pt-20 xl:!pt-[7rem] lg:!pt-[7rem] md:!pt-[7rem] !relative">
                    <figure
                        className="!rounded-[.4rem] !mt-[-12.5rem] xl:!mt-[-17.5rem] lg:!mt-[-17.5rem] !mb-24 xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] !relative"
                        data-cues="fadeIn"
                        data-delay={250}
                    ></figure>
                    <div className="flex flex-wrap mx-[-15px] max-sm:!mt-[-50px] !mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center !mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
                            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                                    <figure className="rounded-[0.4rem]">
                                        <Image
                                            className="rounded-[0.4rem]"
                                            alt="image"
                                            src="/assets/img/photos/ni9.png"
                                            width={293}
                                            height={260}
                                        />
                                    </figure>
                                </div>

                                {/*/column */}

                                {/*/column */}
                            </div>
                            {/*/.row */}
                        </div>
                        {/*/column */}
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[80px]">
                            <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !mb-5">
                                We believe in making shopping better and easier
                                for customers and retailers alike.
                            </h3>
                            <p className="!mb-6">
                                DocketRockit is more than a digital receipt
                                app—it&apos;s a powerful retail engagement and
                                analytics platform. Discover how we are
                                transforming digital receipts and providing a
                                better service for your business.
                            </p>

                            {/*/.row */}
                        </div>
                        {/*/column */}
                    </div>
                    {/*/.row */}

                    {/*/.row */}
                </div>
                {/* /.container */}
            </section>
        </>
    );
};

export default RetailersAbout;
