import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import bgImage from '@/Assets/images/bglogin.jpg'; // Using one of the hero images for a nice background

export default function GuestLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center py-8 sm:px-6 lg:px-8">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bgImage} alt="Background" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
                <Link href="/" className="flex justify-center">
                    <ApplicationLogo className="h-24 w-auto drop-shadow-xl transition-transform hover:scale-105" />
                </Link>
                <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-white">
                    Admin Portal
                </h2>
                <p className="mt-2 text-center text-sm text-slate-300">
                    Sign in to manage your website content
                </p>
            </div>

            <div className="relative z-10 mt-5 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="overflow-hidden bg-white/10 px-6 py-8 shadow-2xl backdrop-blur-lg sm:rounded-2xl sm:px-10 border border-white/20">
                    {children}
                </div>
            </div>
            
            {/* Decorative blurs */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px]"></div>
            </div>
        </div>
    );
}
