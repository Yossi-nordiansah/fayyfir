import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import logo from '../Assets/images/logo-footer.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const [isProductOpen, setIsProductOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex py-2 items-center justify-between bg-gradient-to-r from-blue-600 to-sky-500 px-[5%] text-white shadow-lg transition-all duration-300">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/">
                    <img src={logo} alt="Fayyfir Logo" className="w-36 md:w-64 drop-shadow-lg" />
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-8 lg:flex">
                <li className="relative py-2 font-medium transition-colors hover:text-sky-100 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                    <Link href="/">Home</Link>
                </li>

                {/* Products Dropdown */}
                <li className="group relative py-2 font-medium">
                    <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-sky-100">
                        Product
                        <svg className="h-4 w-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    
                    {/* Submenu */}
                    <ul className="invisible absolute left-0 top-full min-w-[280px] translate-y-2 rounded-lg bg-white py-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {products.map((product, index) => (
                            <li key={index}>
                                <Link 
                                    href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}
                                    className="block px-6 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:pl-8 hover:text-blue-600"
                                >
                                    {product}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Search Bar */}
                <li className="flex items-center">
                    <div className="group flex w-10 items-center overflow-hidden rounded-full bg-white/20 px-2 py-2 transition-all duration-300 hover:w-64 hover:bg-white/30">
                        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input 
                            type="text" 
                            className="ml-2 w-full border-none bg-transparent p-0 text-sm text-white placeholder-white/70 outline-none focus:ring-0" 
                            placeholder="Search products..."
                        />
                    </div>
                </li>

                <li className="relative py-2 font-medium transition-colors hover:text-sky-100 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li className="relative py-2 font-medium transition-colors hover:text-sky-100 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                    <Link href="/about">About Us</Link>
                </li>
                <li className="relative py-2 font-medium transition-colors hover:text-sky-100 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>

            {/* Mobile Burger Menu Button */}
            <button 
                className="flex flex-col gap-1.5 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <div className={`h-0.5 w-6 rounded-full bg-white transition-all ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
                <div className={`h-0.5 w-6 rounded-full bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-0.5 w-6 rounded-full bg-white transition-all ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
            </button>

            {/* Mobile Menu */}
            <div className={`fixed inset-x-0 top-16 flex flex-col bg-blue-600 px-6 pb-8 transition-all duration-300 lg:hidden overflow-y-auto max-h-[calc(100vh-80px)] ${isMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'}`}>
                {/* Mobile Search */}
                <div className="my-6 flex items-center rounded-lg bg-white/10 px-4 py-3 border border-white/20">
                    <svg className="h-5 w-5 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input 
                        type="text" 
                        className="ml-3 w-full border-none bg-transparent p-0 text-white placeholder-white/50 outline-none focus:ring-0" 
                        placeholder="Search products..."
                    />
                </div>

                <Link href="/" className="py-3 text-lg font-medium border-b border-white/10">Home</Link>
                
                {/* Mobile Product Accordion */}
                <div className="flex flex-col border-b border-white/10">
                    <button 
                        className="flex items-center justify-between py-4 text-lg font-medium"
                        onClick={() => setIsProductOpen(!isProductOpen)}
                    >
                        <span>Products</span>
                        <svg className={`h-5 w-5 transition-transform ${isProductOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ${isProductOpen ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {products.map((product, index) => (
                            <Link 
                                key={index}
                                href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}
                                className="pl-4 py-2 text-white/80 hover:text-white"
                            >
                                {product}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link href="/gallery" className="py-4 text-lg font-medium border-b border-white/10">Gallery</Link>
                <Link href="/about" className="py-4 text-lg font-medium border-b border-white/10">About Us</Link>
                <Link href="/contact" className="py-4 text-lg font-medium border-b border-white/10">Contact Us</Link>
            </div>
        </nav>
    );
}
