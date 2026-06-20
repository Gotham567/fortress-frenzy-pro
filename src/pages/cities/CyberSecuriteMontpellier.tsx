import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMontpellier = () => (
  <CityLandingPage
    data={{
      city: "Montpellier",
      citySlug: "montpellier",
      region: "Occitanie",
      postalCode: "34000",
      intro: "CyberConform accompagne les entreprises montpellieraines et les acteurs du numerique heraultais dans leur cybersecurite et conformite NIS2. Audit, pentest et RSSI externalise pour Montpellier et toute la region Occitanie.",
      localContext: "Montpellier est l'une des metropoles francaises a la croissance la plus rapide, portee par son ecosysteme numerique (Montpellier French Tech), ses acteurs de la sante et ses entreprises innovantes. La ville abrite IBM, Dell, Ubisoft et de nombreuses startups qui traitent des donnees sensibles et doivent se conformer au RGPD et a NIS2.",
      sectors: [
        "Numerique et tech (IBM, Dell, Ubisoft)",
        "Sante et medtech (CHU de Montpellier, BIC)",
        "Enseignement superieur et recherche (UM, CNRS)",
        "Tourisme et services",
        "Agroalimentaire et vitiviniculture",
        "Startups et French Tech Montpellier",
      ],
      neighborhoods: [
        "Antigone et Port Marianne",
        "Euromedecine et Parc Club du Millénaire",
        "Vendargues, Lattes, Perols",
        "Nimes, Beziers, Perpignan",
        "Cette, Lunel, Agde",
        "Toute la region Herault",
      ],
      faq: [
        {
          q: "Les entreprises tech de Montpellier sont-elles soumises a NIS2 ?",
          a: "Les editeurs de logiciels, les fournisseurs cloud et les societes de numerique montpellieriaines peuvent etre concernes par NIS2 selon leur taille et leurs clients. IBM, Dell et leurs partenaires locaux sont directement impactes.",
        },
        {
          q: "Comment proteger les donnees de sante a Montpellier (CHU, medtech) ?",
          a: "Les donnees de sante sont soumises a la certification HDS (Hebergeur de Donnees de Sante) et a des exigences RGPD renforcees. Nous realisons des audits specifiques sante et accompagnons les demarches de certification HDS.",
        },
        {
          q: "Intervenez-vous a Montpellier et en Occitanie ?",
          a: "Oui. Nous couvrons Montpellier, Nimes, Beziers, Perpignan et toute la region Occitanie. Nos consultants peuvent intervenir en presentiel ou a distance selon vos besoins.",
        },
        {
          q: "Quel accompagnement pour une startup montpellieraine en phase de levee de fonds ?",
          a: "Avant une levee de fonds, un audit de securite et une mise en conformite RGPD sont recommandes. Les investisseurs examinent de plus en plus la maturite cybersecurite des startups. Nous proposons des offres adaptees aux startups en croissance.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMontpellier;
