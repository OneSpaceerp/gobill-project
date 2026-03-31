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
                    
                    {/* Abstract graphic representing the platform/dashboard */}
                    <div className="relative h-[400px] w-full bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-2xl flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5"></div>
                        {/* Mock UI Elements */}
                        <div className="relative z-10 w-[80%] h-[70%] bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col p-6 animate-float">
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-1/3 h-4 bg-slate-100 rounded-full"></div>
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-teal-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="h-20 bg-slate-50 rounded-lg p-3">
                                    <div className="w-6 h-6 rounded-full bg-teal-100 mb-2"></div>
                                    <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                                </div>
                                <div className="h-20 bg-slate-50 rounded-lg p-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-100 mb-2"></div>
                                    <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                                </div>
                                <div className="h-20 bg-slate-50 rounded-lg p-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 mb-2"></div>
                                    <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-lg relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-teal-100/50 to-transparent"></div>
                                <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="rgba(45, 212, 191, 0.2)" stroke="none" />
                                    <path d="M0,100 L0,60 Q25,30 50,70 T100,40 L100,100 Z" fill="none" stroke="rgba(45, 212, 191, 0.5)" strokeWidth="2" />
                                </svg>
                            </div>
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
