import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GamificationSection from "@/components/GamificationSection";
import SocialProofSection from "@/components/SocialProofSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";




export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

      </main>
      <Footer />
    </>
  );
}
