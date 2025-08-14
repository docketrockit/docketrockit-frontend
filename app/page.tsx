import type { Metadata } from 'next';
import Head from 'next/head';

import siteMetadata from '@/utils/siteMetaData';
import Hero from '@/components/home/Hero';
import AppFeatures from '@/components/home/AppFeatures';
import Faqs from '@/components/home/Faqs';
import Features from '@/components/home/Features';
import Cta from '@/components/home/Cta';
import { PageMetadata, generateStructuredData } from '@/lib/structureData';

export function generateMetadata(): Metadata {
    return {
        title: ` The next wave in digital receipting`,
        description: 'Learn what DocketRockit is all about!',
        openGraph: {
            title: 'DocketRockit - The next wave in digital receipting!',
            description: 'Learn what DocketRockit is all about!',
            url: `${siteMetadata.siteUrl}/`,
            siteName: siteMetadata.title,
            locale: 'en_AU',
            type: 'article',
            publishedTime: '2024-08-15 13:00:00',
            modifiedTime: '2024-08-15 13:00:00',
            authors: [siteMetadata.author]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'DocketRockit - The next wave in digital receipting!',
            description: 'Learn what DocketRockit is all about!'
        }
    };
}

const HomePage = () => {
    const metadata: PageMetadata = {
        title: 'DocketRockit',
        description: 'Learn what DocketRockit is all about!',
        url: '/',
        datePublished: '2025-08-14T10:00:00Z',
        dateModified: '2025-08-14T12:00:00Z',
        authorName: 'Mark Rosenberg',
        image: '/assets/img/DocketRockitLogoHorizontal.png'
    };

    const structuredData = generateStructuredData(metadata);
    const canonicalUrl = `${process.env.NEXT_PUBLIC_APP_URL}`;

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
            <Hero />
            <AppFeatures />
            <Faqs />
            <section className="wrapper !bg-[#ffffff]">
                <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                    <Features />
                </div>
            </section>
            <Cta />
        </>
    );
};

export default HomePage;
