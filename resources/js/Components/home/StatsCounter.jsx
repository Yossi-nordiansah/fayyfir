import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from '../../Assets/images/DSC_0635.JPG';
import { statsData } from '../../Assets/data/statsData.jsx';

const stats = statsData || [];

// Custom CountUp component using Intersection Observer
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease out cubic
            const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
            
            setCount(Math.floor(easeOutCubic * end));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

export default function StatsCounter() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <section className="relative md:py-32 py-24 overflow-hidden group">
            {/* Background Image with Parallax-like effect */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Modern Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90 backdrop-blur-[1px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="relative flex flex-col items-center group/item"
                        >   
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 backdrop-blur-md transform transition-all duration-500 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:-translate-y-2 group-hover/item:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                {stat.icon}
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter flex items-baseline gap-1">
                                    <CountUp end={stat.value} />
                                    <span className="text-blue-500">{stat.suffix}</span>
                                    {stat.subValue && (
                                        <span className="text-xl font-bold text-blue-500 uppercase tracking-normal">
                                            {stat.subValue}
                                        </span>
                                    )}
                                </div>
                                <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-center">
                                    {stat.label}
                                </div>
                            </div>

                            {/* Hover underline */}
                            <div className="mt-6 w-12 h-1.5 bg-blue-600 rounded-full origin-left scale-x-0 transition-transform duration-500 group-hover/item:scale-x-100"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom edge fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent opacity-50"></div>
        </section>
    );
}
