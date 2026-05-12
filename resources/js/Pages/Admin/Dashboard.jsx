import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const Dashboard = () => {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Welcome to Admin Portal</h1>
                <p className="text-slate-500">
                    You are successfully logged in using the catalogue authentication guard.
                    <br/><br/>
                    <em>(Konten statistik, form produk, atau tabel data akan ditambahkan di sini nantinya)</em>
                </p>
            </div>
        </>
    );
};

Dashboard.layout = page => <AdminLayout headerTitle="Dashboard Overview">{page}</AdminLayout>;

export default Dashboard;