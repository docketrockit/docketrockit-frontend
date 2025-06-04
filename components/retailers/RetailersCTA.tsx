import Link from 'next/link';

const RetailersCTA = () => {
    return (
        <div id="snippet-4" className="!bg-[#ffffff] mt-1 xl:mt-10 w-full">
            {/* <div className=""> */}
            <div
                className="image-wrapper bg-full bg-image bg-overlay bg-overlay-300 !text-white !bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                style={{
                    backgroundImage: 'url(/assets/img/photos/bg16.png)'
                }}
            >
                <div className="card-body !p-10 xl:!p-14">
                    <div className="flex flex-wrap mx-[-15px] !text-center">
                        <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                            <h2 className="!text-[0.8rem] !leading-[1.35] uppercase !text-white !mb-3">
                                Join the Future of Retail
                            </h2>
                            <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-8 xl:!px-8 lg:!px-8 !text-white">
                                DocketRockit is ready to work with{` `}
                                <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                                    {` `}innovative{` `}
                                </span>
                                retailers who want to lead the way in digital
                                transformation, sustainability, and customer
                                satisfaction.
                            </h3>
                        </div>
                        {/* /column */}
                    </div>
                    {/* /.row */}
                    <div className="flex justify-center">
                        <span>
                            <Link
                                href="/contact"
                                className="btn btn-white rounded"
                            >
                                Contact Us
                            </Link>
                        </span>
                    </div>
                </div>
                {/*/.card-body */}
                {/*/.card */}
            </div>
            {/* /.container */}

            {/* /.container */}
        </div>
    );
};

export default RetailersCTA;
