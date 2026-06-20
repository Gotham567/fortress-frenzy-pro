import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteRouen = () => (
  <CityLandingPage
    data={{
      city: "Rouen",
      citySlug: "rouen",
      region: "Normandie",
      postalCode: "76000",
      intro: "CyberConform accompagne les entreprises rouennaises et les PME normandes dans leur cybersecurite, conformite NIS2 et RGPD. Audit, pentest et RSSI externalise pour Rouen, Le Havre, Caen et toute la Normandie.",
      localContext: "Rouen est la capitale de la Normandie et un pole industriel majeur avec son port fluvial, sa zone petroliere et chimique (Lubrizol) et son tissu d'ETI industrielles. La cyberattaque contre Lubrizol en 2019 a illustre la vulnerabilite des sites industriels normands. La region concentre egalement des acteurs logistiques importants via le port du Havre.",
      sectors: [
        "Industrie chimique et petroliere",
        "Logistique et port du Havre",
        "Agroalimentaire normand",
        "Sante (CHU de Rouen)",
        "Automobile et equipementiers",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Rouen Centre et rive droite",
        "Petit-Quevilly et Grand-Couronne (zone industrielle)",
        "Le Havre et port du Havre",
        "Caen, Cherbourg, Evreux",
        "Dieppe, Fecamp",
        "Toute la Normandie",
      ],
      faq: [
        {
          q: "Comment eviter une cyberattaque comme celle de Lubrizol a Rouen ?",
          a: "La protection des sites industriels passe par la segmentation IT/OT, la mise a jour des systemes, la surveillance en temps reel et un plan de reponse aux incidents teste regulierement. Un audit OT/IT permet d'identifier les vulnerabilites avant qu'elles ne soient exploitees.",
        },
        {
          q: "Les entreprises portuaires du Havre sont-elles soumises a NIS2 ?",
          a: "Oui. Les operateurs portuaires et logistiques du Havre sont directement concernes par NIS2 dans le secteur des transports. Les cyberattaques sur les ports (comme Anvers en 2021) montrent l'importance de se preparer.",
        },
        {
          q: "Intervenez-vous en Normandie ?",
          a: "Oui. Nous intervenons a Rouen, Le Havre, Caen, Cherbourg, Evreux et dans toute la region Normandie. Reponse a incident sous 24h.",
        },
        {
          q: "Quel accompagnement pour les PME industrielles normandes ?",
          a: "Nous proposons des offres adaptees aux PME industrielles : audit initial, plan de remediation prioritaire, mise en place des mesures de base (MFA, sauvegardes, segmentation) et formation des equipes. Budget a partir de 3 000 euros.",
        },
      ],
    }}
  />
);

export default CyberSecuriteRouen;
