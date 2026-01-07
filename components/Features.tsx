import React from 'react';

export default function Features() {
    return (
        <section className="container mx-auto px-6 py-20">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Feature 1 */}
                 <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:-translate-y-1 transition-transform duration-300">
                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                         <i className="pi pi-globe text-2xl"></i>
                     </div>
                     <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                     <p className="text-surface-500 dark:text-surface-400">Access destinations worldwide with our extensive network of partners.</p>
                 </div>
                 
                 {/* Feature 2 */}
                 <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                        <i className="pi pi-wallet text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                    <p className="text-surface-500 dark:text-surface-400">Guaranteed best rates for flights and accommodations.</p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                        <i className="pi pi-star text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Top Rated</h3>
                    <p className="text-surface-500 dark:text-surface-400">Experience the best service rated by millions of travelers.</p>
                </div>
             </div>
        </section>
    );
}
