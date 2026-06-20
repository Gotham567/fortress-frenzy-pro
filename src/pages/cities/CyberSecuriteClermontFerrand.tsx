import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteClermontFerrand = () => (
  <CityLandingPage
    data={{
      city: "Clermont-Ferrand",
      citySlug: "clermont-ferrand",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63000",
      intro: "CyberConform accompagne les entreprises clermontoise et les PME auvergnates dans leur cybersecurite, conformite NIS2 et RGPD. Audit, pentest et RSSI externalise pour Clermont-Ferrand et toute l'Auvergne.",
      localContext: "Clermont-Ferrand est la ville de Michelin et un centre industriel et tertiaire important du Massif Central. Le groupe Michelin et ses sous-traitants, les CHU, les acteurs du tourisme thermal et les PME industrielles auvergnates representent un tissu economique qui doit se proteger contre les cybermenaces croissantes.",
      sectors: [
        "Industrie du pneumatique (Michelin et sous-traitants)",
        "Sante (CHU de Clermont, thermalisme)",
        "Agroalimentaire auvergnat",
        "Numerique et services",
        "Tourisme et volcanisme (Vulcania)",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Clermont-Ferrand Centre et Les Carmes",
        "Cournon-d'Auvergne, Aubiere",
        "Vichy, Thiers, Issoire",
        "Riom, Ambert",
        "Le Puy-en-Velay, Aurillac",
        "Toute la region Auvergne",
      ],
      faq: [
        {
          q: "Les sous-traitants de Michelin sont-ils soumis a NIS2 ?",
          a: "Les fournisseurs critiques de Michelin peuvent etre concernes par NIS2 selon leur taille et leur secteur. De plus, Michelin impose de plus en plus des exigences cybersecurite a ses fournisseurs dans le cadre de sa politique de securite de la chaine d'approvisionnement.",
        },
        {
          q: "Comment proteger une PME industrielle auvergnate ?",
          a: "Pour une PME industrielle, les priorites sont la protection des equipements de production (machines connectees, SCADA), la sauvegarde des donnees et la sensibilisation des employes. Nous proposons des diagnostics gratuits pour identifier vos risques principaux.",
        },
        {
          q: "Intervenez-vous a Clermont-Ferrand et en Auvergne ?",
          a: "Oui. Nous intervenons a Clermont-Ferrand, Vichy, Thiers, Riom et dans toute la region Auvergne. Nos consultants se deplacent sur site pour les audits et formations.",
        },
        {
          q: "Quel est le budget cybersecurite d'une PME de 50 salaries ?",
          a: "Pour une PME de 50 salaries, un budget annuel de 10 000 a 30 000 euros permet de mettre en place les mesures essentielles : audit initial, outils de protection (EDR, SIEM), formation des equipes et plan de reponse aux incidents.",
        },
      ],
    }}
  />
);

export default CyberSecuriteClermontFerrand;
