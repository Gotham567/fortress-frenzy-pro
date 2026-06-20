import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteRennes = () => (
  <CityLandingPage
    data={{
      city: "Rennes",
      citySlug: "rennes",
      region: "Bretagne",
      postalCode: "35000",
      intro: "CyberConform accompagne les entreprises rennaises et les acteurs du numerique breton dans leur cybersecurite, conformite NIS2 et RGPD. Audit, pentest et RSSI externalise pour Rennes et toute la Bretagne.",
      localContext: "Rennes est la capitale numerique du Grand Ouest, avec un ecosysteme tech dense (Rennes Atalante, Cesson-Sevigne). La ville abrite de nombreuses entreprises telecoms (Orange, Thales) et un secteur defense important. La cybersecurite est un enjeu majeur pour ce territoire qui concentre des acteurs strategiques nationaux.",
      sectors: [
        "Telecoms et numerique (Orange, Thales, Atos)",
        "Defense et secteur public",
        "Sante (CHU de Rennes)",
        "Agroalimentaire breton (Lactalis, Cooperl)",
        "Automobile et equipementiers",
        "Startups et French Tech Rennes",
      ],
      neighborhoods: [
        "Rennes Atalante et Beaulieu",
        "Cesson-Sevigne (technopole)",
        "Saint-Malo, Lorient, Brest",
        "Vannes, Quimper",
        "Laval, Saint-Brieuc",
        "Toute la region Bretagne",
      ],
      faq: [
        {
          q: "Pourquoi la cybersecurite est-elle cruciale pour les entreprises rennaises ?",
          a: "Rennes concentre des acteurs strategiques dans les telecoms, la defense et le numerique qui sont des cibles privilegiees des cyberattaques etatiques et criminelles. La directive NIS2 impose des obligations strictes a ces secteurs.",
        },
        {
          q: "Les cooperatives agroalimentaires bretonnes sont-elles concernees par NIS2 ?",
          a: "Oui. Les grandes cooperatives agroalimentaires (Lactalis, Cooperl, Even) et leurs sous-traitants logistiques sont concernes par NIS2 dans le secteur alimentaire. Un audit permet d'evaluer votre niveau de conformite.",
        },
        {
          q: "Intervenez-vous dans toute la Bretagne ?",
          a: "Oui. Nous intervenons a Rennes, Brest, Lorient, Vannes, Saint-Malo, Quimper et dans toute la Bretagne. Reponse a incident sous 24h sur toute la region.",
        },
        {
          q: "Proposez-vous des pentests pour les editeurs SaaS rennais ?",
          a: "Oui. Nous realisons des tests d'intrusion applicatifs (web, API, mobile) pour les startups et editeurs SaaS de l'ecosysteme rennais, avec rapport detaille et accompagnement a la remediation.",
        },
      ],
    }}
  />
);

export default CyberSecuriteRennes;
