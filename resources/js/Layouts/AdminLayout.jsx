import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import Sidebar from '@/Components/admin/Sidebar';

export default function AdminLayout({ children, headerTitle }) {
    const { auth } = usePage().props;
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <Sidebar />

            {/* Right Side Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Top Navigation */}
                <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10 shrink-0">
                    <div className="font-bold text-xl text-slate-800">
                        {headerTitle || 'Overview'}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <span className="block text-slate-800 font-medium text-sm">
                                {auth?.user?.name || 'Admin'}
                            </span>
                            <span className="block text-slate-500 text-xs">
                                Administrator
                            </span>
                        </div>
                        <div className="h-8 w-px bg-slate-200 mx-2"></div>
                        <button 
                            onClick={handleLogout}
                            className="text-sm font-semibold text-rose-500 hover:text-rose-700 transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-rose-50"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Log Out
                        </button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
