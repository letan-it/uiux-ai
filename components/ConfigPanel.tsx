'use client';

import { useTheme, hexColors } from './ThemeProvider';
import { useState, useRef, useEffect } from 'react';

export default function ConfigPanel() {
    const { theme, setTheme, primaryColor, setPrimaryColor } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (panelRef.current && !panelRef.current.contains(event.target as Node) && 
                btnRef.current && !btnRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const primaryKeys = Object.keys(hexColors).filter(k => !['slate', 'gray', 'zinc', 'neutral', 'stone'].includes(k));

    return (
        <div className="fixed bottom-6 xl:bottom-auto xl:top-6 right-6 z-[9999999]">
            <button 
                ref={btnRef}
                id="config-btn" 
                onClick={() => setIsOpen(!isOpen)}
                className="relative group rounded-lg w-10 h-10 flex items-center justify-center transition-all overflow-hidden bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 shadow-sm"
            >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-orange-500 via-green-500 to-blue-500 opacity-20 animate-spin-slow"></span>
                <span className="relative z-10 text-surface-800 dark:text-surface-100 flex">
                    <i className="pi pi-palette text-lg leading-none"></i>
                </span>
            </button>
            
            <div 
                ref={panelRef}
                id="config-panel" 
                className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-4 absolute bottom-[calc(100%+0.5rem)] xl:bottom-auto xl:top-[calc(100%+0.5rem)] right-0 w-[15.4rem] h-fit p-3 rounded-lg bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 shadow-sm transition-all ease-in-out z-[9999999]`}
            >
                <div>
                    <span className="text-lg font-semibold block mb-2">Primary Color</span>
                    <div className="flex gap-2 flex-wrap" id="primary-colors">
                        {primaryKeys.map((color) => (
                            <button
                                key={color}
                                className={`w-5 h-5 rounded-md border border-black/10 dark:border-white/10 outline-offset-2 transition-all hover:scale-110 ${primaryColor === color ? 'outline outline-2 outline-primary-500 dark:outline-primary-400' : ''}`}
                                style={{ backgroundColor: hexColors[color] }}
                                onClick={() => setPrimaryColor(color)}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Color Scheme</span>
                    <div className="flex bg-surface-100 dark:bg-surface-800 rounded-lg p-1">
                        <button 
                            onClick={() => setTheme('light')} 
                            className={theme === 'light' 
                                ? 'flex-1 py-1 rounded-md text-sm font-medium transition-colors bg-surface-0 dark:bg-surface-700 shadow-sm text-primary-500' 
                                : 'flex-1 py-1 rounded-md text-sm font-medium transition-colors hover:bg-surface-0 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400'
                            }
                        >
                            Light
                        </button>
                        <button 
                            onClick={() => setTheme('dark')} 
                            className={theme === 'dark' 
                                ? 'flex-1 py-1 rounded-md text-sm font-medium transition-colors bg-surface-0 dark:bg-surface-700 shadow-sm text-primary-500' 
                                : 'flex-1 py-1 rounded-md text-sm font-medium transition-colors hover:bg-surface-0 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-400'
                            }
                        >
                            Dark
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
