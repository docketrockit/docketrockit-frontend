'use client';

import { useEffect, useRef } from 'react';

import { privacyPolicies } from '@/data/privacy';

const PrivacyPolicies = () => {
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const navLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            privacyPolicies.forEach(({ slug }) => {
                const section = sectionRefs.current[slug];
                if (!section) return;

                const offset = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollY >= offset && scrollY < offset + height) {
                    privacyPolicies.forEach(({ slug: otherSlug }) => {
                        const link = navLinkRefs.current[otherSlug];
                        if (link) link.classList.remove('active');
                    });
                    const activeLink = navLinkRefs.current[slug];
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick =
        (slug: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            sectionRefs.current[slug]?.scrollIntoView({ behavior: 'smooth' });
        };

    return (
        <div className="container">
            <div className="flex flex-wrap mx-0 space-x-5">
                <aside className="xl:w-3/12 hidden xl:block sticky top-0 py-24">
                    <nav id="sidebar-nav">
                        <ul className="pl-0 list-none">
                            {privacyPolicies.map((privacyPolicy, i) => (
                                <li
                                    key={privacyPolicy.slug}
                                    className=" first:mt-0"
                                >
                                    <a
                                        ref={(el) => {
                                            navLinkRefs.current[
                                                privacyPolicy.slug
                                            ] = el;
                                        }}
                                        className={`!py-2 nav-link scroll ${i === 0 ? 'active' : ''}`}
                                        href={`#${privacyPolicy.slug}`}
                                        onClick={handleClick(
                                            privacyPolicy.slug
                                        )}
                                    >
                                        {`${i + 1}. ${privacyPolicy.name}`}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <div className="xl:w-8/12 w-full">
                    {privacyPolicies.map((privacyPolicy, i) => (
                        <section
                            key={privacyPolicy.slug}
                            id={privacyPolicy.slug}
                            ref={(el) => {
                                sectionRefs.current[privacyPolicy.slug] = el;
                            }}
                            className={`wrapper ${i === privacyPolicies.length - 1 ? 'py-12' : i === 0 ? 'pt-24' : 'pt-12'}`}
                        >
                            <div className="card">
                                <div className="card-body !p-10">
                                    <h2 className="!mb-3 !leading-[1.35]">{`${i + 1}. ${privacyPolicy.name}`}</h2>
                                    {privacyPolicy.content()}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicies;
