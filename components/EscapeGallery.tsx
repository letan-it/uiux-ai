'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const galleryItems = [
    { image: '/images/escape-beach.jpg', alt: 'Escape Beach' },
    { image: '/images/escape-nature.jpg', alt: 'Escape Nature' },
    { image: '/images/escape-hotel.jpg', alt: 'Escape Hotel' },
    { image: '/images/escape-beach.jpg', alt: 'Escape Beach' },
    { image: '/images/escape-nature.jpg', alt: 'Escape Nature' },
];

export default function EscapeGallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="container mt-24 lg:mt-64 relative">
            <div className="min-h-[54rem] lg:min-h-[44rem] relative rounded-3xl lg:rounded-4xl overflow-hidden shadow-blue-card lg:py-0">
                <Image 
                    src="/images/escape-gallery-bg.jpg" 
                    alt="Travel Escape Gallery Background"
                    fill
                    className="object-cover -z-2"
                    priority
                />
                <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
                
                <div className="absolute px-12 lg:px-0 inset-x-16 inset-y-16 flex flex-col justify-between pointer-events-none">
                    <div className="pointer-events-auto">
                        <h1 className="text-4xl lg:text-[5.625rem] leading-tight text-surface-0 font-semibold max-w-3xl">
                            Find Your <span className="text-white/12 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white]">Perfect Escape</span>
                        </h1>
                        <p className="text-white/80 mt-7 max-w-xs">
                            Whether you seek sun-soaked beaches, serene natural landscapes, or thrilling adventures, discover destinations tailored to your dream getaway.
                        </p>
                    </div>
                    <div className="mt-auto mb-0 hidden lg:flex items-center gap-6 pointer-events-auto">
                        <button 
                            className="w-[5.5rem] h-12 border border-white/12 backdrop-blur-[48px] rounded-full bg-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] flex items-center justify-center transition-all hover:scale-105 hover:bg-white/20 active:scale-95"
                            onClick={scrollPrev}
                        >
                            <i className="pi pi-arrow-left text-surface-0 !text-xl"></i>
                        </button>
                        <button 
                            className="w-[5.5rem] h-12 border border-white/12 backdrop-blur-[48px] rounded-full bg-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] flex items-center justify-center transition-all hover:scale-105 hover:bg-white/20 active:scale-95"
                            onClick={scrollNext}
                        >
                            <i className="pi pi-arrow-right text-surface-0 !text-xl"></i>
                        </button>
                    </div>
                </div>

                <div className="absolute lg:left-[26.5rem] lg:bottom-16 lg:mt-0 bottom-32 w-full max-w-[60rem]">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4">
                            {galleryItems.map((item, index) => (
                                <div key={index} className="flex-shrink-0 w-[18rem] h-[26rem] relative rounded-3xl shadow-blue-card overflow-hidden group cursor-pointer">
                                    <Image 
                                        src={item.image} 
                                        alt={item.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
