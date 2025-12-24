import Image from "next/image";
import CornerBox from "./CornerBox";

const AboutMe = ({ id = "about-modal" }: { id?: string }) => {
    return (
        <div
            id={id}
            popover="auto"
            className="group outline-none"
        >
            <div className="flex items-center justify-center p-6 min-h-screen">
                <CornerBox className="w-full max-w-2xl p-0 bg-[#0a0c10]/98 border-white/10 overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.05)] relative">
                    <div className="flex h-full flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-[#00FF41]/5 p-8 border-b md:border-b-0 md:border-r border-white/5 flex flex-col items-center">
                            <div className="w-32 h-32 rounded-sm border border-[#00FF41]/40 overflow-hidden mb-6 relative group">
                                <Image
                                    width={150}
                                    height={150}
                                    src="/me.jpg"
                                    className="object-cover"
                                    alt="Atul Kumar"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                            </div>
                            <div className="text-center">
                                <h2 className="font-semibold text-white uppercase tracking-tighter text-xl mb-1">ATUL KUMAR</h2>
                                <p className="font-mono text-[9px] text-hud-green uppercase tracking-[0.3em]">CALLSIGN: FRONTIER</p>
                            </div>
                            <div className="mt-8 w-full space-y-4 font-mono text-[8px] text-slate-500 uppercase">
                                <div className="flex justify-between border-b border-white/5 pb-1"><span>Base:</span> <span className="text-white">Patna, IN</span></div>
                                <div className="flex justify-between border-b border-white/5 pb-1"><span>Flight_Hrs:</span> <span className="text-white">5,200+ (Coding)</span></div>
                                <div className="flex justify-between border-b border-white/5 pb-1"><span>Rank:</span> <span className="text-white">Software Engineer</span></div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 p-10 relative">
                            <div className="absolute top-4 right-4">
                                <button
                                    popoverTarget={id}
                                    popoverTargetAction="hide"
                                    className="interactive-target text-slate-600 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="mb-8">
                                <h3 className="font-mono text-[10px] text-hud-green uppercase tracking-[0.4em] mb-2">Tactical Intelligence Report</h3>
                                <div className="h-px w-12 bg-hud-green mb-6"></div>
                                <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                                    Specialist in high-performance frontend architectures. Expertise in converting complex requirements into fluid, low-latency interfaces. Proven track record in open-source leadership and freelance consultancy for mission-critical SaaS platforms.
                                </p>
                                <p className="text-slate-400 text-xs leading-relaxed italic">
                                    "Obsessed with precision, aesthetics, and the silent mechanics of a perfectly optimized render cycle."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-white/5 bg-white/2 rounded-sm">
                                    <p className="font-mono text-[9px] text-slate-500 uppercase mb-1">CORE_STACK</p>
                                    <p className="text-[11px] text-white">TS, REACT, GO, TAILWIND</p>
                                </div>
                                <div className="p-4 border border-white/5 bg-white/2 rounded-sm">
                                    <p className="font-mono text-[9px] text-slate-500 uppercase mb-1">SPECIALIZATION</p>
                                    <p className="text-[11px] text-white">UI/UX, PERFORMANCE, TOOLING</p>
                                </div>
                            </div>
                            <div className="mt-12 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 border border-hud-green/20 flex items-center justify-center font-black text-xs text-hud-green/40">TOP</div>
                                    <span className="font-mono text-[8px] text-slate-600 uppercase tracking-widest">DECLASS_V09</span>
                                </div>
                                <button
                                    popoverTarget="contact-modal"
                                    className="interactive-target font-mono text-[10px] text-hud-green uppercase tracking-widest hover:underline"
                                >
                                    Full_Dossier &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </CornerBox>
            </div>
        </div>
    );
};

export default AboutMe;