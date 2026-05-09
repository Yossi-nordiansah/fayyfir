import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Components/home/Layout';
import MainLayout from '@/Layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { productsData, defaultData } from '@/Assets/data/productsData';
import SubProductCard from '@/Components/products/SubProductCard';

const DetailProduct = ({ categoryName }) => {
    useEffect(() => {
        AOS.init({ duration: 500, once: true });
        window.scrollTo(0, 0);
    }, []);

    const currentProduct = productsData[categoryName] || defaultData;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
            <Head title={`${categoryName} | Fayyfir`} />

            {/* Hero Banner Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <img 
                    src={currentProduct.banner} 
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    alt={categoryName}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/80"></div>
                
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-6" data-aos="zoom-out">
                        <nav className="flex justify-center items-center gap-3 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                            <Link href="/" className="hover:text-white transition-all hover:scale-110">Home</Link>
                            <span className="w-1.5 h-1.5 bg-white/30 rounded-full"></span>
                            <span className="text-white/60">Product Detail</span>
                        </nav>
                        
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                            {categoryName}
                        </h1>
                        
                        <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                </div>
            </section>

            <Layout>
                <div className="container mx-auto md:px-6 px-3 lg:px-16 py-12 md:py-8">
                    {/* Introduction */}
                    <div className="max-w-4xl mx-auto text-center mb-16 space-y-8" data-aos="fade-up">
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Excellence in Export</span>
                        <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-bold tracking-tight italic">
                            "{currentProduct.description}"
                        </p>
                    </div>

                    {/* Sub Products Grid */}
                    <div className="space-y-24">
                        <div className="md:space-y-16 space-y-8">
                            {currentProduct.subProducts.map((sub, idx) => (
                                <SubProductCard key={idx} product={sub} />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

DetailProduct.layout = page => <MainLayout children={page} />;

export default DetailProduct;
