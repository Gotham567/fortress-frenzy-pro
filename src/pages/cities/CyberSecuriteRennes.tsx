import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteRennes = () => (
  <CityLandingPage
    data={{
      city: "Rennes",
      citySlug: "rennes",
      region: "Bretagne",
      postalCode: "35000",
      intro: "CyberConform accompagne les entreprises rennaises et les acteurs du numérique breton dans leur cybersécurité, conformité NIS2 et RGPD. Audit, pentest et RSSI externalisé pour Rennes et toute la Bretagne.",
      localContext: "Rennes est la capitale numérique du Grand Ouest, avec un écosystème tech dense (Rennes Atalante, Cesson-Sévigné). La ville abrite de nombreuses entreprises télécoms (Orange, Thales) et un secteur défense important. La cybersécurité est un enjeu majeur pour ce territoire qui concentre des acteurs stratégiques nationaux.",
      sectors: [
        "Télécoms et numérique (Orange, Thales, Atos)",
        "Défense et secteur public",
        "Santé (CHU de Rennes)",
        "Agroalimentaire breton (Lactalis, Cooperl)",
        "Automobile et équipementiers",
        "Startups et French Tech Rennes",
      ],
      neighborhoods: [
        "Rennes Atalante et Beaulieu",
        "Cesson-Sévigné (technopôle)",
        "Saint-Malo, Lorient, Brest",
        "Vannes, Quimper",
        "Laval, Saint-Brieuc",
        "Toute la région Bretagne",
      ],
      faq: [
        {
          q: "Pourquoi la cybersécurité est-elle cruciale pour les entreprises rennaises ?",
          a: "Rennes concentre des acteurs stratégiques dans les télécoms, la défense et le numérique qui sont des cibles privilégiées des cyberattaques étatiques et criminelles. La directive NIS2 impose des obligations strictes à ces secteurs.",
        },
        {
          q: "Les coopératives agroalimentaires bretonnes sont-elles concernées par NIS2 ?",
          a: "Oui. Les grandes coopératives agroalimentaires (Lactalis, Cooperl, Even) et leurs sous-traitants logistiques sont concernés par NIS2 dans le secteur alimentaire. Un audit permet d'évaluer votre niveau de conformité.",
        },
        {
          q: "Intervenez-vous dans toute la Bretagne ?",
          a: "Oui. Nous intervenons à Rennes, Brest, Lorient, Vannes, Saint-Malo, Quimper et dans toute la Bretagne. Réponse à incident sous 24h sur toute la région.",
        },
        {
          q: "Proposez-vous des pentests pour les éditeurs SaaS rennais ?",
          a: "Oui. Nous réalisons des tests d'intrusion applicatifs (web, API, mobile) pour les startups et éditeurs SaaS de l'écosystème rennais, avec rapport détaillé et accompagnement à la remédiation.",
        },
      ],
    }}
  />
);

export default CyberSecuriteRennes;
