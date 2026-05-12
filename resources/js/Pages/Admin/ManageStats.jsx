import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ManageStats = () => {
    return (
        <>
            <Head title="Manage Statistics" />
            <div className="p-10 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <h1 className="text-2xl font-bold text-slate-800">Manage Statistics</h1>
            </div>
        </>
    );
};

ManageStats.layout = page => <AdminLayout headerTitle="Manage Statistics">{page}</AdminLayout>;

export default ManageStats;