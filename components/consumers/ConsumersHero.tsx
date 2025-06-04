import Image from 'next/image';
import ConsumersHeroSubscribe from './ConsumersHeroSubscribe';

const ConsumersHero = () => {
    return (
        <section className="wrapper !bg-[#ffffff]">
            <div className="container-card">
                <div
                    className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 !mt-2 !mb-5 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)] xxl:!rounded-[.8rem] rounded-0"
                    style={{
                        backgroundImage: 'url(/assets/img/photos/bg22.png)'
                    }}
                >
                    <div className="card-body py-[4.5rem] px-0">
                        <div className="container">
                            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center text-center lg:text-left xl:text-left">
                                <div
                                    className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full"
                                    data-cues="slideInDown"
                                    data-group="page-title"
                                    data-delay={900}
                                >
                                    <h1 className="xl:!text-[2.3rem] !text-[calc(1.355rem_+_1.26vw)] font-semibold !leading-[1.2] !tracking-[normal] !mb-4 xl:!mr-5 xxl:!mr-0">
                                        Digital{' '}
                                        <span className="text-gradient gradient-1">
                                            Receipts
                                        </span>{' '}
                                        Sorted
                                    </h1>
                                    <p className="lead !text-[1.15rem] !leading-[1.5] font-medium !mb-7 xxl:!pr-20">
                                        Tap. Pay. Done. With DocketRockit, your
                                        receipts go straight to your
                                        phone—instantly searchable, always
                                        organised, never lost.
                                    </p>
                                    <div>
                                        <p className="lead !text-[0.9rem] !leading-[1.5] font-medium !mb-7 xxl:!pr-20">
                                            Get notified when we launch
                                        </p>
                                        <ConsumersHeroSubscribe />
                                    </div>
                                </div>
                                {/*/column */}
                                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:!px-[20px] xl:!px-[35px] !mt-[50px] max-w-full">
                                    <Image
                                        className="max-w-full h-auto !mb-[-8rem]"
                                        data-cue="fadeIn"
                                        data-delay={300}
                                        alt="image"
                                        src="/assets/img/photos/3d6.png"
                                        width={800}
                                        height={817}
                                    />
                                </div>
                                {/*/column */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container */}
                    </div>
                    {/*/.card-body */}
                </div>
                {/*/.card */}
            </div>
            {/* /.container-card */}
        </section>
    );
};

export default ConsumersHero;
