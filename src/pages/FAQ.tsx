import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import ScrollToTop from "@/components/ScrollToTop";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ Cybersécurité NIS2 et RGPD — CyberConform</title>
        <meta
          name="description"
          content="Questions fréquentes sur la conformité NIS2 et RGPD pour PME : obligations, délais, sanctions, coûts, pentest et RSSI externalisé. Réponses d'experts CyberConform."
        />
        <link rel="canonical" href="https://cyberconform.fr/faq" />
        <meta property="og:title" content="FAQ Cybersécurité NIS2 et RGPD — CyberConform" />
        <meta property="og:description" content="Questions fréquentes sur la conformité NIS2 et RGPD pour PME : obligations, délais, sanctions, coûts." />
        <meta property="og:url" content="https://cyberconform.fr/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "FAQ Cybersécurité NIS2 et RGPD — CyberConform",
            "url": "https://cyberconform.fr/faq",
            "description": "Réponses aux questions fréquentes sur la conformité NIS2 et RGPD pour PME et ETI.",
          })}
        </script>
      </Helmet>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <div className="pt-24">
            <FaqSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
