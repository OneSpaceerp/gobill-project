import { ArrowRightIcon, Calculator } from "lucide-react";

export const FinalCTASection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-900 shadow-2xl via-[#0B0552] to-slate-900 border border-slate-700/50 p-12 md:p-20 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-8 backdrop-blur-sm text-teal-400 mb-8">
                            <Calculator className="w-8 h-8" />
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Stop the Silent <span className="text-teal-400">Revenue Leak</span> Today.
                        </h2>
                        
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                            Get a truly finance-ready view of your practice performance. Let our experts analyze your current workflow and uncover hidden revenue.
                        </p>
                        
                        <a
                            href="/assessment"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-teal-50 transition-colors shadow-xl shadow-teal-500/20"
                        >
                            <span>Schedule Your Complimentary Assessment</span>
                            <ArrowRightIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
