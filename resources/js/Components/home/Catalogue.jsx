import React, { useEffect } from 'react';
import defaultImage from '../../Assets/images/logo-footer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const catalogueItems = [
    { title: "Coconut Derivates Products" },
    { title: "Charcoal Briquette" },
    { title: "Spices" },
    { title: "Palm Cooking Oil" },
    { title: "Cocoa Powder" },
    { title: "Raw Cosmetic" },
    { title: "Coffee Bean" },
    { title: "Handicraft" },
    { title: "Agarwood & Dehn Oud" },
];

export default function Catalogue() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section id="catalogue" className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                        Our Product Catalogue
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-slate-700 text-lg">
                        Explore our wide range of premium quality products sourced from the finest tropical resources.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catalogueItems.map((item, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={defaultImage} 
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-bold mb-2 transform transition-transform duration-500 group-hover:translate-x-2">
                                    {item.title}
                                </h3>
                                <div className="h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-16"></div>
                                <p className="mt-2 text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                    Quality Guaranteed
                                </p>
                            </div>
                            
                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-blue-500/30 rounded-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
