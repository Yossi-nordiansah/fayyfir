import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../Assets/images/logo-footer.png';
import Flag from 'react-world-flags'

export default function Footer() {
    const products = [
        "Coconut Derivates Products",
        "Charcoal Briquette",
        "Spices",
        "Plam Cooking Oil",
        "Cocoa Powder",
        "Raw Cosmetic",
        "Coffee Been",
        "Handicraft",
        "Agarwood & Dehn Oud"
    ];

    const socialLinks = [
        { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
        { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01' },
        { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z' }
    ];

    return (
        <footer className="relative overflow-hidden bg-slate-950 pt-14 pb-14 text-slate-400 md:pt-24">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px] translate-y-1/2"></div>

            <div className="container relative z-10 mx-auto px-[5%]">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-8" data-aos="fade-up">
                        <Link href="/">
                            <img src={logo} alt="Fayyfir Logo" className="w-56 transition-transform duration-300 hover:scale-105" />
                        </Link>
                        <p className="text-base leading-relaxed">
                            Fayyfir is a premier Indonesian exporter dedicated to bringing the finest natural resources and processed products to the global stage. We prioritize quality, sustainability, and integrity in every shipment.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href="#" 
                                    className="group flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-8" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="mb-8 text-lg font-bold text-white tracking-wider uppercase">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Gallery', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                                        className="inline-flex items-center transition-colors hover:text-blue-500"
                                    >
                                        <span className="h-1 w-1 bg-blue-500 rounded-full mr-3 opacity-0 transition-all group-hover:opacity-100"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Grid */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="mb-8 text-lg font-bold text-white tracking-wider uppercase">Top Categories</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {products.slice(0, 6).map((product) => (
                                <li key={product}>
                                    <Link 
                                        href={`/products/${product.toLowerCase().replace(/ /g, '-')}`} 
                                        className="transition-colors hover:text-blue-500 line-clamp-1"
                                    >
                                        {product}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="mb-8 text-lg font-bold text-white tracking-wider uppercase">Contact Us</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-500">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-1">Location</h4>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">Indonesia</p>
                                        <Flag code="IDN" width="20" height="2" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-500">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-1">Email Support</h4>
                                    <p className="text-sm">info@fayyfir.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-500">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-1">Phone</h4>
                                    <p className="text-sm">+62 XXX XXXX XXXX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-slate-900 pt-10 md:flex-row">
                    <p className="text-xs">
                        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Fayyfir</span>. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs">
                        <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
                        <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
                        <a href="#" className="transition-colors hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
