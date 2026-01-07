import React from 'react';
import Image from 'next/image';

export default function SearchCard() {
    return (
        <div className="relative z-30 -mt-24 container mx-auto px-6">
            <div className="bg-surface-0 dark:bg-surface-950 rounded-3xl lg:rounded-full p-6 shadow-xl border border-surface-200 dark:border-surface-800 flex flex-col lg:flex-row gap-4 items-center">
                
                {/* Location */}
                <div className="w-full lg:flex-1 relative group">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-surface-50 dark:hover:bg-surface-900 cursor-pointer border border-transparent hover:border-surface-200 dark:hover:border-surface-800 transition-all">
                        <i className="pi pi-map-marker text-surface-400"></i>
                        <div className="flex flex-col">
                            <span className="text-xs text-surface-500 font-medium uppercase tracking-wider">Location</span>
                            <span className="font-medium text-surface-900 dark:text-surface-0">Italy, Roma</span>
                        </div>
                        <i className="pi pi-chevron-down ml-auto text-surface-400"></i>
                    </div>
                </div>

                <div className="hidden lg:block w-px h-10 bg-surface-200 dark:bg-surface-800"></div>

                {/* Date In */}
                <div className="w-full lg:flex-1 relative group">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-surface-50 dark:hover:bg-surface-900 cursor-pointer border border-transparent hover:border-surface-200 dark:hover:border-surface-800 transition-all">
                        <i className="pi pi-calendar text-surface-400"></i>
                        <div className="flex flex-col">
                            <span className="text-xs text-surface-500 font-medium uppercase tracking-wider">Arriving</span>
                            <span className="font-medium text-surface-900 dark:text-surface-0">Add Date</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block w-px h-10 bg-surface-200 dark:bg-surface-800"></div>

                {/* Date Out */}
                <div className="w-full lg:flex-1 relative group">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-surface-50 dark:hover:bg-surface-900 cursor-pointer border border-transparent hover:border-surface-200 dark:hover:border-surface-800 transition-all">
                        <i className="pi pi-calendar text-surface-400"></i>
                        <div className="flex flex-col">
                            <span className="text-xs text-surface-500 font-medium uppercase tracking-wider">Leaving</span>
                            <span className="font-medium text-surface-900 dark:text-surface-0">Add Date</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block w-px h-10 bg-surface-200 dark:bg-surface-800"></div>

                {/* Guests */}
                <div className="w-full lg:flex-1 relative group">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-surface-50 dark:hover:bg-surface-900 cursor-pointer border border-transparent hover:border-surface-200 dark:hover:border-surface-800 transition-all">
                        <i className="pi pi-user text-surface-400"></i>
                        <div className="flex flex-col">
                            <span className="text-xs text-surface-500 font-medium uppercase tracking-wider">Guests</span>
                            <span className="font-medium text-surface-900 dark:text-surface-0">1 Room, 2 Guests</span>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <button className="w-full lg:w-auto p-4 rounded-full button-gradient shadow-lg shadow-primary-500/30">
                    <i className="pi pi-search text-xl"></i>
                </button>
            </div>
        </div>
    );
}
