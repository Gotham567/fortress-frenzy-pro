import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteMontpellier = () => (
  <CityLandingPage
    data={{
      city: "Montpellier",
      citySlug: "montpellier",
      region: "Occitanie",
      postalCode: "34000",
      intro: "CyberConform accompagne les entreprises montpelliéraines et les acteurs du numérique héraultais dans leur cybersécurité et conformité NIS2. Audit, pentest et RSSI externalisé pour Montpellier et toute la région Occitanie.",
      localContext: "Montpellier est l'une des métropoles françaises à la croissance la plus rapide, portée par son écosystème numérique (Montpellier French Tech), ses acteurs de la santé et ses entreprises innovantes. La ville abrite IBM, Dell, Ubisoft et de nombreuses startups qui traitent des données sensibles et doivent se conformer au RGPD et à NIS2.",
      sectors: [
        "Numérique et tech (IBM, Dell, Ubisoft)",
        "Santé et medtech (CHU de Montpellier, BIC)",
        "Enseignement supérieur et recherche (UM, CNRS)",
        "Tourisme et services",
        "Agroalimentaire et viticulture",
        "Startups et French Tech Montpellier",
      ],
      neighborhoods: [
        "Antigone et Port Marianne",
        "Euromédecine et Parc Club du Millénaire",
        "Vendargues, Lattes, Pérols",
        "Nîmes, Béziers, Perpignan",
        "Sète, Lunel, Agde",
        "Toute la région Hérault",
      ],
      faq: [
        {
          q: "Les entreprises tech de Montpellier sont-elles soumises à NIS2 ?",
          a: "Les éditeurs de logiciels, les fournisseurs cloud et les sociétés de numérique montpelliéraines peuvent être concernés par NIS2 selon leur taille et leurs clients. IBM, Dell et leurs partenaires locaux sont directement impactés.",
        },
        {
          q: "Comment protéger les données de santé à Montpellier (CHU, medtech) ?",
          a: "Les données de santé sont soumises à la certification HDS (Hébergeur de Données de Santé) et à des exigences RGPD renforcées. Nous réalisons des audits spécifiques santé et accompagnons les démarches de certification HDS.",
        },
        {
          q: "Intervenez-vous à Montpellier et en Occitanie ?",
          a: "Oui. Nous couvrons Montpellier, Nîmes, Béziers, Perpignan et toute la région Occitanie. Nos consultants peuvent intervenir en présentiel ou à distance selon vos besoins.",
        },
        {
          q: "Quel accompagnement pour une startup montpelliéraine en phase de levée de fonds ?",
          a: "Avant une levée de fonds, un audit de sécurité et une mise en conformité RGPD sont recommandés. Les investisseurs examinent de plus en plus la maturité cybersécurité des startups. Nous proposons des offres adaptées aux startups en croissance.",
        },
      ],
    }}
  />
);

export default CyberSecuriteMontpellier;
