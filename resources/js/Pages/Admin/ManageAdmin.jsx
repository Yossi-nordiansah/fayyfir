import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ManageAdmin = () => {
    return (
        <>
            <Head title="Manage Admin" />
            <div className="p-10 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <h1 className="text-2xl font-bold text-slate-800">Manage Admin</h1>
            </div>
        </>
    );
};

ManageAdmin.layout = page => <AdminLayout headerTitle="Manage Admin">{page}</AdminLayout>;

export default ManageAdmin;