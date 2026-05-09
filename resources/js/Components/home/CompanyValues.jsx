import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { values } from '@/Assets/data/values';

export default function CompanyValues() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <section className="py-8 bg-transparent overflow-hidden relative z-10">
            <div className="container mx-auto px-4 lg:px-16">
                <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
                    <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">Core Principles</h2>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                        The Values That Drive Us
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Our commitment to excellence is rooted in these five fundamental values that guide every decision and action we take as a company.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {values.map((value, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group p-6 rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:z-30 hover:scale-110 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
                        >
                            <div className={`${value.color} mx-auto md:mx-0 w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-4 transform transition-transform duration-500 group-hover:rotate-6 shadow-lg`}>
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center md:text-left">
                                {value.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
