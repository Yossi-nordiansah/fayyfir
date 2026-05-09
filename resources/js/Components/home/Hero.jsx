import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import slides from '../../Assets/data/slidesHeroData';

export default function Hero() {

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                loop
                navigation={false}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            {/* Background Image with Overlay */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110 group-active:scale-100"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative flex h-full items-center justify-center px-[5%] text-center text-white">
                                <div className="max-w-3xl space-y-6">
                                    <h1 className="animate-fade-up text-4xl font-bold tracking-tight md:text-6xl lg:text-6xl">
                                        {slide.title}
                                    </h1>
                                    <p className="animate-fade-up animate-delay-200 text-lg text-slate-200 md:text-xl">
                                        {slide.description}
                                    </p>
                                    <div className="animate-fade-up animate-delay-500 pt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Style Overrides (via CSS in JS or separate CSS) */}
            <style jsx="true">{`
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    background: rgba(255, 255, 255, 0.1);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    backdrop-filter: blur(5px);
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 20px !important;
                    font-weight: bold;
                }
                .swiper-pagination-bullet-active {
                    background: #2563eb !important;
                    width: 25px !important;
                    border-radius: 10px !important;
                }
                @keyframes fade-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up {
                    animation: fade-up 1s ease forwards;
                }
                .animate-delay-200 { animation-delay: 0.2s; }
                .animate-delay-500 { animation-delay: 0.5s; }
            `}</style>
            <a href="#catalogue" className="text-nowrap absolute z-10 bottom-40 -translate-x-1/2 left-1/2 rounded-full bg-blue-600 text-white px-6 py-3 text-md font-semibold transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95">
                Explore Our Products
            </a>
        </div>
    );
}
