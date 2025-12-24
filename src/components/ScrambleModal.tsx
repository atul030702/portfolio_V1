
import React from 'react';
import { ScrambleModalProps } from '../utils/interfaces';

const ScrambleModal: React.FC<ScrambleModalProps & { id?: string }> = ({ onClose, onOpenContact, id = "scramble-modal" }) => {
    return (
        <div
            id={id}
            popover="auto"
            className="bg-transparent group outline-none w-full h-full max-w-none max-h-none m-0 items-center justify-center p-6 backdrop-blur-xl"
            style={{ background: 'rgba(0,0,0,0.8)' }} // Inline style for backup or specificity if global backdrop fails for some reason, but sticking to globals is better. Let's remove this valid inline and trust globals. Actually, the scramble modal had a darker background.
        >
            <div className="w-full h-full flex items-center justify-center p-6">
                <div className="max-w-4xl w-full">
                    <div className="flex justify-between items-end mb-12 border-b border-[#FF5F1F]/20 pb-6">
                        <div>
                            <h2 className="text-4xl font-black text-[#FF5F1F] uppercase italic tracking-tighter">SCRAMBLE_PROTOCOL</h2>
                            <p className="font-mono text-[10px] text-[#FF5F1F]/60 mt-2 uppercase tracking-[0.5em]">Emergency Launch Authorization Required</p>
                        </div>
                        <button
                            popoverTarget={id}
                            popoverTargetAction="hide"
                            className="interactive-target text-[#FF5F1F] font-mono text-xs uppercase tracking-widest border border-[#FF5F1F]/30 px-4 py-2 hover:bg-[#FF5F1F]/10"
                        >
                            Stand Down
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="#" className="interactive-target group p-8 bg-[#FF5F1F]/5 border border-[#FF5F1F]/20 hover:bg-[#FF5F1F]/10 transition-all">
                            <div className="mb-8 flex justify-between">
                                <div className="w-10 h-10 border border-[#FF5F1F] flex items-center justify-center font-black text-[#FF5F1F]">01</div>
                                <svg className="w-6 h-6 text-[#FF5F1F]/40 group-hover:text-[#FF5F1F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" /></svg>
                            </div>
                            <h3 className="font-black text-xl mb-2 text-white group-hover:text-[#FF5F1F] transition-colors">MISSION_BRIEFING</h3>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">Download current Resume / CV for recruitment analysis.</p>
                        </a>

                        <button
                            type="button"
                            popoverTarget="contact-modal"
                            className="interactive-target group p-8 bg-[#FF5F1F]/5 border border-[#FF5F1F]/20 hover:bg-[#FF5F1F]/10 transition-all text-left"
                        >
                            <div className="mb-8 flex justify-between">
                                <div className="w-10 h-10 border border-[#FF5F1F] flex items-center justify-center font-black text-[#FF5F1F]">02</div>
                                <svg className="w-6 h-6 text-[#FF5F1F]/40 group-hover:text-[#FF5F1F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z" /></svg>
                            </div>
                            <h3 className="font-black text-xl mb-2 text-white group-hover:text-[#FF5F1F] transition-colors">DIRECT_CHANNEL</h3>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">Establish immediate high-priority secure communication.</p>
                        </button>

                        <a href="https://github.com/atul0307" target="_blank" rel="noopener noreferrer"
                            className="interactive-target group p-8 bg-[#FF5F1F]/5 border border-[#FF5F1F]/20 hover:bg-[#FF5F1F]/10 transition-all"
                        >
                            <div className="mb-8 flex justify-between">
                                <div className="w-10 h-10 border border-[#FF5F1F] flex items-center justify-center font-black text-[#FF5F1F]">03</div>
                                <svg className="w-6 h-6 text-[#FF5F1F]/40 group-hover:text-[#FF5F1F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                            </div>
                            <h3 className="font-black text-xl mb-2 text-white group-hover:text-[#FF5F1F] transition-colors">CODEBASE_ACCESS</h3>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">Inspect open-source repositories and engineering artifacts.</p>
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'FUEL_LEVEL', value: '100%', color: '#00FF41' },
                            { label: 'ENGINE_TEMP', value: 'STABLE', color: '#00FF41' },
                            { label: 'COMM_STATUS', value: 'LINKED', color: '#00FF41' },
                            { label: 'WEAPONS_SYS', value: 'SAFE', color: '#FF5F1F' }
                        ].map(stat => (
                            <div key={stat.label} className="border border-white/5 p-4 rounded-sm bg-white/2">
                                <p className="font-mono text-[8px] text-slate-600 uppercase mb-1">{stat.label}</p>
                                <p className="font-mono text-xs font-bold" style={{ color: stat.color }}>{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrambleModal;
