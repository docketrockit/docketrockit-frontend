import type React from 'react';
import { Suspense } from 'react';
import type { Metadata } from 'next';

import '../public/assets/style.css';
// import 'photoswipe/dist/photoswipe.css';
import ProgressWrap from '@/components/common/ProgressWrap';
import ClientInitialisers from '@/components/client/ClientInitialisers';
import { ibmPlexSerif, manrope } from './fonts';
import Header from '@/components/header/Header';
import siteMetadata from '@/utils/siteMetaData';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `${siteMetadata.title} | %s`,
        default: siteMetadata.title // a default is required when creating a template
    },
    applicationName: siteMetadata.title,
    description: siteMetadata.description,
    appleWebApp: {
        title: siteMetadata.title,
        statusBarStyle: 'default',
        capable: true
    },
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [siteMetadata.siteLogo],
        locale: 'en_AU',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        images: [siteMetadata.siteLogo]
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${ibmPlexSerif.className} ${manrope.className}`}
        >
            <head></head>

            <body>
                <Suspense fallback={null}>
                    <ClientInitialisers />
                    <div className="color-grape font-unicons demo29">
                        <div className="grow shrink-0">
                            <Header />
                            {children}
                        </div>
                        <Footer />
                    </div>
                    <ProgressWrap />
                </Suspense>
            </body>
        </html>
    );
}
