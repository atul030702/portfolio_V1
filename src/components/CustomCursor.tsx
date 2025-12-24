"use client";

import React, { useEffect, useRef, useState } from 'react';

import { INTERACTIVE_SELECTORS } from '../utils/constants';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);
    const rafIdRef = useRef<number | null>(null);

    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const isMobile = window.innerWidth <= 768;
            setShouldRender(!isMobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!shouldRender) return;

        if (typeof window !== 'undefined') {
            const { innerWidth, innerHeight } = window;
            const cx = innerWidth / 2;
            const cy = innerHeight / 2;
            targetRef.current = { x: cx, y: cy };
            currentRef.current = { x: cx, y: cy };
        }

        const lerp = (start: number, end: number, factor: number) =>
            start + (end - start) * factor;

        const updateCursor = () => {
            if (document.hidden) {
                rafIdRef.current = requestAnimationFrame(updateCursor);
                return;
            }

            if (cursorRef.current) {
                const target = targetRef.current;
                const current = currentRef.current;

                current.x = lerp(current.x, target.x, 0.15);
                current.y = lerp(current.y, target.y, 0.15);

                cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
            }

            rafIdRef.current = requestAnimationFrame(updateCursor);
        };

        const checkInteractivity = (target: Element | null) => {
            if (!cursorRef.current || !target) return;

            const isInteractive = !!target.closest(INTERACTIVE_SELECTORS);

            if (isInteractive !== isHoveringRef.current) {
                isHoveringRef.current = isInteractive;
                if (isInteractive) {
                    cursorRef.current.classList.add('is-hovering');
                } else {
                    cursorRef.current.classList.remove('is-hovering');
                }
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            targetRef.current.x = e.clientX;
            targetRef.current.y = e.clientY;
            checkInteractivity(e.target as Element);
        };

        const onScroll = () => {
            if (cursorRef.current) {
                const el = document.elementFromPoint(targetRef.current.x, targetRef.current.y);
                checkInteractivity(el);
            }
        };

        const onMouseEnter = () => cursorRef.current?.classList.remove('opacity-0');
        const onMouseLeave = () => cursorRef.current?.classList.add('opacity-0');

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        rafIdRef.current = requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        };
    }, [shouldRender]);

    if (!shouldRender) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference will-change-transform transition-opacity duration-300"
            style={{
                transform: 'translate3d(-100px, -100px, 0)'
            }}
        >
            <div className="relative flex items-center justify-center">
                <div
                    className="absolute h-0.5 w-6 opacity-50 bg-hud-green transition-colors duration-300"
                />
                <div
                    className="absolute h-6 w-0.5 opacity-50 bg-hud-green transition-colors duration-300"
                />

                <div
                    className="target-ring text-hud-green border rounded-full transition-all duration-200 w-8 h-8 opacity-40 border-hud-green box-border"
                />

                <div
                    className="trk-lock hidden absolute font-mono text-hud-green text-[8px] -top-6 -right-6 opacity-0 transition-all duration-200 whitespace-nowrap"
                >
                    TRK_LOCK: ON
                </div>
            </div>
        </div>
    );
};

export default CustomCursor;