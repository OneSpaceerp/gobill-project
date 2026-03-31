import { ArrowRightIcon, LineChart } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#0B0552] to-slate-900 text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/20 blur-[120px] rounded-full animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-400/20 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                    <span className="text-sm font-medium tracking-wide text-teal-300">New Performance Benchmark Achieved</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    From Billing to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Brilliance</span>
                    <br />
                    Turn Your Billing into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Profit Engine.</span>
                </h1>
                
                <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                    Most clinics lose <strong className="text-white font-semibold">20-30%</strong> of their revenue to hidden inefficiencies. GObill combines AI-driven analytics with proven RCM workflows to reclaim your earnings.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="/assessment"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-slate-900 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.6)]"
                    >
                        <span className="relative z-10">Schedule Your Complimentary Assessment</span>
                        <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    </a>
                    
                    <a
                        href="#proof-section"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                        <LineChart className="w-5 h-5 text-teal-400" />
                        <span>View 2026 Performance Roadmap</span>
                    </a>
                </div>
            </div>
            
            {/* Bottom wave/gradient divider */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </section>
    );
};
