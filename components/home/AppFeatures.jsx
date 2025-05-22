import {
    Bookmark,
    FolderOpen,
    HandCoins,
    House,
    Landmark,
    PackageOpen,
    Search,
    Smartphone,
    Vault
} from 'lucide-react';
import Image from 'next/image';

const AppFeatures = () => {
    return (
        <section className="wrapper !bg-[#ffffff]">
            <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
                        <Image
                            className="!h-[3rem] absolute hidden xl:block lg:block"
                            style={{ top: '-45%', left: '23%' }}
                            alt="image"
                            src="/assets/img/svg/doodle3.svg"
                            width={85}
                            height={82}
                        />
                        <Image
                            className="h-8 absolute hidden xl:block lg:block"
                            style={{ top: '6%', right: '2%' }}
                            alt="image"
                            src="/assets/img/svg/doodle4.svg"
                            width={42}
                            height={55}
                        />
                        {/* <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3">
                            App Features
                        </h2> */}
                        <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] !mb-12 lg:!px-5 xl:!px-0 xxl:!px-6">
                            DocketRockit makes your spending
                            <span className="text-gradient gradient-7">
                                stress-free
                            </span>{' '}
                            so you can find your receipts when you want.
                        </h3>
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
                <div className="flex flex-wrap mx-[-15px] !mb-40">
                    <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center">
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] !mb-4">
                                    <FolderOpen className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Single repository of digital receipts
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] !mb-4">
                                    <Search className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Simple search to find any receipt
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg bg-[#e9eaf8] !rounded-[0.8rem] !mb-4">
                                    <Smartphone className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Straightforward mobile app and web portal
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] !mb-4">
                                    <Bookmark className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Categorise receipts for business and
                                    personal
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg bg-[#f0eaf6] !rounded-[0.8rem] !mb-4">
                                    <PackageOpen className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Find receipts for returns / warranties
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg bg-[#feece9] !rounded-[0.8rem] !mb-4">
                                    <House className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Easy collection of receipts for insurance
                                    claims
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] !mb-4">
                                    <Landmark className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Get a full summary of expenditure for
                                    expenses and tax
                                </h4>
                            </div>
                            {/*/column */}
                            <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#eaf3ef] !rounded-[0.8rem] !mb-4">
                                    <HandCoins className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                                </div>
                                <h4 className="!text-[1rem]">
                                    Find receipts effortlessly for cashbacks
                                </h4>
                            </div>
                            {/*/column */}
                        </div>
                        {/*/.row */}
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="md:w-10/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
                        <Image
                            className="!w-[5rem] absolute hidden xl:block lg:block"
                            data-delay={1800}
                            style={{ bottom: '-60%', right: '10%' }}
                            alt="image"
                            src="/assets/img/svg/doodle5.svg"
                            width={148}
                            height={172}
                        />
                        <Image
                            className="!h-[5rem] !absolute hidden xl:block lg:block"
                            data-delay={1800}
                            style={{ top: '-40%', left: '-5%' }}
                            alt="image"
                            src="/assets/img/svg/doodle6.svg"
                            width={976}
                            height={117}
                        />
                        <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                            How It Works
                        </h2>
                        <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-8 xl:!px-6">
                            Download the app, create your profile and
                            <span className="text-gradient gradient-7">
                                voilà
                            </span>
                            , you're all set!
                        </h3>
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
                <div className="flex flex-wrap mx-[-15px] lg:!mb-40 xl:!mb-[17.5rem]">
                    <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[-15px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !text-center items-center">
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-[-2.5rem] lg:!mb-0 xl:!mb-0 !mt-[50px] xl:!mt-0 lg:!mt-0">
                                <figure className="mx-auto">
                                    <Image
                                        alt="image"
                                        src="/assets/img/photos/screen1.png"
                                        width={373}
                                        height={682}
                                    />
                                </figure>
                            </div>
                            {/* /column */}
                            <div className="w-full xl:!hidden lg:!hidden !px-[15px] !mt-[50px] xl:!mt-0 lg:!mt-0" />
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!-order-1 xl:!-order-1 !mt-[50px] xl:!mt-0 lg:!mt-0">
                                <div className="!mb-8">
                                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                                        01
                                    </span>
                                    <h4 className="!text-[1rem]">
                                        Download Application
                                    </h4>
                                    <p className="!mb-0 xl:!px-7">
                                        Nulla vitae elit libero, a pharetra
                                        augue. Donec id elit non mi porta
                                        gravida at eget metus.
                                    </p>
                                </div>
                                {/* /div */}
                                <div>
                                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                                        02
                                    </span>
                                    <h4 className="!text-[1rem]">
                                        Quick Registration
                                    </h4>
                                    <p className="!mb-0 xl:!px-7">
                                        Nulla vitae elit libero, a pharetra
                                        augue. Donec id elit non mi porta
                                        gravida at eget metus.
                                    </p>
                                </div>
                                {/* /div */}
                            </div>
                            {/* /column */}
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[50px] xl:!mt-0 lg:!mt-0">
                                <div className="!mb-8">
                                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                                        03
                                    </span>
                                    <h4 className="!text-[1rem]">
                                        Track Your Spending
                                    </h4>
                                    <p className="!mb-0 xl:!px-7">
                                        Nulla vitae elit libero, a pharetra
                                        augue. Donec id elit non mi porta
                                        gravida at eget metus.
                                    </p>
                                </div>
                                {/* /div */}
                                <div>
                                    <span className="xl:!text-[3rem] !text-[calc(1.425rem_+_2.1vw)] !leading-none !mb-3 font-medium text-gradient gradient-7">
                                        04
                                    </span>
                                    <h4 className="!text-[1rem]">
                                        Have Total Control
                                    </h4>
                                    <p className="!mb-0 xl:!px-7">
                                        Nulla vitae elit libero, a pharetra
                                        augue. Donec id elit non mi porta
                                        gravida at eget metus.
                                    </p>
                                </div>
                                {/* /div */}
                            </div>
                            {/* /column */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container */}
        </section>
    );
};

export default AppFeatures;
