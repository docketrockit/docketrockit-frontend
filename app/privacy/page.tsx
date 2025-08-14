import type { Metadata } from 'next';
import Head from 'next/head';

import PrivacyPolicies from '@/components/privacy/Privacy';
import { PageMetadata, generateStructuredData } from '@/lib/structureData';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'DocketRockit Privacy Policy'
};

const TermsPage = () => {
    const metadata: PageMetadata = {
        title: 'Privacy Policy',
        description: 'DocketRockit Privacy Policy',
        url: '/privacy',
        datePublished: '2025-08-14T10:00:00Z',
        dateModified: '2025-08-14T12:00:00Z',
        authorName: 'Mark Rosenberg',
        image: '/assets/img/DocketRockitLogoHorizontal.png'
    };

    const structuredData = generateStructuredData(metadata);
    const canonicalUrl = `${process.env.NEXT_PUBLIC_APP_URL}/privacy`;
    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </Head>
            <div className="grow shrink-0">
                <section className="wrapper bg-soft-primary !bg-[#edf2fc]">
                    <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
                        <div className="flex flex-wrap mx-[-15px]">
                            <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                                    Privacy Policy
                                </h1>
                                <nav
                                    className="inline-block"
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb flex flex-wrap bg-[none] !mb-4 p-0 !rounded-none list-none">
                                        <li className="breadcrumb-item flex !text-[#60697b]">
                                            <a
                                                className="!text-[#60697b] hover:!text-[#3f78e0]"
                                                href="#"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active flex !text-[#60697b] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(96,105,123,.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons"
                                            aria-current="page"
                                        >
                                            Privacy Policy
                                        </li>
                                    </ol>
                                </nav>
                                {/* /nav */}
                            </div>
                            {/* /column */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                </section>

                <PrivacyPolicies />
            </div>
        </>
    );
};

export default TermsPage;
