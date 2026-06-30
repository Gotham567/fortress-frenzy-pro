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
        <meta property="og:site_name" content="CyberConform" />
        <meta property="og:image" content="https://cyberconform.fr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FAQ Cybersécurité NIS2 et RGPD — CyberConform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ Cybersécurité NIS2 et RGPD — CyberConform" />
        <meta name="twitter:description" content="Questions fréquentes sur la conformité NIS2 et RGPD pour PME : obligations, délais, sanctions, coûts." />
        <meta name="twitter:image" content="https://cyberconform.fr/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "FAQ Cybersécurité NIS2 et RGPD — CyberConform",
            "url": "https://cyberconform.fr/faq",
            "description": "Réponses aux questions fréquentes sur la conformité NIS2 et RGPD pour PME et ETI.",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Qu'est-ce que la directive NIS2 et quelles entreprises sont concernées ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La directive européenne NIS2 élargit les obligations de cybersécurité aux PME et ETI de 18 secteurs critiques à partir de 50 employés ou 10 millions d'euros de CA. CyberConform vous aide à déterminer si votre PME est concernée par NIS2."
                }
              },
              {
                "@type": "Question",
                "name": "Comment se mettre en conformité NIS2 quand on est une PME ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La mise en conformité NIS2 passe par un diagnostic d'éligibilité, une analyse d'écart, la mise en place de mesures de sécurité et la formation des équipes. Notre pack conformité NIS2 dédié aux PME permet une mise en conformité en 3 à 6 mois."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre conformité NIS2 et conformité RGPD ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le RGPD protège les données personnelles, NIS2 sécurise les réseaux et systèmes d'information. Les deux sont complémentaires. CyberConform accompagne les entreprises sur les deux volets."
                }
              },
              {
                "@type": "Question",
                "name": "Quelles sont les sanctions en cas de non-conformité NIS2 ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jusqu'à 10 millions d'euros ou 2% du CA mondial pour les entités essentielles. La responsabilité personnelle des dirigeants peut être engagée avec possibilité d'interdiction d'exercer."
                }
              },
              {
                "@type": "Question",
                "name": "Combien coûte une mise en conformité RGPD pour une PME ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour une PME, comptez entre 5 000 et 20 000 € pour un accompagnement complet. Contactez CyberConform pour un diagnostic RGPD gratuit et un devis personnalisé."
                }
              },
              {
                "@type": "Question",
                "name": "Qu'est-ce qu'un RSSI externalisé et quand en ai-je besoin ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un RSSI externalisé assure la gouvernance cybersécurité sans les coûts d'un recrutement. Solution idéale pour les PME de 50 à 500 salariés soumises à NIS2."
                }
              },
              {
                "@type": "Question",
                "name": "Mon entreprise a été piratée, que faire en urgence ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Isolez les systèmes compromis, contactez notre cellule de crise 24/7 au +33 7 69 32 30 19, ne payez jamais de rançon et préservez les preuves numériques."
                }
              },
              {
                "@type": "Question",
                "name": "Ai-je besoin d'un DPO (Délégué à la Protection des Données) ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Obligatoire pour les organismes publics et certaines entreprises traitant des données sensibles à grande échelle. CyberConform propose un service de DPO externalisé adapté aux PME."
                }
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cyberconform.fr/" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://cyberconform.fr/faq" }
            ]
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
