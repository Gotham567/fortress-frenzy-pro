import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteGrenoble = () => (
  <CityLandingPage
    data={{
      city: "Grenoble",
      citySlug: "grenoble",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38000",
      intro: "CyberConform accompagne les industriels, laboratoires de recherche et ETI grenobloises dans leur cybersecurite et conformite NIS2. Audit, pentest et RSSI externalise pour Grenoble, Voiron, Crolles et toute la region.",
      localContext: "Grenoble est la capitale mondiale de la microelectronique et des nanotechnologies (STMicroelectronics, Soitec, CEA-Leti). Son tissu industriel de pointe — semi-conducteurs, energie (Schneider Electric), recherche nucleaire (CEA) — est une cible strategique des cyberattaques industrielles et etatiques. La protection de la propriete intellectuelle est un enjeu critique.",
      sectors: [
        "Microelectronique et semi-conducteurs (STMicroelectronics, Soitec)",
        "Energie et smart grid (Schneider Electric, EDF)",
        "Recherche et nucleaire (CEA, CNRS, Inria)",
        "Sante et medtech (CHU de Grenoble, bioMerieux)",
        "Industrie de montagne et sports",
        "Startups deeptech",
      ],
      neighborhoods: [
        "Presqu'ile et Polygone Scientifique",
        "Meylan, Montbonnot, Crolles",
        "Echirolles, Grenoble Sud",
        "Voiron, Bourgoin-Jallieu",
        "Chambery, Annecy, Valence",
        "Toute la region Isere",
      ],
      faq: [
        {
          q: "Comment proteger la propriete intellectuelle des entreprises grenobles ?",
          a: "La protection de la PI dans les secteurs de pointe (semi-conducteurs, pharma, recherche) passe par le chiffrement des donnees sensibles, le controle strict des acces, la surveillance des fuites de donnees (DLP) et des audits reguliers. CyberConform a une expertise specifique dans ces secteurs.",
        },
        {
          q: "Les sous-traitants du CEA et de STMicroelectronics sont-ils concernes par NIS2 ?",
          a: "Oui. Les fournisseurs critiques du CEA, de STMicroelectronics et de Schneider Electric doivent se conformer aux exigences de securite de leurs clients et potentiellement a NIS2. Un audit permet d'evaluer votre niveau de preparation.",
        },
        {
          q: "Intervenez-vous a Grenoble et dans le bassin grenoblois ?",
          a: "Oui. Nous intervenons a Grenoble, Meylan, Crolles, Echirolles, Voiron et dans tout le departement de l'Isere. Nous couvrons egalement Chambery et Annecy.",
        },
        {
          q: "Proposez-vous des audits OT/IT pour les industriels grenoblois ?",
          a: "Oui. Nous realisons des audits de securite des systemes industriels (SCADA, automates) selon les normes IEC 62443 et les recommandations ANSSI, adaptes aux contraintes de continuite de production.",
        },
      ],
    }}
  />
);

export default CyberSecuriteGrenoble;
