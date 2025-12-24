
import React from 'react';
import CornerBox from './CornerBox';
import { ContactModalProps } from '../utils/interfaces';

const ContactModal: React.FC<ContactModalProps & { id?: string }> = ({ onClose, id = "contact-modal" }) => {
    return (
        <div
            id={id}
            popover="auto"
            className="group outline-none"
        >
            <div className="flex items-center justify-center p-6 min-h-screen">
                <CornerBox className="w-full max-w-xl p-8 bg-[#0a0c10]/95 border-hud-green/20 shadow-[0_0_50px_rgba(0,255,65,0.15)] relative">
                    <div className="flex justify-between items-center mb-8 border-b border-hud-green/10 pb-4">
                        <div>
                            <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-hud-green animate-pulse"></span>
                                Tactical Transmission
                            </h2>
                            <p className="font-mono text-[10px] text-slate-500 mt-1 uppercase">Secure Line // Est. 2024</p>
                        </div>
                        <button
                            popoverTarget={id}
                            popoverTargetAction="hide"
                            className="interactive-target text-slate-500 hover:text-hud-green transition-colors"
                            type="button"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500 block">Identifier_Name</label>
                                <input type="text" required className="w-full bg-white/5 border border-white/10 p-3 font-mono text-sm focus:border-hud-green focus:outline-none text-slate-200" placeholder="Enter Name..." />
                            </div>
                            <div className="space-y-2">
                                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500 block">Communication_Link</label>
                                <input type="email" required className="w-full bg-white/5 border border-white/10 p-3 font-mono text-sm focus:border-hud-green focus:outline-none text-slate-200" placeholder="Enter Email..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500 block">Mission_Parameters</label>
                            <textarea required rows={4} className="w-full bg-white/5 border border-white/10 p-3 font-mono text-sm focus:border-hud-green focus:outline-none text-slate-200 resize-none" placeholder="Describe mission requirements..." />
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button type="submit" className="interactive-target flex-1 bg-hud-green text-black font-black uppercase tracking-[0.2em] py-4 text-xs hover:bg-[#00e039] transition-all transform active:scale-95">Engage Transmission</button>
                            <button
                                type="button"
                                popoverTarget={id}
                                popoverTargetAction="hide"
                                className="interactive-target px-8 border border-[#FF5F1F]/40 text-[#FF5F1F] font-mono text-[10px] uppercase tracking-widest hover:bg-[#FF5F1F]/10 transition-all"
                            >
                                Abort
                            </button>
                        </div>
                    </form>
                </CornerBox>
            </div>
        </div>
    );
};

export default ContactModal;
