import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative overflow-hidden h-[52rem]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="/images/travel-hero-bg.jpg" 
                    alt="Travel Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Top Overlay */}
                <div className="absolute inset-0 z-1 opacity-75 bg-[linear-gradient(180deg,rgba(0,0,0,0.50)_49.65%,rgba(0,0,0,0.00)_100%)]"></div>
                {/* Bottom Overlay */}
                <div className="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-[22rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_62.59%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.00)_0%,rgba(9,9,11,0.8)_62.59%,rgba(9,9,11,1)_100%)] lg:backdrop-blur-[0.75px]"></div>
            </div>

            {/* Clouds & Objects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Cloud 1 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[520px] w-full max-w-none opacity-80 h-full">
                    <Image src="/images/cloud-1.png" alt="cloud" fill className="object-contain" />
                </div>
                
                {/* Cloud 2 */}
                <div className="absolute -top-24 -left-60 w-[392px] h-[392px] animate-cloud-idle" style={{ animationDelay: '2s' }}>
                    <Image src="/images/cloud-2.png" alt="cloud" fill className="object-contain" />
                </div>
                
                {/* Cloud 3 */}
                <div className="absolute bottom-80 -right-96 w-[760px] h-[400px] animate-cloud-idle">
                    <Image src="/images/cloud-3.png" alt="cloud" fill className="object-contain" />
                </div>
                
                {/* Airplane */}
                <div className="absolute bottom-40 lg:bottom-24 left-0 lg:left-20 w-[600px] lg:w-[1272px] h-[300px] lg:h-[600px] rotate-[10deg] z-10">
                    <Image src="/images/airplane.png" alt="airplane" fill className="object-contain" />
                </div>

                {/* Cloud 4 */}
                <div className="absolute bottom-0 -left-20 w-[1272px] h-[400px] animate-cloud-idle" style={{ animationDelay: '1.2s' }}>
                    <Image src="/images/cloud-4.png" alt="cloud" fill className="object-contain" />
                </div>

                {/* Cloud 5 Instances */}
                <div className="absolute top-0 lg:top-24 -left-[782px] w-[1512px] h-[500px] min-w-[520px] animate-cloud-idle" style={{ animationDelay: '1.2s' }}>
                    <Image src="/images/cloud-5.png" alt="cloud" fill className="object-contain" />
                </div>
                <div className="absolute top-[460px] lg:top-60 left-[-200px] lg:-left-[400px] w-[1512px] h-[500px] min-w-[520px] animate-cloud-idle" style={{ animationDelay: '2s' }}>
                    <Image src="/images/cloud-5.png" alt="cloud" fill className="object-contain" />
                </div>
                <div className="absolute top-[480px] lg:top-40 left-[80px] lg:left-[160px] w-[1512px] h-[500px] min-w-[520px] animate-cloud-idle" style={{ animationDelay: '0.2s' }}>
                    <Image src="/images/cloud-5.png" alt="cloud" fill className="object-contain" />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col">
                <Navbar />

                {/* Hero Text */}
                <div className="mt-[-10%] lg:mt-[-12%] flex-1 flex flex-col justify-center items-center relative z-10 text-center">
                     <div className="title text-3xl lg:text-4xl bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_4.92%,rgba(255,255,255,0.40)_89.39%)] text-transparent bg-clip-text leading-none font-bold">Wanderlust Awaits</div>
                     <div className="title bg-[linear-gradient(180deg,#FFF_-16.99%,rgba(255,255,255,0.00)_100%)] text-transparent bg-clip-text text-8xl lg:text-[15rem] leading-none lg:-mt-14 font-bold tracking-tighter">Genesis</div>
                </div>
            </div>
        </div>
    );
}
