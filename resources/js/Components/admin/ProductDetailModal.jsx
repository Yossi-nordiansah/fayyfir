import React from 'react';
import { createPortal } from 'react-dom';
import { 
    XMarkIcon, 
    PhotoIcon, 
    QueueListIcon, 
    HashtagIcon 
} from '@heroicons/react/24/outline';

const ProductDetailModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return createPortal(
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-blue-600 text-white">
                    <h2 className="text-xl font-bold">Product Hierarchy</h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-all">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-8 space-y-8 text-slate-800">
                    {/* Main Product */}
                    <div className="flex gap-6 items-start">
                        <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                            {product.image ? (
                                <img src={`/storage/${product.image}`} className="w-full h-full object-cover" alt={product.name} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <PhotoIcon className="w-10 h-10" />
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-2xl font-black">{product.name}</h3>
                            <p className="text-blue-600 font-bold text-sm mb-2">{product.description}</p>
                        </div>
                    </div>

                    {/* Subproducts Tree */}
                    <div className="space-y-6 relative before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
                        {product.subproducts && product.subproducts.map((sub) => (
                            <div key={sub.id} className="ml-8 relative before:absolute before:-left-5 before:top-4 before:w-5 before:h-px before:bg-slate-200">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                        <QueueListIcon className="w-4 h-4 text-blue-500" />
                                        {sub.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-3">{sub.description}</p>
                                    
                                    {/* Gallery */}
                                    {sub.images && sub.images.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {sub.images.map((img, iIndex) => (
                                                <div key={iIndex} className="w-12 h-12 rounded-lg overflow-hidden border border-white shadow-sm">
                                                    <img src={`/storage/${img.image_path}`} className="w-full h-full object-cover" alt={`Subproduct ${iIndex}`} />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Features List */}
                                    {sub.features && sub.features.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {sub.features.map(feat => (
                                                <span key={feat.id} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-medium text-slate-600 shadow-sm flex items-center gap-1">
                                                    <HashtagIcon className="w-2 h-2 text-slate-300" />
                                                    {feat.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-8 py-6 border-t border-slate-100 flex justify-end bg-slate-50/50">
                    <button 
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-900 transition-all shadow-lg"
                    >
                        Close View
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProductDetailModal;
