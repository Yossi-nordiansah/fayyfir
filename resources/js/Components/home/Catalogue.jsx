import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CatalogueCard from "./CatalogueCard";
import { productsData } from '../../Assets/data/productsData';

const catalogueItems = Object.entries(productsData).map(([title, data]) => ({
    title,
    image: data.banner,
}));

export default function Catalogue() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section id="catalogue" className="py-14 px-4 lg:px-16 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Our Product Catalogue
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-slate-700">
                        Explore our wide range of premium quality products sourced from the finest tropical resources.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catalogueItems.map((item, index) => (
                        <CatalogueCard 
                            item={item} 
                            index={index} 
                            key={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
