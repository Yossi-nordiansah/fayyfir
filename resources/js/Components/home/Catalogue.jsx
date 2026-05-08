import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import defaultImage from '../../Assets/images/logo-footer.png';
import coconutImg from '../../Assets/images/coconut-1.jpg';
import charcoalImg from '../../Assets/images/charcoal.jpg';
import spicesImg from '../../Assets/images/spices.jpg';
import palmOilImg from '../../Assets/images/palm-oil.jpg';
import cocoaImg from '../../Assets/images/cacao-powder.jpg';
import rawCosmeticImg from '../../Assets/images/raw-cosmetic.jpg';
import coffeeImg from '../../Assets/images/coffe-been.jpg';
import handicraftImg from '../../Assets/images/Handicraft.jpg';
import gaharuImg from '../../Assets/images/Gaharu.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CatalogueCard from "./CatalogueCard";

const catalogueItems = [
    { title: "Coconut Derivates Products", image: coconutImg },
    { title: "Charcoal Briquette", image: charcoalImg },
    { title: "Spices", image: spicesImg },
    { title: "Palm Cooking Oil", image: palmOilImg },
    { title: "Cocoa Powder", image: cocoaImg },
    { title: "Raw Cosmetic", image: rawCosmeticImg },
    { title: "Coffee Bean", image: coffeeImg },
    { title: "Handicraft", image: handicraftImg },
    { title: "Agarwood & Dehn Oud", image: gaharuImg },
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
