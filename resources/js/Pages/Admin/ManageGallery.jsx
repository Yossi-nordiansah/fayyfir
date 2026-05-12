import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ManageGallery = () => {
    return (
        <>
            <Head title="Manage Gallery" />
            <div className="p-10 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <h1 className="text-2xl font-bold text-slate-800">Manage Gallery</h1>
            </div>
        </>
    );
};

ManageGallery.layout = page => <AdminLayout headerTitle="Manage Gallery">{page}</AdminLayout>;

export default ManageGallery;