import type { Metadata } from 'next';
import Head from 'next/head';

import Hero from '@/components/about/Hero';
import TeamBlock from '@/components/about/TeamBlock';
import AboutBlock from '@/components/about/AboutBlock';
import { PageMetadata, generateStructuredData } from '@/lib/structureData';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn about us and our team'
};

const page = () => {
    const metadata: PageMetadata = {
        title: 'About',
        description: 'Learn about us and our team',
        url: '/about',
        datePublished: '2025-08-14T10:00:00Z',
        dateModified: '2025-08-14T12:00:00Z',
        authorName: 'Mark Rosenberg',
        image: '/assets/img/DocketRockitLogoHorizontal.png'
    };

    const structuredData = generateStructuredData(metadata);
    const canonicalUrl = `${process.env.NEXT_PUBLIC_APP_URL}/about`;
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
            <div>
                <Hero />
                <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
                    <div className="container py-[2.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                        <AboutBlock />
                    </div>
                    {/* /.container */}
                </section>
                <TeamBlock />
            </div>
        </>
    );
};
export default page;
