import React, { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '@/Assets/images/logo-footer.png';
import { values } from '@/Assets/data/values';
import { statsData } from '@/Assets/data/statsData.jsx';
import { contacts } from '@/Assets/data/contactsData';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        let startTime;
        const animate = (ts) => {
            if (!startTime) startTime = ts;
            const pct = Math.min((ts - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - pct, 3);
            setCount(Math.floor(ease * end));
            if (pct < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

// ── Page ────────────────────────────────────────────────────────────────────
const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 500, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head title="About Us | Fayyfir" />

            {/* ── Hero ──────────────────────────────────── */}
            <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-950 to-slate-950" />
                {/* Decorative blobs */}
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px]" />

                <div className="relative z-10 text-center px-4 space-y-4" data-aos="zoom-out">
                    <nav className="flex justify-center items-center gap-3 text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">
                        <Link href="/" className="hover:text-white transition-all">Home</Link>
                        <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                        <span className="text-white/60">About Us</span>
                    </nav>
                    <img src={logo} alt="Fayyfir Logo" className="w-80 mx-auto" />
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    <TypeAnimation
                        sequence={[
                            "Indonesia's trusted partner for premium natural commodity exports.",
                            2000,
                            "Delivering the finest Indonesian products to the world.",
                            2000,
                            "Quality, integrity, and sustainability — since 2013.",
                            2000,
                        ]}
                        wrapper="p"
                        speed={55}
                        deletionSpeed={70}
                        repeat={0}
                        className="text-slate-400 max-w-xl mx-auto md:text-lg min-h-[2rem]"
                    />
                </div>
            </section>

            {/* ── Who We Are ────────────────────────────── */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <div data-aos="fade-right">
                            <span className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mt-3 mb-6 leading-tight">
                                Bridging Indonesia's<br />Finest Resources to the World
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    <strong className="text-slate-800">We are a</strong> professional exporter supplier from Indonesia established in 2013 also known as <strong className="text-slate-800">PT. ALSHARIF GROUP INDONESIA</strong> and subsequently <strong className="text-slate-800">PT. ALSHARIF JAYA GROUP</strong> as the trademark holder.
                                </p>
                                <p>
                                    ALSHARIF GROUP has adapted trust and integrity. as a leading distributor and commodity in Indonesia. Our clients and suppliers not only provide immediate and reliable service but also consistently exceed expectations and goals.
Over the years ALSHARIF GROUP has provided support and services to all major industries, markets and traders in the Indonesian region.
                                </p>
                                <p>
                                    Our experienced team handles end-to-end logistics, documentation, and quality assurance, giving our global partners peace of mind with every order.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-5" data-aos="fade-left">
                            {statsData.map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl bg-white border border-slate-100 shadow-md p-7 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="mb-3 text-blue-600">{s.icon}</div>
                                    <div className="text-4xl font-black text-blue-600 mb-1 tracking-tighter flex items-baseline gap-0.5">
                                        <CountUp end={s.value} />
                                        <span>{s.suffix}</span>
                                        {s.subValue && (
                                            <span className="text-xl font-bold ml-0.5">{s.subValue}</span>
                                        )}
                                    </div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Values ────────────────────────────── */}
            <section className="py-20 bg-slate-900 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="text-blue-400 font-black uppercase tracking-[0.35em] text-xs">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Our Core Values</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                className="group p-7 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:bg-blue-600/10 hover:border-blue-500/40 transition-all duration-400 lg:text-left text-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 lg:mx-0 mx-auto">
                                    {v.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact & Maps ────────────────────────── */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs">Get In Touch</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mt-3">Contact & Location</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Contact Info */}
                        <div className="space-y-5" data-aos="fade-right">
                            {contacts.map((c, i) => {
                                const cardClass = "flex items-start gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-300 group" +
                                    (c.href ? " hover:border-blue-200 hover:bg-blue-50 hover:shadow-md cursor-pointer" : " cursor-default");
                                const inner = (
                                    <>
                                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            {c.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{c.label}</div>
                                            <div className="text-slate-800 font-semibold text-sm leading-snug">{c.value}</div>
                                        </div>
                                    </>
                                );
                                return c.href ? (
                                    <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={i} className={cardClass}>
                                        {inner}
                                    </div>
                                );
                            })}

                            {/* WhatsApp CTA */}
                            <a
                                href="https://api.whatsapp.com/send?phone=6281290004460&text=Hello%2C%20I'm%20interested%20in%20your%20products"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-green-600 text-white font-black uppercase tracking-widest text-sm hover:bg-green-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Google Maps */}
                        <div data-aos="fade-left" className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[420px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6707790236427!2d106.85934792915218!3d-6.17316406639211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5451cfca7c5%3A0x26c0ca907c13d49f!2sFAYYFIR%20TRADING!5e0!3m2!1sid!2sid!4v1623225536066!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Fayyfir Trading Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

AboutUs.layout = page => <MainLayout children={page} />;

export default AboutUs;
