import React, { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import ProductPopUpForm from '@/Components/admin/ProductPopUpForm';
import ProductDetailModal from '@/Components/admin/ProductDetailModal';
import { 
    PlusIcon, 
    PencilSquareIcon, 
    TrashIcon, 
    EyeIcon, 
    PhotoIcon,
    QueueListIcon,
} from '@heroicons/react/24/outline';

const ManageProduct = ({ products }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm({
        id: null,
        name: '',
        description: '',
        image: null,
        status: 'active',
        subproducts: []
    });

    const openCreateModal = () => {
        setEditMode(false);
        reset();
        clearErrors();
        setIsModalOpen(true);
    };

    const openEditModal = (product) => {
        setEditMode(true);
        setData({
            id: product.id,
            name: product.name,
            description: product.description || '',
            image: null,
            status: product.status,
            subproducts: product.subproducts.map(sub => ({
                id: sub.id,
                name: sub.name,
                description: sub.description,
                features: sub.features.map(f => ({ id: f.id, name: f.name })),
                images: sub.images.map(img => img.image_path)
            }))
        });
        setIsModalOpen(true);
    };

    const openDetailModal = (product) => {
        setSelectedProduct(product);
        setIsDetailOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        reset();
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (editMode) {
            router.post(route('manage-product.update', data.id), {
                _method: 'PUT',
                ...data,
            }, {
                onSuccess: () => closeModal(),
            });
        } else {
            post(route('manage-product.store'), {
                onSuccess: () => closeModal(),
            });
        }
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            router.delete(route('manage-product.destroy', id));
        }
    };

    return (
        <div className="space-y-6">
            <Head title="Manage Product" />
            
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Product Management</h1>
                    <p className="text-slate-500 text-sm">Manage your product catalogue, subproducts, and their features.</p>
                </div>
                <button 
                    onClick={openCreateModal}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-200"
                >
                    <PlusIcon className="w-5 h-5" />
                    Add Product
                </button>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stats</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.length > 0 ? products.map((product) => (
                            <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                                            {product.image ? (
                                                <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                    <PhotoIcon className="w-6 h-6" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800">{product.name}</div>
                                            <div className="text-xs text-slate-500 truncate max-w-[200px]">{product.description || 'No description'}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                        product.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                                    }`}>
                                        {product.status.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1" title="Subproducts">
                                            <QueueListIcon className="w-4 h-4 text-blue-500" />
                                            {product.subproducts.length}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button 
                                        onClick={() => openDetailModal(product)}
                                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                        title="View Details"
                                    >
                                        <EyeIcon className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={() => openEditModal(product)}
                                        className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
                                        title="Edit Product"
                                    >
                                        <PencilSquareIcon className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(product.id)}
                                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                        title="Delete Product"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-12 text-center text-slate-400 italic">
                                    No products found. Add your first product to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Form Modal */}
            <ProductPopUpForm 
                isOpen={isModalOpen}
                onClose={closeModal}
                data={data}
                setData={setData}
                processing={processing}
                errors={errors}
                editMode={editMode}
                handleSubmit={handleSubmit}
            />

            {/* Detail Modal */}
            <ProductDetailModal 
                isOpen={isDetailOpen}
                onClose={() => setIsDetailOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

ManageProduct.layout = page => <AdminLayout headerTitle="Product Catalogue">{page}</AdminLayout>;

export default ManageProduct;