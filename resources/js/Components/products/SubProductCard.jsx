import React, { useState } from 'react';
import iconWhatsApp from '../../Assets/icons/whatsapp-icon.svg';

const SubProductCard = ({ product }) => {
    const [activeImage, setActiveImage] = useState(product.images[0]);

    return (
        <div className="flex flex-col lg:flex-row bg-white/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 md:mb-12 mb-4 group" data-aos="fade-up">
            {/* Image Gallery Section */}
            <div className="lg:w-2/5 md:p-6 p-0 md:p-8">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner">
                    <img 
                        src={activeImage} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-blue-600/90 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-sm shadow-lg">
                        Premium Choice
                    </div>
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-3 mt-3 justify-center overflow-x-auto px-2 scrollbar-hide py-2">
                    {product.images.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative flex-shrink-0 w-16 h-16 rounded-xl border-2 transition-all duration-300 overflow-hidden group/thumb ${activeImage === img ? 'border-blue-600 scale-110 shadow-lg' : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-blue-400'}`}
                        >
                            <img src={img} alt="thumb" className="w-full h-full object-cover" />
                            {activeImage === img && (
                                <div className="absolute inset-0 bg-blue-600/10 ring-2 ring-blue-600/50 inset-0 rounded-xl"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Info Section */}
            <div className="lg:w-3/5 p-4 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white/50 to-transparent">
                <div className="space-y-1">
                    <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors duration-300">
                            {product.name}
                        </h3>
                        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                    </div>
                    
                    <p className="text-slate-600 text-base max-w-2xl font-medium">
                        {product.description}
                    </p>
                    
                    {/* Feature List */}
                    {product.details && (
                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                            {product.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50/80 md:p-3 rounded-xl border border-slate-100 group/item hover:bg-blue-50 transition-colors">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-sm tracking-wide">{detail}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-5 flex flex-wrap gap-4">
                    <a 
                        href="https://api.whatsapp.com/send?phone=6281290004460&text=I'm%20interested%20in%20your%20products" 
                        target="_blank"
                        className="inline-flex items-center px-6 py-4 bg-green-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.6)] active:scale-95"
                    >
                        Inquire Price
                        <img src={iconWhatsApp} alt="WhatsApp" className="ml-3 w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubProductCard;
