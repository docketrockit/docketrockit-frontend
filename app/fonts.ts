// app/fonts.ts (or app/layout.tsx)
import { IBM_Plex_Serif, Manrope } from 'next/font/google';

export const ibmPlexSerif = IBM_Plex_Serif({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'optional'
});

export const manrope = Manrope({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'optional'
});
