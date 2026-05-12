import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import loadGif from '@/Assets/images/load.gif';

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timeoutId;

        const start = () => {
            // Add a small delay to avoid flickering for very fast requests
            timeoutId = setTimeout(() => setIsLoading(true), 150);
        };

        const finish = () => {
            clearTimeout(timeoutId);
            setIsLoading(false);
        };

        router.on('start', start);
        router.on('finish', finish);

        return () => {
            router.off('start', start);
            router.off('finish', finish);
            clearTimeout(timeoutId);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300">
            <img src={loadGif} alt="Loading..." className="w-44 h-44 object-contain" />
        </div>
    );
}
