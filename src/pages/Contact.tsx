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
        <meta property="og:site_name" content="CyberConform" />
        <meta property="og:image" content="https://cyberconform.fr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contactez CyberConform — Cabinet de cybersécurité Paris" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — CyberConform | Audit NIS2 et RGPD gratuit" />
        <meta name="twitter:description" content="Contactez CyberConform pour votre audit NIS2 et RGPD gratuit. Réponse sous 24h." />
        <meta name="twitter:image" content="https://cyberconform.fr/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact CyberConform",
            "url": "https://cyberconform.fr/contact",
            "description": "Contactez CyberConform pour votre diagnostic cybersécurité NIS2 et RGPD gratuit.",
            "inLanguage": "fr-FR",
            "mainEntity": {
              "@type": "Organization",
              "name": "CyberConform",
              "telephone": "+33769323019",
              "email": "contact@cyberconform.fr",
              "url": "https://cyberconform.fr",
              "logo": "https://cyberconform.fr/favicon.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "75 Avenue des Champs-Élysées",
                "addressLocality": "Paris",
                "postalCode": "75008",
                "addressCountry": "FR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33769323019",
                "contactType": "customer service",
                "availableLanguage": "French",
                "areaServed": "FR"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cyberconform.fr/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://cyberconform.fr/contact" }
            ]
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
