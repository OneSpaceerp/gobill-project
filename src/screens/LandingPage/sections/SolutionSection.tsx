import { BrainCircuit, ShieldCheck, HeadphonesIcon, BarChart3, CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "AI-Powered Financial Intelligence",
        description: "Real-time dashboards for revenue trends, AR aging, and payer performance. Stop guessing, start knowing.",
        icon: BrainCircuit,
        benefits: ["Predictive Cashflow", "Payer Performance Tracking", "AR Aging Alerts"]
    },
    {
        title: "Automated Authorization Tracking",
        description: "Real-time alerts before expirations to prevent treatment delays and secure coverage proactively.",
        icon: ShieldCheck,
        benefits: ["No Missed Renewals", "Instant Status Sync", "Lower Write-offs"]
    },
    {
        title: "Virtual Front Desk",
        description: "We handle billing calls, scheduling, and digital forms so your team can focus exclusively on patients.",
        icon: HeadphonesIcon,
        benefits: ["Zero Hold Times", "Bilingual Support", "Patient Self-Service"]
    },
    {
        title: "Denial Prevention Program",
        description: "Full audit and appeal workflows designed to keep rejection rates under 1% consistently.",
        icon: BarChart3,
        benefits: ["Pre-claim Scrubbing", "Automated Appeals", "Root-cause Analysis"]
    }
];

export const SolutionSection = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            We Don&apos;t Just Bill.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">We Optimize.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            A seamless integration of AI-driven technology and expert RCM workflows that completely transforms your revenue cycle.
                        </p>
                    </div>
                    
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-slate-50 border border-slate-100">
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                            alt="Advanced Revenue Cycle Optimization Dashboard"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <span className="px-3 py-1 bg-teal-500/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Live Analysis</span>
                            <h4 className="text-lg font-bold">Real-time Performance Benchmarking</h4>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-teal-200 transition-colors duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                                    <Icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
