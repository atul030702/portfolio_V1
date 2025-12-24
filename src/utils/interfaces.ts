export interface Flare {
  id: number;
  x: number;
  y: number;
}

export interface RadarPulse {
  radius: number;
  maxRadius: number;
  opacity: number;
}

export interface FlightPoint {
  x: number;
  y: number;
}

export interface FlightTrajectory {
  points: FlightPoint[];
  angle: number;
  curve: number;
  opacity: number;
  length: number;
}


export interface PullRequest {
  id: string;
  title: string;
  repo: string;
  status: 'merged' | 'open';
  date: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics?: string[];
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  metrics: string[];
  context: string;
}

export interface Skill {
  name: string;
  level: number;
  status: 'active' | 'loading' | 'standby';
}

export interface CornerBoxProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

export interface ScrambleModalProps {
  onClose: () => void;
  onOpenContact: () => void;
}

export interface ContactModalProps {
  onClose: () => void;
}