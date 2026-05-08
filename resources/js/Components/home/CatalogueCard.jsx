import { Link } from "@inertiajs/react";

export default function CatalogueCard({ item, index }) {
    return (
        <Link 
            href={route('product.detail', { category: item.title })}
            key={index} 
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
        >
            {/* Image Container */}
            <div className="overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Below Image */}
            <div className="p-6 space-y-3 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                </h3>
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Quality Guaranteed
                </p>
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-blue-500/20 rounded-2xl pointer-events-none"></div>
        </Link>
    );
}