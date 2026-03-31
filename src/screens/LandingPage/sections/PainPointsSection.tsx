import { AlertCircle, Clock, Ban, Users, Activity } from "lucide-react";

const stats = [
    {
        id: 1,
        title: "The Onboarding Gap",
        description: "34% of front desk staff struggle to juggle tasks, leading to 10-day delays in first-claim submissions.",
        icon: Users,
        metric: "10 Days",
        metricLabel: "Delay",
        color: "from-rose-500 to-pink-600"
    },
    {
        id: 2,
        title: "The Authorization Black Hole",
        description: "80.2% of practices wait 3+ days for prior auths, causing missed appointments and unpaid claims.",
        icon: Clock,
        metric: "80.2%",
        metricLabel: "Practices Delayed",
        color: "from-orange-500 to-amber-500"
    },
    {
        id: 3,
        title: "The Denial Spiral",
        description: "1 in 10 claims are denied, yet only 35% are ever resubmitted. Meaning hard-earned money left on the table.",
        icon: Ban,
        metric: "1 in 10",
        metricLabel: "Denied",
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 4,
        title: "Financial Blind Spots",
        description: "75% of practices add non-clinical staff just to keep up with the administrative burden.",
        icon: AlertCircle,
        metric: "75%",
        metricLabel: "Add Overhead",
        color: "from-blue-500 to-cyan-500"
    }
];

export const PainPointsSection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-medium text-sm mb-6">
                        <Activity className="w-4 h-4" />
                        The Hidden Leak
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Is Your Practice Losing Money You've Already Earned?
                    </h2>
                    <p className="text-xl text-slate-600">
                        Even with excellent clinical care, administrative complexity slows your cash flow. See where the leaks happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={stat.id} 
                                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Decorative Gradient Blur */}
                                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${stat.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{stat.title}</h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">{stat.description}</p>
                                        
                                        <div className="pt-6 border-t border-slate-100 flex items-baseline gap-3">
                                            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{stat.metric}</span>
                                            <span className="font-medium text-slate-500 uppercase tracking-wider text-sm">{stat.metricLabel}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
