import type { Metadata } from 'next';
import Head from 'next/head';

import RetailersAbout from '@/components/retailers/RetailersAbout';
import RetailerBenefits from '@/components/retailers/RetailersBenefits';
import RetailersCallOut from '@/components/retailers/RetailersCallOut';
import RetailersCTA from '@/components/retailers/RetailersCTA';
import RetailersHero from '@/components/retailers/RetailersHero';
import { PageMetadata, generateStructuredData } from '@/lib/structureData';

export const metadata: Metadata = {
    title: 'Retailers',
    description: 'More about what we do for retailers'
};

const RetailersPage = () => {
    const metadata: PageMetadata = {
        title: 'Retailers',
        description: 'More about what we do for retailers',
        url: '/retailers',
        datePublished: '2025-08-14T10:00:00Z',
        dateModified: '2025-08-14T12:00:00Z',
        authorName: 'Mark Rosenberg',
        image: '/assets/img/DocketRockitLogoHorizontal.png'
    };

    const structuredData = generateStructuredData(metadata);
    const canonicalUrl = `${process.env.NEXT_PUBLIC_APP_URL}/retailers`;
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
            <div className="font-space demo32">
                <div className="box-layout">
                    <div className="content-wrapper !bg-[rgba(254,254,254,1)] grow shrink-0">
                        <RetailersHero />
                        <RetailersAbout />
                        <RetailerBenefits />
                        <RetailersCallOut />
                        <RetailersCTA />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RetailersPage;
