import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact — CyberConform | Audit NIS2 et RGPD gratuit</title>
        <meta
          name="description"
          content="Contactez CyberConform pour votre audit NIS2 et RGPD gratuit. Réponse sous 24h. Cabinet de cybersécurité Paris — test d'intrusion, conformité NIS2, RSSI externalisé."
        />
        <link rel="canonical" href="https://cyberconform.fr/contact" />
        <meta property="og:title" content="Contact — CyberConform | Audit NIS2 et RGPD gratuit" />
        <meta property="og:description" content="Contactez CyberConform pour votre audit NIS2 et RGPD gratuit. Réponse sous 24h." />
        <meta property="og:url" content="https://cyberconform.fr/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact CyberConform",
            "url": "https://cyberconform.fr/contact",
            "description": "Contactez CyberConform pour votre diagnostic cybersécurité NIS2 et RGPD gratuit.",
            "mainEntity": {
              "@type": "Organization",
              "name": "CyberConform",
              "telephone": "+33142685300",
              "email": "contact@cyberconform.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "75 Avenue des Champs-Élysées",
                "addressLocality": "Paris",
                "postalCode": "75008",
                "addressCountry": "FR"
              }
            }
          })}
        </script>
      </Helmet>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <div className="pt-24">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
