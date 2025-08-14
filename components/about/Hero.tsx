import Image from 'next/image';

export default function Hero() {
    return (
        <section className="wrapper !bg-[#f0f0f8] pt-18">
            <div className="container pt-10 lg:pt-14 xl:!pt-14 xxl:!pt-10 lg:pb-10 xl:pb-10 xxl:pb-0">
                <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center text-center lg:text-left xl:text-left">
                    <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
                        <h1 className="xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-semibold !mb-4 xl:!mr-5 xl:!mt-[-2.5rem] lg:!mt-[-2.5rem]">
                            {`We've put together the best team `}
                            <br className="hidden md:block xl:!hidden lg:!hidden" />
                            <span className="!text-[#605dba]">
                                {`to ensure that you're in good hands at
                                DocketRockit`}
                            </span>
                        </h1>
                        <p className="lead !text-[1.2rem] !leading-[1.5] !mb-7 xxl:!pr-20">
                            Read below about our leadership team and get in
                            touch
                        </p>
                    </div>
                    {/*/column */}
                    <div className="w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 !mx-auto flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-5 md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px]">
                        <Image
                            className="max-w-full h-auto !mb-[-3.5rem] md:!mb-[-4.5rem] lg:!mb-[-9rem] xl:!mb-[-9rem]"
                            data-cue="fadeIn"
                            data-delay={300}
                            alt="image"
                            src="/assets/img/photos/3d11.png"
                            width={800}
                            height={1080}
                        />
                    </div>
                    {/*/column */}
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
    );
}
