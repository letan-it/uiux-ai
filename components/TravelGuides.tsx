import React from 'react';
import Image from 'next/image';

export default function TravelGuides() {
    return (
        <>
            <div className="container mt-24 lg:mt-64 relative">
                <div className="w-full relative rounded-3xl lg:rounded-4xl overflow-hidden">
                    <div className="absolute z-2 bottom-0 w-full h-[32%] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.92)_46.38%,#FFF_88.21%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgb(var(--surface-950))_88.21%)] backdrop-blur-[1px]"></div>
                    <div className="relative w-full h-auto">
                        <Image 
                            src="/images/guides-bg.jpg" 
                            alt="Travel Guides Background Image" 
                            width={1920}
                            height={1080}
                            className="z-1 w-full h-auto dark:hidden"
                        />
                        <Image 
                            src="/images/guides-bg-dark.jpg" 
                            alt="Travel Guides Background Image"
                            width={1920}
                            height={1080} 
                            className="z-1 w-full h-auto hidden dark:block"
                        />
                    </div>
                </div>
                <div className="-mt-20 md:-mt-60 lg:-mt-80 z-3 relative px-6">
                    <h2 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold text-center !leading-tight max-w-md lg:max-w-2xl mx-auto">
                        Discover Your Next Adventure with Travel Guides
                    </h2>
                    <p className="mt-6 text-lg text-surface-500 dark:text-surface-400 text-center max-w-lg mx-auto">
                        Whether you’re looking for a relaxing beach getaway or an adventurous mountain trek, we have the perfect itinerary for you.
                    </p>
                    <div className="flex justify-center">
                        <button className="button-gradient mt-10">
                            Book your place now
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mt-24 lg:mt-64">
                <div className="mt-32 flex md:flex-row flex-col gap-6">
                    <div className="relative lg:flex-1 h-[48rem] rounded-3xl lg:rounded-4xl shadow-blue-card overflow-hidden group">
                        <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
                        <div style={{ writingMode: 'vertical-lr', transform: 'scale(-1, -1)' }} className="absolute bottom-12 right-4 text-[6rem] lg:text-[10rem] title bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.63)_100%)] text-transparent bg-clip-text font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            Paris
                        </div>
                        <Image 
                            src="/images/grid-paris.jpg" 
                            alt="Travel CTA Image" 
                            fill
                            className="object-cover -z-2 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    
                    <div className="relative lg:flex-1 h-[48rem] rounded-3xl lg:rounded-4xl shadow-blue-card overflow-hidden group">
                        <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
                        <div style={{ writingMode: 'vertical-lr', transform: 'scale(-1, -1)' }} className="absolute bottom-12 right-4 text-[6rem] lg:text-[10rem] title bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.63)_100%)] text-transparent bg-clip-text font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            Spain
                        </div>
                        <Image 
                            src="/images/cta-spain.jpg" 
                            alt="Travel CTA Image" 
                            fill
                            className="object-cover -z-2 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    <div className="relative lg:flex-1 h-[48rem] rounded-3xl lg:rounded-4xl shadow-blue-card overflow-hidden group">
                        <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
                        <div style={{ writingMode: 'vertical-lr', transform: 'scale(-1, -1)' }} className="absolute bottom-12 right-4 text-[6rem] lg:text-[10rem] title bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.63)_100%)] text-transparent bg-clip-text font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            Italy
                        </div>
                        <Image 
                            src="/images/cta-italy.jpg" 
                            alt="Travel CTA Image" 
                            fill
                            className="object-cover -z-2 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
