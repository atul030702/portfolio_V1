"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Flare } from "../utils/interfaces";

const FlareLayer: React.FC = () => {
    const [flares, setFlares] = useState<Flare[]>([]);

    const handleGlobalClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        // Check if the click is on an interactive element; if so, don't spawn a flare.
        if (!target.closest('button, a, .interactive-target, input, textarea')) {
            const newFlare = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY
            };
            setFlares(prev => [...prev.slice(-10), newFlare]);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('click', handleGlobalClick);
        return () => window.removeEventListener('click', handleGlobalClick);
    }, [handleGlobalClick]);

    useEffect(() => {
        const timer = setInterval(() => {
            setFlares(prev => prev.filter(f => Date.now() - f.id < 1500));
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-60 overflow-hidden">
            {flares.map(flare => (
                <div
                    key={flare.id}
                    className="absolute"
                    style={{ left: flare.x, top: flare.y }}
                >
                    {[0, 1, 2].map(i => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-orange-500 animate-flare"
                            style={{
                                '--dx': `${(i - 1) * 60 + (Math.random() - 0.5) * 40}px`,
                                '--dy': `${150 + Math.random() * 100}px`,
                                animationDelay: `${i * 0.1}s`
                            } as any}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FlareLayer;
