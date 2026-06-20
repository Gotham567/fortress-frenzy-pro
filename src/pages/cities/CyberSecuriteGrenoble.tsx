import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteGrenoble = () => (
  <CityLandingPage
    data={{
      city: "Grenoble",
      citySlug: "grenoble",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38000",
      intro: "CyberConform accompagne les industriels, laboratoires de recherche et ETI grenobloises dans leur cybersécurité et conformité NIS2. Audit, pentest et RSSI externalisé pour Grenoble, Voiron, Crolles et toute la région.",
      localContext: "Grenoble est la capitale mondiale de la microélectronique et des nanotechnologies (STMicroelectronics, Soitec, CEA-Leti). Son tissu industriel de pointe — semi-conducteurs, énergie (Schneider Electric), recherche nucléaire (CEA) — est une cible stratégique des cyberattaques industrielles et étatiques. La protection de la propriété intellectuelle est un enjeu critique.",
      sectors: [
        "Microélectronique et semi-conducteurs (STMicroelectronics, Soitec)",
        "Énergie et smart grid (Schneider Electric, EDF)",
        "Recherche et nucléaire (CEA, CNRS, Inria)",
        "Santé et medtech (CHU de Grenoble, bioMérieux)",
        "Industrie de montagne et sports",
        "Startups deeptech",
      ],
      neighborhoods: [
        "Presqu'île et Polygone Scientifique",
        "Meylan, Montbonnot, Crolles",
        "Échirolles, Grenoble Sud",
        "Voiron, Bourgoin-Jallieu",
        "Chambéry, Annecy, Valence",
        "Toute la région Isère",
      ],
      faq: [
        {
          q: "Comment protéger la propriété intellectuelle des entreprises grenobloises ?",
          a: "La protection de la PI dans les secteurs de pointe (semi-conducteurs, pharma, recherche) passe par le chiffrement des données sensibles, le contrôle strict des accès, la surveillance des fuites de données (DLP) et des audits réguliers. CyberConform a une expertise spécifique dans ces secteurs.",
        },
        {
          q: "Les sous-traitants du CEA et de STMicroelectronics sont-ils concernés par NIS2 ?",
          a: "Oui. Les fournisseurs critiques du CEA, de STMicroelectronics et de Schneider Electric doivent se conformer aux exigences de sécurité de leurs clients et potentiellement à NIS2. Un audit permet d'évaluer votre niveau de préparation.",
        },
        {
          q: "Intervenez-vous à Grenoble et dans le bassin grenoblois ?",
          a: "Oui. Nous intervenons à Grenoble, Meylan, Crolles, Échirolles, Voiron et dans tout le département de l'Isère. Nous couvrons également Chambéry et Annecy.",
        },
        {
          q: "Proposez-vous des audits OT/IT pour les industriels grenoblois ?",
          a: "Oui. Nous réalisons des audits de sécurité des systèmes industriels (SCADA, automates) selon les normes IEC 62443 et les recommandations ANSSI, adaptés aux contraintes de continuité de production.",
        },
      ],
    }}
  />
);

export default CyberSecuriteGrenoble;
