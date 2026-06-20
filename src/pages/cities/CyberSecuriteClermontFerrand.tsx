import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteClermontFerrand = () => (
  <CityLandingPage
    data={{
      city: "Clermont-Ferrand",
      citySlug: "clermont-ferrand",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63000",
      intro: "CyberConform accompagne les entreprises clermontoises et les PME auvergnates dans leur cybersécurité, conformité NIS2 et RGPD. Audit, pentest et RSSI externalisé pour Clermont-Ferrand et toute l'Auvergne.",
      localContext: "Clermont-Ferrand est la ville de Michelin et un centre industriel et tertiaire important du Massif Central. Le groupe Michelin et ses sous-traitants, les CHU, les acteurs du tourisme thermal et les PME industrielles auvergnates représentent un tissu économique qui doit se protéger contre les cybermenaces croissantes.",
      sectors: [
        "Industrie du pneumatique (Michelin et sous-traitants)",
        "Santé (CHU de Clermont, thermalisme)",
        "Agroalimentaire auvergnat",
        "Numérique et services",
        "Tourisme et volcanisme (Vulcania)",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Clermont-Ferrand Centre et Les Carmes",
        "Cournon-d'Auvergne, Aubière",
        "Vichy, Thiers, Issoire",
        "Riom, Ambert",
        "Le Puy-en-Velay, Aurillac",
        "Toute la région Auvergne",
      ],
      faq: [
        {
          q: "Les sous-traitants de Michelin sont-ils soumis à NIS2 ?",
          a: "Les fournisseurs critiques de Michelin peuvent être concernés par NIS2 selon leur taille et leur secteur. De plus, Michelin impose de plus en plus des exigences cybersécurité à ses fournisseurs dans le cadre de sa politique de sécurité de la chaîne d'approvisionnement.",
        },
        {
          q: "Comment protéger une PME industrielle auvergnate ?",
          a: "Pour une PME industrielle, les priorités sont la protection des équipements de production (machines connectées, SCADA), la sauvegarde des données et la sensibilisation des employés. Nous proposons des diagnostics gratuits pour identifier vos risques principaux.",
        },
        {
          q: "Intervenez-vous à Clermont-Ferrand et en Auvergne ?",
          a: "Oui. Nous intervenons à Clermont-Ferrand, Vichy, Thiers, Riom et dans toute la région Auvergne. Nos consultants se déplacent sur site pour les audits et formations.",
        },
        {
          q: "Quel est le budget cybersécurité d'une PME de 50 salariés ?",
          a: "Pour une PME de 50 salariés, un budget annuel de 10 000 à 30 000 euros permet de mettre en place les mesures essentielles : audit initial, outils de protection (EDR, SIEM), formation des équipes et plan de réponse aux incidents.",
        },
      ],
    }}
  />
);

export default CyberSecuriteClermontFerrand;
