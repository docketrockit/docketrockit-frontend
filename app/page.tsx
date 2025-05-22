import type { Metadata } from 'next';

import siteMetadata from '@/utils/siteMetaData';
import Hero from '@/components/home/Hero';
import AppFeatures from '@/components/home/AppFeatures';
import Faqs from '@/components/home/Faqs';

// import Footer26 from '@/components/footers/Footer26';
// import Header27 from '@/components/headers/Header27';
// import Cta from '@/components/homes/home-29/Cta';
// import Features from '@/components/homes/home-29/Features';
// import Testimonials from '@/components/homes/home-29/Testimonials';

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
    return (
        <>
            <Hero />
            <AppFeatures />
            <Faqs />
            {/*            <section className="wrapper !bg-[#ffffff]">
                            <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                                <Features />
                                <Testimonials />
                            </div>
                        </section>
                        <Cta /> */}
        </>
    );
};

export default HomePage;
