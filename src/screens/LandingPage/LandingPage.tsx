import { useEffect } from "react";
import { HeroSection } from "./sections/HeroSection";
import { PainPointsSection } from "./sections/PainPointsSection";
import { SolutionSection } from "./sections/SolutionSection";
import { ProofOfImpactSection } from "./sections/ProofOfImpactSection";
import { FinalCTASection } from "./sections/FinalCTASection";

export const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Billing to Brilliance | GoBill";
    }, []);

    return (
        <div className="w-full min-h-screen bg-slate-50 font-poppins font-['Poppins']">
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. The "Hidden Leak" Section */}
            <PainPointsSection />

            {/* 3. The Solution Section */}
            <SolutionSection />

            {/* 4. Proof of Impact Section */}
            <ProofOfImpactSection />

            {/* 5. Final CTA Section */}
            <FinalCTASection />
        </div>
    );
};
