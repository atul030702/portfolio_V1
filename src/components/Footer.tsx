
const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#0a0c10] px-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="font-mono text-[10px] text-slate-600">
                    © {new Date().getFullYear()} ATUL_KUMAR
                </div>
                <div className="flex gap-6">
                    <a href="#" className="interactive-target font-mono text-[10px] uppercase text-slate-500 hover:text-[#00FF41] transition-colors">GH</a>
                    <a href="#" className="interactive-target font-mono text-[10px] uppercase text-slate-500 hover:text-[#00FF41] transition-colors">LI</a>
                    <a href="#" className="interactive-target font-mono text-[10px] uppercase text-slate-500 hover:text-[#00FF41] transition-colors">X</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;