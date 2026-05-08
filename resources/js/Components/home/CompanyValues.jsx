import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const values = [
    {
        title: "QUALITY",
        description: "Quality customer service and support is our top priority and is represented in all that we do.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 013.138 3.138 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        color: "bg-blue-500"
    },
    {
        title: "INTEGRITY",
        description: "We always strive to do the right thing and taking responsibility for our actions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        color: "bg-emerald-500"
    },
    {
        title: "RESPONSIBILITY",
        description: "Our responsibility to the customers is to provide high quality products.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5v.5m-1.5 6.485A9 9 0 1118 4.5" />
            </svg>
        ),
        color: "bg-amber-500"
    },
    {
        title: "INNOVATION",
        description: "Inventing, designing, and developing breakthrough products and services.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "bg-purple-500"
    },
    {
        title: "COLLABORATION",
        description: "We want to further innovations and learn from our collaborators as much as they can learn from us.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: "bg-rose-500"
    },
    {
        title: "TRUST",
        description: "Establishing lasting relationships through reliability and consistent delivery of our promises to every partner.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        color: "bg-cyan-500"
    }
];

export default function CompanyValues() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
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
