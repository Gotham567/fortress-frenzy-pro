import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteRouen = () => (
  <CityLandingPage
    data={{
      city: "Rouen",
      citySlug: "rouen",
      region: "Normandie",
      postalCode: "76000",
      intro: "CyberConform accompagne les entreprises rouennaises et les PME normandes dans leur cybersécurité, conformité NIS2 et RGPD. Audit, pentest et RSSI externalisé pour Rouen, Le Havre, Caen et toute la Normandie.",
      localContext: "Rouen est la capitale de la Normandie et un pôle industriel majeur avec son port fluvial, sa zone pétrolière et chimique (Lubrizol) et son tissu d'ETI industrielles. La cyberattaque contre Lubrizol en 2019 a illustré la vulnérabilité des sites industriels normands. La région concentre également des acteurs logistiques importants via le port du Havre.",
      sectors: [
        "Industrie chimique et pétrolière",
        "Logistique et port du Havre",
        "Agroalimentaire normand",
        "Santé (CHU de Rouen)",
        "Automobile et équipementiers",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Rouen Centre et rive droite",
        "Petit-Quevilly et Grand-Couronne (zone industrielle)",
        "Le Havre et port du Havre",
        "Caen, Cherbourg, Évreux",
        "Dieppe, Fécamp",
        "Toute la Normandie",
      ],
      faq: [
        {
          q: "Comment éviter une cyberattaque comme celle de Lubrizol à Rouen ?",
          a: "La protection des sites industriels passe par la segmentation IT/OT, la mise à jour des systèmes, la surveillance en temps réel et un plan de réponse aux incidents testé régulièrement. Un audit OT/IT permet d'identifier les vulnérabilités avant qu'elles ne soient exploitées.",
        },
        {
          q: "Les entreprises portuaires du Havre sont-elles soumises à NIS2 ?",
          a: "Oui. Les opérateurs portuaires et logistiques du Havre sont directement concernés par NIS2 dans le secteur des transports. Les cyberattaques sur les ports (comme Anvers en 2021) montrent l'importance de se préparer.",
        },
        {
          q: "Intervenez-vous en Normandie ?",
          a: "Oui. Nous intervenons à Rouen, Le Havre, Caen, Cherbourg, Évreux et dans toute la région Normandie. Réponse à incident sous 24h.",
        },
        {
          q: "Quel accompagnement pour les PME industrielles normandes ?",
          a: "Nous proposons des offres adaptées aux PME industrielles : audit initial, plan de remédiation prioritaire, mise en place des mesures de base (MFA, sauvegardes, segmentation) et formation des équipes. Budget à partir de 3 000 euros.",
        },
      ],
    }}
  />
);

export default CyberSecuriteRouen;
