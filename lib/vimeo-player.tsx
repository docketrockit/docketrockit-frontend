'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
    defaultLayoutIcons,
    DefaultVideoLayout
} from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

interface VimeoPlayerProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function VimeoPlayer({
    videoId,
    title = 'Vimeo Video',
    className = ''
}: VimeoPlayerProps) {
    // Handle both standard IDs and ID/hash format
    const vimeoSrc = videoId.includes('/')
        ? `vimeo/${videoId.split('/')[0]}?h=${videoId.split('/')[1]}`
        : `vimeo/${videoId}`;

    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            <MediaPlayer
                title={title}
                src={vimeoSrc}
                crossOrigin
                playsInline
                className="w-full aspect-video bg-black rounded-lg overflow-hidden"
            >
                <MediaProvider />
                <DefaultVideoLayout
                    thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                    icons={defaultLayoutIcons}
                />
            </MediaPlayer>
        </div>
    );
}
