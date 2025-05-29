import { Bookmark, Landmark, Search, Smartphone, Vault } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
    return (
        <>
            <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="md:w-11/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
                    <Image
                        className="!h-[3rem] absolute hidden xl:block lg:block"
                        style={{ top: '-20%', right: '-12%' }}
                        alt="image"
                        src="/assets/img/svg/doodle3.svg"
                        width={85}
                        height={82}
                    />
                    <Image
                        className="!h-[7rem] absolute hidden xl:block lg:block"
                        style={{ bottom: '5%', left: '-17%' }}
                        alt="image"
                        src="/assets/img/svg/doodle9.svg"
                        width={206}
                        height={214}
                    />
                    <h2 className="!text-[0.8rem] uppercase !text-[#aab0bc] !mb-3 !text-center !leading-[1.35]">
                        Why Choose DocketRockit?
                    </h2>
                    <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-14 !text-center">
                        Here are a few{' '}
                        <span className="text-gradient gradient-7">
                            reasons why
                        </span>{' '}
                        consumers choose DocketRockit.
                    </h3>
                </div>
                {/* /column */}
            </div>
            {/* /.row */}
            <div className="flex-wrap mx-[-15px] flex items-start !mb-2">
                <div
                    className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!sticky lg:!sticky"
                    style={{ top: '8rem' }}
                >
                    <figure className="m-0 p-0">
                        <Image
                            className="w-full max-w-full !h-auto"
                            alt="image"
                            src="/assets/img/photos/screen4.png"
                            width={630}
                            height={795}
                        />
                    </figure>
                </div>
                {/* /column */}
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto">
                    <div className="flex flex-row !mb-8">
                        <div>
                            <div className="svg-bg svg-bg-lg bg-[#e6e5f4] !rounded-[0.8rem] !mr-5">
                                <Vault className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                            </div>
                        </div>
                        <div>
                            <h4 className="!text-[1rem]">
                                Single respository of digital receipts
                            </h4>
                            <p>
                                No longer have your digital receipts across
                                emails, texts and websites, all your receipts
                                are now in one place for you to find!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row !mb-8">
                        <div>
                            <div className="svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] !mr-5">
                                <Search className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                            </div>
                        </div>
                        <div>
                            <h4 className="!text-[1rem]">
                                Simple search to find any receipt
                            </h4>
                            <p>
                                Search by a variety of filters, including dates,
                                retailer, products, cost or category
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row !mb-8">
                        <div>
                            <div className="svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] !mr-5">
                                <Bookmark className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                            </div>
                        </div>
                        <div>
                            <h4 className="!text-[1rem]">
                                Categorise receipts for business and personal
                            </h4>
                            <p>
                                Make expense management easy, being able to
                                categorise receipts based on the purchase. Not
                                only under business or personal, but create
                                custom categories as well
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row !mb-8">
                        <div>
                            <div className="svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] !mr-5">
                                <Landmark className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                            </div>
                        </div>
                        <div>
                            <h4 className="!text-[1rem]">
                                Get a full summary of expenditure for expenses
                                and tax
                            </h4>
                            <p>
                                Make tax time easy, exporting a summary of your
                                purchases, and for even better efficiencies,
                                export to the top financial products
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row !mb-8">
                        <div>
                            <div className="svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] !mr-5">
                                <Smartphone className="svg-inject icon-svg solid text-[#343f52] text-navy" />
                            </div>
                        </div>
                        <div>
                            <h4 className="!text-[1rem]">
                                Straightforward mobile app and web portal
                            </h4>
                            <p>
                                {`Everything is easy to use, so simple, you'll be
                                wanting to buy more and more`}
                            </p>
                        </div>
                    </div>
                </div>
                {/* /column */}
            </div>
        </>
    );
}
