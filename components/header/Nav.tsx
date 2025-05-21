'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import React from 'react';

import {
    blockItems,
    blogItems,
    demos,
    docsPages,
    otherPages,
    projectPages
} from '@/data/menu';

// Define types for menu items
interface MenuItem {
    id: string | number;
    href?: string;
    label?: string;
    title?: string;
    links?: MenuItem[];
    type?: string;
    src?: string;
    srcSet?: string;
    alt?: string;
    image?: string;
}

// Define interface for Bootstrap Dropdown
interface BootstrapDropdown {
    _element: HTMLElement;
    toggle: () => void;
}

interface NavProps {
    color?: string;
}

export default function Nav({ color = '#fab758' }: NavProps) {
    useEffect(() => {
        // Dynamically import Bootstrap
        import('bootstrap').then((Bootstrap) => {
            const CLASS_NAME = 'has-child-dropdown-show';

            // Save the original toggle function
            const originalToggle = Bootstrap.Dropdown.prototype.toggle;

            // Override the toggle function
            Bootstrap.Dropdown.prototype.toggle = function () {
                // Remove the CLASS_NAME from all dropdowns
                document.querySelectorAll('.' + CLASS_NAME).forEach((e) => {
                    e.classList.remove(CLASS_NAME);
                });

                // Traverse up through the closest dropdown parents
                const element = this as unknown as BootstrapDropdown;
                if (element._element) {
                    const dropdownElement =
                        element._element.closest('.dropdown');
                    if (dropdownElement) {
                        // Cast parentNode to Element to access closest method
                        const parentElement =
                            dropdownElement.parentNode as Element;
                        let dd = parentElement
                            ? parentElement.closest('.dropdown')
                            : null;

                        // Loop through parent dropdowns and add the class
                        while (dd) {
                            dd.classList.add(CLASS_NAME);
                            const nextParent = dd.parentNode as Element;
                            // If we've reached the document or html element, stop traversing
                            if (!nextParent || nextParent.nodeName === 'HTML') {
                                break;
                            }
                            dd = nextParent.closest('.dropdown');
                        }
                    }
                }

                // Call the original toggle function
                return originalToggle.call(this);
            };

            // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
            document.querySelectorAll('.dropdown').forEach((dd) => {
                dd.addEventListener(
                    'hide.bs.dropdown',
                    function (this: HTMLElement, e: Event) {
                        if (this.classList.contains(CLASS_NAME)) {
                            this.classList.remove(CLASS_NAME);
                            e.preventDefault();
                        }
                        e.stopPropagation();
                    }
                );
            });
        });

        // Optional cleanup function for any potential side effects
        return () => {
            // Cleanup code here (if needed)
        };
    }, []);

    const pathname = usePathname();

    const getActiveParent = (menuLinks: MenuItem[]): MenuItem | undefined => {
        return menuLinks.find((parent) => {
            if (parent.links) {
                return parent.links.some((link) => link.href === pathname);
            }
            return parent.href === pathname;
        });
    };

    return (
        <ul
            className="navbar-nav"
            style={{ '--current-color': color } as React.CSSProperties}
        >
            <li className="nav-item dropdown dropdown-mega">
                <Link
                    className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
                        pathname === '/' ? '!text-[var(--current-color)]' : ''
                    } `}
                    href="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item dropdown">
                <Link
                    className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
                        pathname === '/consumers'
                            ? '!text-[var(--current-color)]'
                            : ''
                    } `}
                    href="/consumers"
                >
                    For Consumers
                </Link>
            </li>
            <li className="nav-item dropdown">
                <Link
                    className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]  ${
                        pathname === '/retailers'
                            ? '!text-[var(--current-color)]'
                            : ''
                    } `}
                    href="/retailers"
                >
                    For Retailers
                </Link>
            </li>
            <li className="nav-item dropdown">
                <Link
                    className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
                        pathname === '/about'
                            ? '!text-[var(--current-color)]'
                            : ''
                    } `}
                    href="/about"
                >
                    About
                </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega">
                <Link
                    className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
                        pathname === '/team'
                            ? '!text-[var(--current-color)]'
                            : ''
                    } `}
                    href="/team"
                >
                    Team
                </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega">
                <Link
                    className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
                        pathname === '/contact'
                            ? '!text-[var(--current-color)]'
                            : ''
                    } `}
                    href="/contact"
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}
