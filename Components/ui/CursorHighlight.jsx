import React, { useEffect, useRef } from 'react';

export default function CursorHighlight() {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        const handleMouseMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        };

        const handleMouseEnter = () => {
            cursor.style.opacity = '1';
            cursorDot.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        };

        // Only show on desktop devices
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            {/* Main cursor glow */}
            <div 
                ref={cursorRef}
                className="fixed pointer-events-none z-50 opacity-0 transition-opacity duration-300"
                style={{
                    width: '40px',
                    height: '40px',
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Small dot cursor */}
            <div 
                ref={cursorDotRef}
                className="fixed pointer-events-none z-50 opacity-0 transition-opacity duration-300"
                style={{
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #9333ea, #ec4899)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
}