import React, { useState, useEffect, useCallback } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { galleryData } from '@/Assets/data/galleryData';

// ── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ src, onClose, onPrev, onNext }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape')     onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft')  onPrev();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div
            id="gallery-lightbox"
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                id="lightbox-close"
                onClick={onClose}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Prev */}
            <button
                id="lightbox-prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next */}
            <button
                id="lightbox-next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Image */}
            <img
                src={src}
                alt="Gallery"
                onClick={(e) => e.stopPropagation()}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
        </div>
    );
}

// ── Main Gallery Page ────────────────────────────────────────────────────────
const Gallery = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 500, once: true, easing: 'ease-out-cubic' });
    }, []);

    const open  = useCallback((idx) => setLightboxIndex(idx), []);
    const close = useCallback(() => setLightboxIndex(null), []);
    const prev  = useCallback(() => setLightboxIndex(i => (i - 1 + galleryData.length) % galleryData.length), []);
    const next  = useCallback(() => setLightboxIndex(i => (i + 1) % galleryData.length), []);

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Gallery | Fayyfir" />

            {/* ── Hero ─────────────────────────────── */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <img
                    src={galleryData[0]}
                    alt="Gallery Hero"
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

                <div className="relative z-10 text-center px-4 space-y-3" data-aos="zoom-out">
                    <nav className="flex justify-center items-center gap-3 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">
                        <Link href="/" className="hover:text-white transition-all">Home</Link>
                        <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                        <span className="text-white/60">Gallery</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                        Our Gallery
                    </h1>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </div>
            </section>

            {/* ── Grid ─────────────────────────────── */}
            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-14">
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryData.map((src, idx) => (
                        <div
                            key={idx}
                            id={`gallery-item-${idx}`}
                            data-aos="fade-up"
                            data-aos-delay={(idx % 8) * 60}
                            onClick={() => open(idx)}
                            className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group relative"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                            />
                            {/* subtle hover dimming */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Lightbox ─────────────────────────── */}
            {lightboxIndex !== null && (
                <Lightbox
                    src={galleryData[lightboxIndex]}
                    onClose={close}
                    onPrev={prev}
                    onNext={next}
                />
            )}
        </div>
    );
};

Gallery.layout = page => <MainLayout children={page} />;

export default Gallery;
