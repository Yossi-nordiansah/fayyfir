import React from 'react';
import { Link } from '@inertiajs/react';
import bgCTA from '../../Assets/images/bgcta.png';

export default function CallToAction() {
    return (
        <section className="relative pt-5 pb-20 md:px-[5%] px-2 overflow-hidden">
            <div className="container mx-auto">
                <div 
                    className="relative rounded-xl md:rounded-[3rem] overflow-hidden md:bg-cover md:bg-center bg-[position:70%_center] min-h-[450px] md:min-h-[300px] flex items-center shadow-2xl group"
                    style={{ backgroundImage: `url(${bgCTA})` }}
                >
                    {/* Modern Gradient Overlay - Darker on the left for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/10 transition-opacity duration-700 group-hover:opacity-90"></div>

                    {/* Content Container */}
                    <div className="relative z-10 w-full md:w-3/5 px-6 py-10 md:p-10 md:p-16 lg:p-16 space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20 backdrop-blur-sm">
                                Work With Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                                Let's Build a <br />
                                <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-500">
                                    Global Future
                                </span> Together.
                            </h2>
                        </div>
                        
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg">
                            We bridge the gap between Indonesia's finest natural resources and the global market. Join our network of successful partners today.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <Link 
                                href="/contact" 
                                className="group/btn relative inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold overflow-hidden transition-all duration-500 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.6)] active:scale-95 cursor-pointer"
                            >
                                <span className="relative z-10 flex items-center">
                                    Contact Us
                                    <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-400 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-20"></div>
                            </Link>

                            <Link 
                                href="/about" 
                                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl border-2 border-white/20 text-white font-bold overflow-hidden transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white cursor-pointer"
                            >
                                See Gallery
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-[100px]"></div>
                </div>
            </div>
        </section>
    );
}
