import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ComplianceSection from "@/components/ComplianceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Conformité NIS2 & RGPD — CyberConform | Cabinet Cybersécurité Paris</title>
        <meta
          name="description"
          content="Mise en conformité NIS2 et RGPD pour PME et ETI. CyberConform, cabinet de cybersécurité à Paris : audits, tests d'intrusion, conseil NIS2 et accompagnement RGPD. Diagnostic gratuit."
        />
        <link rel="canonical" href="https://www.cyberconform.fr/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <StatsSection />
          <ComplianceSection />
          <ExpertiseSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </div>
    </>
  );
};

export default Index;
