import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteStrasbourg = () => (
  <CityLandingPage
    data={{
      city: "Strasbourg",
      citySlug: "strasbourg",
      region: "Grand Est",
      postalCode: "67000",
      intro: "CyberConform accompagne les entreprises strasbourgeoises et les institutions européennes dans leur cybersécurité et conformité NIS2. Audit, pentest et RSSI externalisé pour Strasbourg, Mulhouse, Colmar et toute la région Grand Est.",
      localContext: "Strasbourg, capitale européenne et siège du Parlement Européen, concentre des enjeux de cybersécurité exceptionnels : institutions internationales, entreprises transfrontalières franco-allemandes, santé et pharma. La région Grand Est est aussi un carrefour logistique et industriel majeur entre la France et l'Allemagne.",
      sectors: [
        "Institutions européennes et organisations internationales",
        "Pharmacie et biotechnologies (Lilly, Sanofi)",
        "Industrie et automobile (Stellantis Mulhouse)",
        "Banque et finance transfrontalière",
        "Santé (CHU de Strasbourg, Hospices Civils)",
        "Logistique et transport",
      ],
      neighborhoods: [
        "Strasbourg Centre et Neudorf",
        "Schiltigheim et Illkirch",
        "Mulhouse, Colmar, Haguenau",
        "Metz, Nancy, Reims",
        "Zone transfrontalière franco-allemande",
        "Toute la région Grand Est",
      ],
      faq: [
        {
          q: "Les entreprises transfrontalières franco-allemandes ont-elles des obligations spécifiques ?",
          a: "Oui. Les entreprises opérant en France et en Allemagne doivent se conformer à la fois au RGPD européen et potentiellement au BSI-Grundschutz allemand. CyberConform vous accompagne dans cette double conformité.",
        },
        {
          q: "Comment les institutions européennes de Strasbourg sécurisent-elles leurs systèmes ?",
          a: "Les institutions européennes appliquent les règlements ENISA et NIS2. Les sous-traitants et fournisseurs de ces institutions doivent également respecter des exigences de sécurité élevées que nous pouvons vous aider à atteindre.",
        },
        {
          q: "Intervenez-vous à Strasbourg et en Alsace ?",
          a: "Oui. Nos consultants interviennent à Strasbourg, Mulhouse, Colmar, Haguenau, ainsi que dans les départements du Bas-Rhin et du Haut-Rhin et dans toute la région Grand Est.",
        },
        {
          q: "Quel est le niveau de risque cyber pour les PME alsaciennes ?",
          a: "Les PME alsaciennes sont exposées aux mêmes menaces que le reste de la France (ransomwares, phishing, vol de données) avec une exposition supplémentaire liée à leur activité transfrontalière et à la proximité d'acteurs stratégiques.",
        },
      ],
    }}
  />
);

export default CyberSecuriteStrasbourg;
