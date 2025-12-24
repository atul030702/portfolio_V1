import { useEffect, useState, useRef } from "react";

import { RadarPulse, FlightTrajectory } from "../utils/interfaces";
import { HUD_GREEN } from "../utils/constants";

const RadarAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [scrollY, setScrollY] = useState(0);
    const startTimeRef = useRef<number>(performance.now());
    
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        let animationFrame: number;
        let frameCount = 0;
        const pulses: RadarPulse[] = [];
        const trajectories: FlightTrajectory[] = [];
        const SWEEP_DURATION = 10000; // 10 seconds per rotation
    
        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
    
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const baseRadius = Math.min(canvas.width, canvas.height) * 0.32;
            const screenDiagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
    
            const now = performance.now();
            const elapsed = now - startTimeRef.current;
            const progress = (elapsed % SWEEP_DURATION) / SWEEP_DURATION;
            const angle = easeInOutCubic(progress) * Math.PI * 2;
    
            // --- PULSE EFFECT ---
            if (frameCount % 100 === 0) {
              pulses.push({ radius: 0, maxRadius: screenDiagonal, opacity: 0.5 });
            }
    
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                p.radius += 2.0;
                p.opacity -= 0.003;
        
                if (p.opacity <= 0 || p.radius >= p.maxRadius) {
                pulses.splice(i, 1);
                continue;
                }
        
                ctx.beginPath();
                ctx.arc(centerX, centerY, p.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(0, 255, 65, ${p.opacity * 0.4})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
    
            // --- FLIGHT TRAJECTORIES ---
            if (frameCount % 180 === 0) {
                trajectories.push({
                points: [{ x: centerX, y: centerY }],
                angle: Math.random() * Math.PI * 2,
                curve: (Math.random() - 0.5) * 0.02,
                opacity: 0.8,
                length: 0
                });
            }
    
            ctx.save();
            for (let i = trajectories.length - 1; i >= 0; i--) {
                const traj = trajectories[i];
                traj.opacity -= 0.002;
                traj.length += 3;
                
                const lastPoint = traj.points[traj.points.length - 1];
                traj.angle += traj.curve;
                const nextX = lastPoint.x + Math.cos(traj.angle) * 3;
                const nextY = lastPoint.y + Math.sin(traj.angle) * 3;
                
                if (traj.points.length < 200) {
                    traj.points.push({ x: nextX, y: nextY });
                }
        
                if (traj.opacity <= 0 || traj.length > 1000) {
                    trajectories.splice(i, 1);
                    continue;
                }
        
                ctx.beginPath();
                ctx.setLineDash([4, 8]);
                ctx.moveTo(traj.points[0].x, traj.points[0].y);

                for (let j = 1; j < traj.points.length; j++) {
                    ctx.lineTo(traj.points[j].x, traj.points[j].y);
                }

                ctx.strokeStyle = `rgba(0, 255, 65, ${traj.opacity * 0.4})`;
                ctx.lineWidth = 1;
                ctx.stroke();
        
                const head = traj.points[traj.points.length - 1];
                ctx.beginPath();
                ctx.setLineDash([]);
                ctx.arc(head.x, head.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 65, ${traj.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = HUD_GREEN;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
            ctx.restore();
    
            // --- RADAR BASE ---
            ctx.strokeStyle = 'rgba(0, 255, 65, 0.25)';
            ctx.lineWidth = 1;
            for (let r = 0; r < 4; r++) {
                const currentR = (baseRadius / 4) * (r + 1);
                ctx.beginPath();
                ctx.arc(centerX, centerY, currentR, 0, Math.PI * 2);
                ctx.stroke();
            }
    
            // --- SWEEP EFFECT ---
            ctx.save();
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius);
            gradient.addColorStop(0, 'rgba(0, 255, 65, 0)');
            gradient.addColorStop(1, 'rgba(0, 255, 65, 0.35)');
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, baseRadius, angle - 0.7, angle);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + Math.cos(angle) * baseRadius, centerY + Math.sin(angle) * baseRadius);
            ctx.strokeStyle = 'rgba(0, 255, 65, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
        
            frameCount++;
            animationFrame = requestAnimationFrame(draw);
        };
    
        draw();
    
        return () => {
          cancelAnimationFrame(animationFrame);
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
            <canvas ref={canvasRef} className="w-full h-full opacity-50" />
        </div>
    );
};

export default RadarAnimation;