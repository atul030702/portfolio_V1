"use client";

import React, { useEffect, useState } from 'react';
import { HUD_GREEN } from '../utils/constants';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, .interactive-target');
            setIsHovering(!!isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    if (!isVisible || typeof window === 'undefined' || window.innerWidth <= 768) return null;

    return (
        <>
            <div
                className="fixed pointer-events-none z-9999 mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.15s, height 0.15s, background-color 0.15s'
                }}
            >
                {/* The Crosshair */}
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute h-0.5 w-6 opacity-50"
                        style={{ backgroundColor: HUD_GREEN }}
                    />
                    <div
                        className="absolute h-6 w-0.5 opacity-50"
                        style={{ backgroundColor: HUD_GREEN }}
                    />

                    {/* Target Ring */}
                    <div
                        className={`border rounded-full transition-all duration-300 ${isHovering ? 'w-12 h-12 scale-110' : 'w-8 h-8 opacity-40'}`}
                        style={{ borderColor: HUD_GREEN }}
                    />

                    {/* Data Points (Tiny dots in corners) */}
                    {isHovering && (
                        <div className="absolute font-mono text-[8px] -top-8 -right-8 animate-pulse" style={{ color: HUD_GREEN }}>
                            TRK_LOCK: ON
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CustomCursor;