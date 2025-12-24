import React from 'react';
import { CornerBoxProps } from '../utils/interfaces';

const CornerBox: React.FC<CornerBoxProps> = ({ children, className = '', accentColor = '#00FF41' }) => {
    return (
        <div className={`relative border border-white/10 bg-white/5 backdrop-blur-sm group ${className}`}>
            {/* Top Left Corner */}
            <div
                className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2"
                style={{ borderColor: accentColor }}
            />
            {/* Top Right Corner */}
            <div
                className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2"
                style={{ borderColor: accentColor }}
            />
            {/* Bottom Left Corner */}
            <div
                className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2"
                style={{ borderColor: accentColor }}
            />
            {/* Bottom Right Corner */}
            <div
                className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2"
                style={{ borderColor: accentColor }}
            />

            {children}
        </div>
    );
};

export default CornerBox;