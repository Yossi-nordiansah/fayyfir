import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ManageContactLocation = () => {
    return (
        <>
            <Head title="Manage Contact & Location" />
            <div className="p-10 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <h1 className="text-2xl font-bold text-slate-800">Manage Contact & Location</h1>
            </div>
        </>
    );
};

ManageContactLocation.layout = page => <AdminLayout headerTitle="Manage Contact & Location">{page}</AdminLayout>;

export default ManageContactLocation;