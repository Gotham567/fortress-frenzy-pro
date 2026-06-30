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
        <link rel="canonical" href="https://cyberconform.fr/" />
        <meta property="og:title" content="Conformité NIS2 & RGPD — CyberConform | Cabinet Cybersécurité Paris" />
        <meta property="og:description" content="Mise en conformité NIS2 et RGPD pour PME et ETI. CyberConform, cabinet de cybersécurité à Paris : audits, tests d'intrusion, conseil NIS2 et accompagnement RGPD. Diagnostic gratuit." />
        <meta property="og:url" content="https://cyberconform.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="CyberConform" />
        <meta property="og:image" content="https://cyberconform.fr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="CyberConform — Cabinet de cybersécurité Paris, conformité NIS2 et RGPD" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberConform — Conformité NIS2 & RGPD | Cabinet Cybersécurité Paris" />
        <meta name="twitter:description" content="Mise en conformité NIS2 et RGPD pour PME et ETI. Diagnostic gratuit." />
        <meta name="twitter:image" content="https://cyberconform.fr/og-image.png" />
        <meta name="twitter:image:alt" content="CyberConform — Cabinet de cybersécurité Paris, conformité NIS2 et RGPD" />
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
