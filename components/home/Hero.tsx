import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]"
            style={{ backgroundImage: 'url(/assets/img/photos/bg23.png)' }}
        >
            <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-9">
                <div className="flex flex-wrap mx-0 !mt-[-50px] items-center text-center lg:text-left xl:text-left">
                    <div
                        className="xl:w-6/12 lg:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative !mt-[50px]"
                        data-cues="slideInDown"
                        data-group="page-title"
                        data-delay={700}
                    >
                        <Image
                            className="h-9 !absolute hidden xl:block lg:block"
                            data-cue="fadeIn"
                            data-delay={3000}
                            style={{ top: '-9%', left: '-6%' }}
                            alt="image"
                            src="/assets/img/svg/doodle1.svg"
                            width={74}
                            height={72}
                        />
                        <Image
                            className="!h-[5rem] !absolute hidden xl:block lg:block"
                            data-cue="fadeIn"
                            data-delay={3000}
                            style={{ bottom: '9%', right: '-22%' }}
                            alt="image"
                            src="/assets/img/svg/doodle2.svg"
                            width={152}
                            height={147}
                        />
                        <h1 className="xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] font-semibold !leading-[1.15] !mb-4">
                            Manage all your receipts no matter where you shop,{' '}
                            <span className="text-gradient gradient-7">
                                all in one place.
                            </span>
                        </h1>
                        <p className="lead !text-[1.2rem] !leading-[1.5] !font-normal !mb-7">
                            {`DocketRockit is the next wave in digital receipting!
                            Soon, you'll never lose another receipt!`}
                        </p>
                        <div
                            className="flex justify-center lg:!justify-start xl:!justify-start"
                            data-cues="slideInDown"
                            data-group="page-title-buttons"
                            data-delay={1800}
                        >
                            <span className="inline-flex">&nbsp;</span>
                            <span className="inline-flex">&nbsp;</span>
                        </div>
                    </div>
                    {/* /column */}
                    <div
                        className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !ml-auto !mb-[-10rem] xxl:!mb-[-15rem]"
                        data-cues="slideInDown"
                        data-delay={600}
                    >
                        <figure className="m-0 p-0">
                            <Image
                                className="w-full max-w-full !h-auto"
                                alt="image"
                                src="/assets/img/photos/i7.png"
                                width={645}
                                height={735}
                            />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden" style={{ zIndex: 1 }}>
                <div className="divider !text-[#fefefe] mx-[-0.5rem]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 100"
                    >
                        <g fill="currentColor">
                            <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
