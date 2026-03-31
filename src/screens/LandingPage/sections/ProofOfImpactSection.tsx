import { TrendingUp, FileCheck2, CalendarClock, Shield } from "lucide-react";

const impacts = [
    {
        icon: TrendingUp,
        metric: "+22%",
        label: "Revenue Growth",
        desc: "Average increase within first year of engagement."
    },
    {
        icon: FileCheck2,
        metric: "+97%",
        label: "Cashflow Accuracy",
        desc: "Predictable revenue projections."
    },
    {
        icon: CalendarClock,
        metric: "15 Days",
        label: "Payment Lag",
        desc: "Reduced dramatically from the industry average of 35 days."
    },
    {
        icon: Shield,
        metric: "<1%",
        label: "Claim Rejection",
        desc: "Initial rejection rate maintained consistently."
    }
];

export const ProofOfImpactSection = () => {
    return (
        <section id="proof-section" className="py-24 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/20 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Real Control. <span className="text-teal-400">Real Impact.</span></h2>
                    <p className="text-xl text-slate-400 font-light">
                        Our AI-driven workflow translates to measurable outcomes you can see on your bottom line.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impacts.map((impact, idx) => {
                        const Icon = impact.icon;
                        return (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <Icon className="w-10 h-10 text-cyan-400 mb-6" />
                                <div className="text-5xl font-extrabold text-white tracking-tight mb-2">
                                    {impact.metric}
                                </div>
                                <div className="text-lg font-bold text-teal-300 mb-3 uppercase tracking-wide">
                                    {impact.label}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {impact.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
