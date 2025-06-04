import Image from 'next/image';

const RetailerBenefits = () => {
    return (
        <section className="wrapper bg-[#262b32] opacity-100 !text-[#cacaca]">
            <div className="container py-[2rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                        <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-white !mb-3">
                            Benefits to Retailers
                        </h2>
                        <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold !text-white !mb-10">
                            We&apos;ve designed DocketRockit to meet your
                            business needs...
                        </h3>
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-45px]">
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    className="!w-[4rem] !mr-5"
                                    alt="image"
                                    src="/assets/img/photos/lock.png"
                                    width={438}
                                    height={327}
                                />
                            </div>
                            <div>
                                <h3 className="!mb-2 !text-white">
                                    Secure & Simplified Integration
                                </h3>
                                <p className="!mb-0">
                                    Easy to integrate with your POS or
                                    e-commerce platform, backed by
                                    enterprise-grade security.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    className="!w-[4rem] !mr-5"
                                    alt="image"
                                    src="/assets/img/photos/seedling.png"
                                    width={428}
                                    height={382}
                                />
                            </div>
                            <div>
                                <h3 className="!mb-2 !text-white">
                                    Support Your Environmental Targets
                                </h3>
                                <p className="!mb-0">
                                    Eliminate paper and reduce ink waste to
                                    support your sustainability goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    className="!w-[4rem] !mr-5"
                                    alt="image"
                                    src="/assets/img/photos/moneybag.png"
                                    width={446}
                                    height={428}
                                />
                            </div>
                            <div>
                                <h3 className="!mb-2 !text-white">
                                    Reduce Hardware & Maintenance Costs
                                </h3>
                                <p className="!mb-0">
                                    Cut ongoing costs by removing receipt
                                    printers and related maintenance.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    className="!w-[4rem] !mr-5"
                                    alt="image"
                                    src="/assets/img/photos/handshake.png"
                                    width={468}
                                    height={390}
                                />
                            </div>
                            <div>
                                <h3 className="!mb-2 !text-white">
                                    Partner with a Trusted Brand
                                </h3>
                                <p className="!mb-0">
                                    Enhance your brand by aligning with the #1
                                    digital receipt platform.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    className="!w-[4rem] !mr-5"
                                    alt="image"
                                    src="/assets/img/photos/repeat.png"
                                    width={435}
                                    height={403}
                                />
                            </div>
                            <div>
                                <h3 className="!mb-2 !text-white">
                                    Simplify Returns & Warranties
                                </h3>
                                <p className="!mb-0">
                                    Customers access receipts instantly, making
                                    returns and claims easy.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                    <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[45px]">
                        <div className="flex flex-row">
                            <div>
                                <Image
                                    className="!w-[4rem] !mr-5"
                                    alt="image"
                                    src="/assets/img/photos/barchart.png"
                                    width={417}
                                    height={393}
                                />
                            </div>
                            <div>
                                <h3 className="!mb-2 !text-white">
                                    Gain Market Intelligence
                                </h3>
                                <p className="!mb-0">
                                    Get anonymised insights on products, trends,
                                    aggregate market data and customer
                                    behaviour.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*/column */}
                </div>
                {/*/.row */}
            </div>
            {/* /.container */}
        </section>
    );
};

export default RetailerBenefits;
