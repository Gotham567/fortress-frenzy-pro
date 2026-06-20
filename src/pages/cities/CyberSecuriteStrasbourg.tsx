import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteStrasbourg = () => (
  <CityLandingPage
    data={{
      city: "Strasbourg",
      citySlug: "strasbourg",
      region: "Grand Est",
      postalCode: "67000",
      intro: "CyberConform accompagne les entreprises strasbourgeoises et les institutions europeennes dans leur cybersecurite et conformite NIS2. Audit, pentest et RSSI externalise pour Strasbourg, Mulhouse, Colmar et toute la region Grand Est.",
      localContext: "Strasbourg, capitale europeenne et siege du Parlement Europeen, concentre des enjeux de cybersecurite exceptionnels : institutions internationales, entreprises transfrontalieres franco-allemandes, sante et pharma. La region Grand Est est aussi un carrefour logistique et industriel majeur entre la France et l'Allemagne.",
      sectors: [
        "Institutions europeennes et organisations internationales",
        "Pharmacie et biotechnologies (Lilly, Sanofi)",
        "Industrie et automobile (Stellantis Mulhouse)",
        "Banque et finance transfrontaliere",
        "Sante (CHU de Strasbourg, Hospices Civils)",
        "Logistique et transport",
      ],
      neighborhoods: [
        "Strasbourg Centre et Neudorf",
        "Schiltigheim et Illkirch",
        "Mulhouse, Colmar, Haguenau",
        "Metz, Nancy, Reims",
        "Zone transfrontaliere franco-allemande",
        "Toute la region Grand Est",
      ],
      faq: [
        {
          q: "Les entreprises transfrontalieres franco-allemandes ont-elles des obligations specifiques ?",
          a: "Oui. Les entreprises operant en France et en Allemagne doivent se conformer a la fois au RGPD europeen et potentiellement au BSI-Grundschutz allemand. CyberConform vous accompagne dans cette double conformite.",
        },
        {
          q: "Comment les institutions europeennes de Strasbourg securisent-elles leurs systemes ?",
          a: "Les institutions europeennes appliquent les reglements ENISA et NIS2. Les sous-traitants et fournisseurs de ces institutions doivent egalement respecter des exigences de securite elevees que nous pouvons vous aider a atteindre.",
        },
        {
          q: "Intervenez-vous a Strasbourg et en Alsace ?",
          a: "Oui. Nos consultants interviennent a Strasbourg, Mulhouse, Colmar, Haguenau, ainsi que dans les departements du Bas-Rhin et du Haut-Rhin et dans toute la region Grand Est.",
        },
        {
          q: "Quel est le niveau de risque cyber pour les PME alsaciennes ?",
          a: "Les PME alsaciennes sont exposees aux memes menaces que le reste de la France (ransomwares, phishing, vol de donnees) avec une exposition supplementaire liee a leur activite transfrontaliere et a la proximite d'acteurs strategiques.",
        },
      ],
    }}
  />
);

export default CyberSecuriteStrasbourg;
