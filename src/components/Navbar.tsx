
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 transition-all duration-500">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#00FF41] flex items-center justify-center font-mono text-xs text-[#00FF41]">
                    AK
                </div>
                <span className="text-white font-mono text-sm tracking-tighter hidden sm:inline">ATUL_KUMAR // V.3.1.2</span>
            </div>

            <div className="flex gap-8 items-center">
                <a href="#flight-log" className="interactive-target font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#00FF41] transition-colors">History</a>
                <a href="#hangar" className="interactive-target font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#00FF41] transition-colors">Hangar</a>
                <button
                    popoverTarget="scramble-modal"
                    className="interactive-target font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-[#FF5F1F]/50 text-[#FF5F1F] bg-[#FF5F1F]/5 hover:bg-[#FF5F1F]/10 transition-all shadow-[0_0_15px_rgba(255,95,31,0.2)]"
                >
                    Scramble
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
