import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import RadarAnimation from './RadarAnimation';
import { SocialIcon } from '../utils/socialIcons';
import { HUD_GREEN, socialAccounts } from '../utils/constants';
import { RadarPulse, FlightTrajectory, RadarHeroProps } from '../utils/interfaces';

const RadarHero: React.FC<RadarHeroProps> = ({ onInitiateContact, onOpenBriefing }) => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [scrollY, setScrollY] = useState(0);
  // const startTimeRef = useRef<number>(performance.now());

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll, { passive: true });
    
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   let animationFrame: number;
  //   let frameCount = 0;
  //   const pulses: RadarPulse[] = [];
  //   const trajectories: FlightTrajectory[] = [];
  //   const SWEEP_DURATION = 10000; // 10 seconds per rotation

  //   const handleResize = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize();

  //   const easeInOutCubic = (t: number): number => {
  //     return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  //   };

  //   const draw = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     const centerX = canvas.width / 2;
  //     const centerY = canvas.height / 2;
  //     const baseRadius = Math.min(canvas.width, canvas.height) * 0.32;
  //     const screenDiagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));

  //     const now = performance.now();
  //     const elapsed = now - startTimeRef.current;
  //     const progress = (elapsed % SWEEP_DURATION) / SWEEP_DURATION;
  //     const angle = easeInOutCubic(progress) * Math.PI * 2;

  //     // --- PULSE EFFECT ---
  //     if (frameCount % 100 === 0) {
  //       pulses.push({ radius: 0, maxRadius: screenDiagonal, opacity: 0.5 });
  //     }

  //     for (let i = pulses.length - 1; i >= 0; i--) {
  //       const p = pulses[i];
  //       p.radius += 2.0;
  //       p.opacity -= 0.003;

  //       if (p.opacity <= 0 || p.radius >= p.maxRadius) {
  //         pulses.splice(i, 1);
  //         continue;
  //       }

  //       ctx.beginPath();
  //       ctx.arc(centerX, centerY, p.radius, 0, Math.PI * 2);
  //       ctx.strokeStyle = `rgba(0, 255, 65, ${p.opacity * 0.4})`;
  //       ctx.lineWidth = 1;
  //       ctx.stroke();
  //     }

  //     // --- FLIGHT TRAJECTORIES ---
  //     if (frameCount % 180 === 0) {
  //       trajectories.push({
  //         points: [{ x: centerX, y: centerY }],
  //         angle: Math.random() * Math.PI * 2,
  //         curve: (Math.random() - 0.5) * 0.02,
  //         opacity: 0.8,
  //         length: 0
  //       });
  //     }

  //     ctx.save();
  //     for (let i = trajectories.length - 1; i >= 0; i--) {
  //       const traj = trajectories[i];
  //       traj.opacity -= 0.002;
  //       traj.length += 3;
        
  //       const lastPoint = traj.points[traj.points.length - 1];
  //       traj.angle += traj.curve;
  //       const nextX = lastPoint.x + Math.cos(traj.angle) * 3;
  //       const nextY = lastPoint.y + Math.sin(traj.angle) * 3;
        
  //       if (traj.points.length < 200) {
  //         traj.points.push({ x: nextX, y: nextY });
  //       }

  //       if (traj.opacity <= 0 || traj.length > 1000) {
  //         trajectories.splice(i, 1);
  //         continue;
  //       }

  //       ctx.beginPath();
  //       ctx.setLineDash([4, 8]);
  //       ctx.moveTo(traj.points[0].x, traj.points[0].y);
  //       for (let j = 1; j < traj.points.length; j++) {
  //         ctx.lineTo(traj.points[j].x, traj.points[j].y);
  //       }
  //       ctx.strokeStyle = `rgba(0, 255, 65, ${traj.opacity * 0.4})`;
  //       ctx.lineWidth = 1;
  //       ctx.stroke();

  //       const head = traj.points[traj.points.length - 1];
  //       ctx.beginPath();
  //       ctx.setLineDash([]);
  //       ctx.arc(head.x, head.y, 1.5, 0, Math.PI * 2);
  //       ctx.fillStyle = `rgba(0, 255, 65, ${traj.opacity})`;
  //       ctx.shadowBlur = 10;
  //       ctx.shadowColor = HUD_GREEN;
  //       ctx.fill();
  //       ctx.shadowBlur = 0;
  //     }
  //     ctx.restore();

  //     // --- RADAR BASE ---
  //     ctx.strokeStyle = 'rgba(0, 255, 65, 0.25)';
  //     ctx.lineWidth = 1;
  //     for (let r = 0; r < 4; r++) {
  //       const currentR = (baseRadius / 4) * (r + 1);
  //       ctx.beginPath();
  //       ctx.arc(centerX, centerY, currentR, 0, Math.PI * 2);
  //       ctx.stroke();
  //     }

  //     // --- SWEEP EFFECT ---
  //     ctx.save();
  //     const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius);
  //     gradient.addColorStop(0, 'rgba(0, 255, 65, 0)');
  //     gradient.addColorStop(1, 'rgba(0, 255, 65, 0.35)');
  //     ctx.beginPath();
  //     ctx.moveTo(centerX, centerY);
  //     ctx.arc(centerX, centerY, baseRadius, angle - 0.7, angle);
  //     ctx.lineTo(centerX, centerY);
  //     ctx.fillStyle = gradient;
  //     ctx.fill();
      
  //     ctx.beginPath();
  //     ctx.moveTo(centerX, centerY);
  //     ctx.lineTo(centerX + Math.cos(angle) * baseRadius, centerY + Math.sin(angle) * baseRadius);
  //     ctx.strokeStyle = 'rgba(0, 255, 65, 0.8)';
  //     ctx.lineWidth = 2;
  //     ctx.stroke();
  //     ctx.restore();

  //     frameCount++;
  //     animationFrame = requestAnimationFrame(draw);
  //   };

  //   draw();

  //   return () => {
  //     cancelAnimationFrame(animationFrame);
  //     window.removeEventListener('resize', handleResize);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-[#0a0c10]">
      {/* Soft vignette to ground the text */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(10,12,16,0)_0%,rgba(10,12,16,0.5)_100%)] z-[1]" />
  
      <RadarAnimation />
      
      <div className="z-10 text-center px-6 max-w-6xl flex flex-col items-center relative">
        <div className="relative mb-10 group">
            <div className="absolute -inset-4 border border-[#00FF41]/20 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#00FF41]/60 bg-black relative shadow-[0_0_40px_rgba(0,255,65,0.15)]">
              <Image 
                src="/public/pilot-avatar.png" 
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
              className="interactive-target flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/10 hover:border-[#00FF41] hover:bg-[#00FF41]/10 transition-all group backdrop-blur-sm"
              title={social.label}
            >
              <span className="text-[#00FF41] group-hover:scale-110 transition-transform"><SocialIcon type={social.type} /></span>
              <span className="font-mono text-[10px] uppercase text-slate-400 group-hover:text-white transition-colors tracking-widest">{social.label}</span>
            </a>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button 
            onClick={onInitiateContact}
            className="interactive-target relative px-12 py-5 bg-[#00FF41] text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#00e039] transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          >
            Initiate Contact
          </button>
          <button 
            onClick={onOpenBriefing}
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

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #00FF41;
          color: transparent;
          filter: drop-shadow(0 0 5px rgba(0, 255, 65, 0.2));
        }
        @media (max-width: 768px) {
          .stroke-text { 
            color: #00FF41; 
            -webkit-text-stroke: 0; 
          }
        }
      `}</style>
    </section>
  );
};

export default RadarHero;