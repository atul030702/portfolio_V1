"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import RadarAnimation from './RadarAnimation';
import { SocialIcon } from '../utils/socialIcons';
import { socialAccounts } from '../utils/constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-[#0a0c10]">
      {/* Soft vignette to ground the text */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(10,12,16,0)_0%,rgba(10,12,16,0.5)_100%)] z-1" />

      <RadarAnimation />

      <div className="z-10 text-center px-6 max-w-6xl flex flex-col items-center relative">
        <div className="relative mb-10 group">
          <div className="absolute -inset-4 border border-[#00FF41]/20 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#00FF41]/60 bg-black relative shadow-[0_0_40px_rgba(0,255,65,0.15)]">
            <Image
              width={400}
              height={400}
              src="/pilot-avatar.png"
              alt="Atul Kumar Pilot Avatar"
              className="w-full h-full object-cover grayscale brightness-110 contrast-110"
            />
            <div className="absolute inset-0 bg-hud-green/10 mix-blend-overlay" />
          </div>
          <div className="absolute bottom-1 right-1 bg-[#00FF41] text-black font-mono text-[9px] px-2 py-0.5 font-bold rounded-sm shadow-lg">
            STATUS: SCRAMBLE
          </div>
        </div>

        <div className="inline-block px-4 py-1.5 mb-10 border border-[#00FF41]/40 bg-[#00FF41]/5 rounded-sm backdrop-blur-sm">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00FF41] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00FF41] rounded-full animate-pulse" />
            Frontend Engineer // Mission Ready
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 uppercase flex flex-wrap justify-center gap-x-6 drop-shadow-2xl">
          <span className="text-white">Atul</span>
          <span className="text-[#00FF41] stroke-text">Kumar</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-mono mb-12 tracking-widest border-l-2 border-[#00FF41] pl-6 py-1 leading-relaxed drop-shadow-md">
          Architecting High-G User Interfaces
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialAccounts.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-target flex items-center gap-2 px-5 py-2.5 bg-white/3 border border-white/10 hover:border-[#00FF41] hover:bg-[#00FF41]/10 transition-all group backdrop-blur-sm"
              title={social.label}
            >
              <span className="text-[#00FF41] group-hover:scale-110 transition-transform"><SocialIcon type={social.type} /></span>
              <span className="font-mono text-[10px] uppercase text-slate-400 group-hover:text-white transition-colors tracking-widest">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button
            popoverTarget="contact-modal"
            className="interactive-target relative px-12 py-5 bg-[#00FF41] text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#00e039] transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          >
            Initiate Contact
          </button>
          <button
            popoverTarget="about-modal"
            className="interactive-target font-mono text-[11px] uppercase tracking-widest text-slate-300 hover:text-[#00FF41] transition-colors flex items-center gap-3 py-2 group"
          >
            <span className="group-hover:translate-y-1 transition-transform">&darr;</span> Tactical Briefing
          </button>
        </div>
      </div>

      <div
        className="absolute left-8 bottom-8 hidden xl:block font-mono text-[9px] text-slate-500 space-y-2 opacity-40 z-10"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <p>COORD_LAT: 28.6139 N</p>
        <p>COORD_LNG: 77.2090 E</p>
        <p>SAT_LINK: ESTABLISHED</p>
      </div>

      <div
        className="absolute right-8 bottom-8 hidden xl:block text-right font-mono text-[9px] text-slate-500 space-y-2 opacity-40 z-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <p>FRONTEND_LOAD: 0.12</p>
        <p>RENDER_ENGINE: BLINK</p>
        <p>SEC_ENCRYPT: RSA_4096</p>
      </div>


    </section>
  );
};

export default Hero;