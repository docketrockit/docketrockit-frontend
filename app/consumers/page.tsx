import type { Metadata } from 'next';
import Head from 'next/head';

import ConsumersHero from '@/components/consumers/ConsumersHero';
import ConsumersMainSection from '@/components/consumers/ConsumersMainSection';
import { PageMetadata, generateStructuredData } from '@/lib/structureData';

export const metadata: Metadata = {
    title: 'Consumers',
    description: 'See what we do for consumers'
};

const ConsumersPage = () => {
    const metadata: PageMetadata = {
        title: 'Consumers',
        description: 'See what we do for consumers',
        url: '/consumers',
        datePublished: '2025-08-14T10:00:00Z',
        dateModified: '2025-08-14T12:00:00Z',
        authorName: 'Mark Rosenberg',
        image: '/assets/img/DocketRockitLogoHorizontal.png'
    };

    const structuredData = generateStructuredData(metadata);
    const canonicalUrl = `${process.env.NEXT_PUBLIC_APP_URL}/consumers`;
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
            <div className="pt-20">
                <ConsumersHero />
                <ConsumersMainSection />
            </div>
        </>
    );
};

export default ConsumersPage;
