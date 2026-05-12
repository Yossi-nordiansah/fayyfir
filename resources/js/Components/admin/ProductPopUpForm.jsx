import React from 'react';
import { createPortal } from 'react-dom';
import { 
    XMarkIcon, 
    Bars3BottomLeftIcon, 
    PlusIcon, 
    TrashIcon, 
    QueueListIcon, 
    HashtagIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

const ProductPopUpForm = ({ 
    isOpen, 
    onClose, 
    data, 
    setData, 
    processing, 
    errors, 
    editMode, 
    handleSubmit 
}) => {
    if (!isOpen) return null;

    // ... (rest of the handlers remain the same)
    const addSubproduct = () => {
        setData('subproducts', [
            ...data.subproducts,
            { name: '', description: '', features: [{ name: '' }], images: [] }
        ]);
    };

    const removeSubproduct = (index) => {
        const newSubs = [...data.subproducts];
        newSubs.splice(index, 1);
        setData('subproducts', newSubs);
    };

    const handleSubproductChange = (index, field, value) => {
        const newSubs = [...data.subproducts];
        newSubs[index][field] = value;
        setData('subproducts', newSubs);
    };

    const addFeature = (subIndex) => {
        const newSubs = [...data.subproducts];
        newSubs[subIndex].features.push({ name: '' });
        setData('subproducts', newSubs);
    };

    const removeFeature = (subIndex, featIndex) => {
        const newSubs = [...data.subproducts];
        newSubs[subIndex].features.splice(featIndex, 1);
        setData('subproducts', newSubs);
    };

    const handleFeatureChange = (subIndex, featIndex, value) => {
        const newSubs = [...data.subproducts];
        newSubs[subIndex].features[featIndex].name = value;
        setData('subproducts', newSubs);
    };

    const handleSubproductImages = (subIndex, files) => {
        const newSubs = [...data.subproducts];
        newSubs[subIndex].images = [...newSubs[subIndex].images, ...Array.from(files)];
        setData('subproducts', newSubs);
    };

    const removeSubproductImage = (subIndex, imgIndex) => {
        const newSubs = [...data.subproducts];
        newSubs[subIndex].images.splice(imgIndex, 1);
        setData('subproducts', newSubs);
    };

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="px-8 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h2 className="text-xl font-bold text-slate-800">
                        {editMode ? 'Edit Product' : 'Create New Product'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-white rounded-full text-slate-400 transition-all">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-6">
                    {/* Product Info Section */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                            <Bars3BottomLeftIcon className="w-5 h-5" />
                            Basic Information
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2 col-span-2 md:col-span-1">
                                <label className="text-sm font-bold text-slate-700">Product Name</label>
                                <input 
                                    type="text" 
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="e.g. Natural Rubber"
                                />
                                {errors.name && <p className="text-rose-500 text-xs font-medium">{errors.name}</p>}
                            </div>
                            <div className="space-y-2 col-span-2 md:col-span-1">
                                <label className="text-sm font-bold text-slate-700">Description (Optional)</label>
                                <textarea
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Short catchy phrase"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Status</label>
                                <select 
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Product Image</label>
                                <input 
                                    type="file" 
                                    onChange={e => setData('image', e.target.files[0])}
                                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                                />
                                {errors.image && <p className="text-rose-500 text-xs font-medium">{errors.image}</p>}
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Subproducts Section */}
                    <section className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-blue-600 font-bold">
                                <QueueListIcon className="w-5 h-5" />
                                Subproducts
                            </div>
                            <button 
                                type="button"
                                onClick={addSubproduct}
                                className="text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all"
                            >
                                <PlusIcon className="w-3 h-3" />
                                Add Subproduct
                            </button>
                        </div>

                        {data.subproducts.map((sub, sIndex) => (
                            <div key={sIndex} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-6 relative group">
                                <button 
                                    type="button"
                                    onClick={() => removeSubproduct(sIndex)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 transition-colors"
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-600">Subproduct Name</label>
                                            <input 
                                                type="text" 
                                                value={sub.name}
                                                onChange={e => handleSubproductChange(sIndex, 'name', e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Subproduct title"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-600">Description</label>
                                            <textarea 
                                                value={sub.description}
                                                onChange={e => handleSubproductChange(sIndex, 'description', e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[80px]"
                                                placeholder="Brief info"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-600">Subproduct Gallery</label>
                                            <div className="flex items-center gap-4">
                                                <label className="cursor-pointer flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                                                    <PhotoIcon className="w-4 h-4 text-blue-500" />
                                                    Select Images
                                                    <input 
                                                        type="file" 
                                                        multiple 
                                                        onChange={e => handleSubproductImages(sIndex, e.target.files)}
                                                        className="hidden" 
                                                    />
                                                </label>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {sub.images && sub.images.map((img, iIndex) => (
                                                    <div key={iIndex} className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-200 bg-white">
                                                        <img 
                                                            src={typeof img === 'string' ? `/storage/${img}` : URL.createObjectURL(img)} 
                                                            className="w-full h-full object-cover" 
                                                        />
                                                        <button 
                                                            type="button"
                                                            onClick={() => removeSubproductImage(sIndex, iIndex)}
                                                            className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full p-0.5 hover:bg-rose-600"
                                                        >
                                                            <XMarkIcon className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                                    <HashtagIcon className="w-3 h-3" />
                                                    Features
                                                </div>
                                                <button 
                                                    type="button"
                                                    onClick={() => addFeature(sIndex)}
                                                    className="text-[10px] font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
                                                >
                                                    <PlusIcon className="w-2.5 h-2.5" />
                                                    Add Feature
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-1 gap-2">
                                                {sub.features.map((feat, fIndex) => (
                                                    <div key={fIndex} className="flex gap-2">
                                                        <input 
                                                            type="text" 
                                                            value={feat.name}
                                                            onChange={e => handleFeatureChange(sIndex, fIndex, e.target.value)}
                                                            className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            placeholder="Feature name"
                                                        />
                                                        <button 
                                                            type="button"
                                                            onClick={() => removeFeature(sIndex, fIndex)}
                                                            className="text-slate-300 hover:text-rose-400"
                                                        >
                                                            <XMarkIcon className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {data.subproducts.length === 0 && (
                            <div className="text-center py-6 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm">
                                No subproducts added yet. Click "Add Subproduct" to begin.
                            </div>
                        )}
                    </section>
                </form>

                <div className="px-8 py-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-white transition-all border border-transparent hover:border-slate-200"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSubmit}
                        disabled={processing}
                        className="px-8 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all disabled:opacity-50"
                    >
                        {processing ? 'Saving...' : (editMode ? 'Update Product' : 'Save Product')}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProductPopUpForm;
