import { WebPage, Article, WithContext } from 'schema-dts';

export interface PageMetadata {
    title: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
    authorName?: string;
    image?: string;
}

export function generateStructuredData(
    metadata: PageMetadata
): WithContext<WebPage | Article> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL; // Replace with your domain

    // Common WebPage schema
    const webPageSchema: WithContext<WebPage> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        url: `${baseUrl}${metadata.url}`,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}${metadata.url}`
        }
    };

    // Article schema (if the page is an article)
    const articleSchema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: metadata.title,
        description: metadata.description,
        url: `${baseUrl}${metadata.url}`,
        datePublished: metadata.datePublished || new Date().toISOString(),
        dateModified:
            metadata.dateModified ||
            metadata.datePublished ||
            new Date().toISOString(),
        author: metadata.authorName
            ? {
                  '@type': 'Person',
                  name: metadata.authorName
              }
            : undefined,
        image: metadata.image
            ? {
                  '@type': 'ImageObject',
                  url: `${baseUrl}${metadata.image}`
              }
            : undefined,
        publisher: {
            '@type': 'Organization',
            name: 'DocketRockit', // Replace with your organization name
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/assets/img/DocketRockitLogoHorizontal.png` // Replace with your logo URL
            }
        }
    };

    // Return Article schema if it's an article, otherwise WebPage
    return metadata.datePublished ? articleSchema : webPageSchema;
}
