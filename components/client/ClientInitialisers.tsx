'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import iTooltip from 'itooltip';

import scrollQue from '@/utils/scrollCue.min.js';

export default function ClientInitialisers() {
    const pathname = usePathname();

    // Bootstrap initialization
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('bootstrap');
        }
    }, []);

    // ScrollQue initialization
    useEffect(() => {
        if (typeof window !== 'undefined') {
            scrollQue().init();
            window.dispatchEvent(new Event('scroll'));
        }
    }, [pathname]);

    // Tooltip and popover initialization
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );
        const popoverTriggerList = document.querySelectorAll(
            '[data-bs-toggle="popover"]'
        );

        if (tooltipTriggerList.length > 0 || popoverTriggerList.length > 0) {
            import('bootstrap').then((bootstrap) => {
                // Initialize tooltips
                const tooltipList = Array.from(tooltipTriggerList).map(
                    (tooltipTriggerEl) => {
                        return new bootstrap.Tooltip(tooltipTriggerEl, {
                            trigger: 'hover'
                        });
                    }
                );

                // Initialize popovers
                const popoverList = Array.from(popoverTriggerList).map(
                    (popoverTriggerEl) => {
                        return new bootstrap.Popover(popoverTriggerEl);
                    }
                );

                // Cleanup tooltips and popovers on component unmount
                return () => {
                    tooltipList.forEach((tooltip) => tooltip.dispose());
                    popoverList.forEach((popover) => popover.dispose());
                };
            });
        }
    }, [pathname]);

    // Navbar sticky behavior
    useEffect(() => {
        const handleSticky = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 120) {
                    navbar.classList.add('fixed');
                    navbar.classList.add('navbar-clone');
                    if (
                        navbar.classList.contains('transparent') &&
                        navbar.classList.contains('navbar-dark')
                    ) {
                        navbar.classList.remove('navbar-dark');
                        navbar.classList.add('navbar-light');
                        navbar.classList.add('navbar-dark-removed');
                    }
                } else {
                    navbar.classList.remove('fixed');
                    navbar.classList.remove('navbar-clone');
                    if (
                        navbar.classList.contains('transparent') &&
                        navbar.classList.contains('navbar-dark-removed')
                    ) {
                        navbar.classList.add('navbar-dark');
                        navbar.classList.remove('navbar-light');
                        navbar.classList.remove('navbar-dark-removed');
                    }
                }
                if (window.scrollY > 300) {
                    navbar.classList.add('navbar-stick');
                } else {
                    navbar.classList.remove('navbar-stick');
                }
            }
        };

        window.addEventListener('scroll', handleSticky);

        return () => {
            window.removeEventListener('scroll', handleSticky);
        };
    }, []);

    // Modal and offcanvas cleanup on route change
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Close any open modal
            import('bootstrap').then((bootstrap) => {
                // Close any open offcanvas
                const offcanvasElements =
                    document.querySelectorAll('.offcanvas.show');
                offcanvasElements.forEach((offcanvas) => {
                    const offcanvasInstance =
                        bootstrap.Offcanvas.getInstance(offcanvas);
                    if (offcanvasInstance) {
                        offcanvasInstance.hide();
                    }
                });
            });

            // Select all elements with the class 'offcanvas-backdrop'
            const backdrops = document.querySelectorAll('.offcanvas-backdrop');

            // Check if any backdrop elements exist and remove them
            backdrops?.forEach((backdrop) => {
                backdrop?.remove();
            });
        }
    }, [pathname]);

    // iTooltip initialization
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tooltip = new iTooltip('.itooltip');
            tooltip.init({
                className: 'itooltip-inner',
                indentX: 15,
                indentY: 15,
                positionX: 'right',
                positionY: 'bottom'
            });
        }
    }, [pathname]);

    // Offcanvas navigation setup
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                import('bootstrap').then(({ Offcanvas }) => {
                    const navbar = document.querySelector('.navbar');
                    if (!navbar) return;

                    const navOffCanvasBtn =
                        document.querySelectorAll('.offcanvas-nav-btn');
                    const navOffCanvas = document.querySelector(
                        '.navbar:not(.navbar-clone) .offcanvas-nav'
                    );
                    if (!navOffCanvas) {
                        return;
                    }

                    const bsOffCanvas = new Offcanvas(navOffCanvas, {
                        scroll: true
                    });
                    const scrollLink = document.querySelectorAll(
                        '.onepage .navbar li a.scroll'
                    );
                    const searchOffcanvas =
                        document.getElementById('offcanvas-search');

                    const handleNavClick = () => {
                        bsOffCanvas.show();
                    };
                    const handleScrollClick = () => {
                        bsOffCanvas.hide();
                    };

                    navOffCanvasBtn.forEach((e) =>
                        e.addEventListener('click', handleNavClick)
                    );
                    scrollLink.forEach((e) =>
                        e.addEventListener('click', handleScrollClick)
                    );

                    if (searchOffcanvas) {
                        searchOffcanvas.addEventListener(
                            'shown.bs.offcanvas',
                            () => {
                                document.getElementById('search-form')?.focus();
                            }
                        );
                    }

                    return () => {
                        navOffCanvasBtn.forEach((e) =>
                            e.removeEventListener('click', handleNavClick)
                        );
                        scrollLink.forEach((e) =>
                            e.removeEventListener('click', handleScrollClick)
                        );
                    };
                });
            });
        }
    }, [pathname]);

    return null;
}
