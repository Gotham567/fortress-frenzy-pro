import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteNormandie = () => (
  <CityLandingPage
    data={{
      city: "Normandie",
      citySlug: "normandie",
      region: "Normandie",
      postalCode: "14 / 27 / 50 / 61 / 76",
      intro: "CyberConform est votre prestataire cybersécurité Normandie : audit NIS2, pentest, conformité RGPD, réponse aux incidents pour les entreprises de Rouen, Caen, Le Havre, Évreux, Cherbourg et toute la région normande.",
      localContext: "La Normandie est une région industrielle et maritime majeure : le port du Havre est le premier port à conteneurs français et un hub logistique européen, la pétrochimie et la chimie industrielle se concentrent sur l'axe Seine (Total, ExxonMobil, Lubrizol), l'industrie automobile est présente à Renault Sandouville et aux équipementiers alentour, et la centrale nucléaire de Paluel/Penly représente une infrastructure critique de premier ordre. La cybersécurité dans cette région est marquée par des enjeux OT (systèmes industriels, réseaux portuaires, SCADA énergie) et supply chain (logistique maritime, douanes numériques). L'incident Lubrizol 2019 a rappelé la vulnérabilité des sites SEVESO. CyberConform connaît les spécificités de la cybersécurité industrielle normande.",
      sectors: [
        "Port du Havre et logistique maritime internationale",
        "Pétrochimie et chimie industrielle (Total, ExxonMobil, secteur SEVESO)",
        "Industrie automobile (Renault Sandouville, équipementiers)",
        "Nucléaire et énergie (EDF Paluel, Flamanville, Penly)",
        "Agroalimentaire (Lactalis, Danone, laiteries normandes)",
        "Tourisme et patrimoine (Mont-Saint-Michel, D-Day, Normandie côtière)",
        "Pharmacie et biotech (Biomedal, labs normands)",
        "Collectivités (Métropole Rouen, Caen la Mer, Le Havre Seine Métropole)",
      ],
      neighborhoods: [
        "Métropole Rouen Normandie – Petit-Quevilly – Grand-Quevilly",
        "Caen la Mer – Hérouville-Saint-Clair – Mondeville",
        "Le Havre – Gonfreville-l'Orcher – Harfleur",
        "Évreux – Val-de-Reuil (27)",
        "Cherbourg-en-Cotentin – Tourlaville (50)",
        "Alençon – Argentan (61)",
        "Dieppe – Fécamp – Saint-Valery-en-Caux (76)",
        "Lisieux – Vire – Bayeux (14)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 5 départements de Normandie (14, 27, 50, 61, 76) ?",
          a: "Oui, CyberConform intervient dans toute la région Normandie : Calvados (14), Eure (27), Manche (50), Orne (61) et Seine-Maritime (76). Nos consultants se déplacent sur site partout en Normandie, y compris sur les zones industrialo-portuaires du Havre et de Rouen, les sites nucléaires de Paluel et Flamanville (avec les habilitations requises), et les zones rurales de l'Orne et du Calvados. CERT d'urgence 24/7.",
        },
        {
          q: "Les entreprises de la pétrochimie et de la chimie normandes sont-elles soumises à NIS2 ?",
          a: "Oui, les sites pétrochimiques et chimiques normands (Total, ExxonMobil, INEOS, Lubrizol) sont majoritairement des entités essentielles NIS2 (énergie) ou importantes NIS2 (fabrication chimique). Les enjeux sont particulièrement importants pour la sécurité OT : systèmes de contrôle des procédés chimiques, SCADA des sites SEVESO. Un incident cyber sur ces systèmes peut avoir des conséquences physiques graves. CyberConform a des experts certifiés en sécurité OT industrielle.",
        },
        {
          q: "Avez-vous de l'expérience avec les systèmes portuaires du Havre ?",
          a: "Oui. Le port du Havre est un cas d'usage cybersécurité complexe : systèmes de gestion des terminaux à conteneurs (TOS), EDI portuaire, connexions avec les douanes numériques, systèmes de guidage des navires. Ces infrastructures sont des entités essentielles NIS2 (transport maritime). CyberConform propose des audits de sécurité adaptés aux opérateurs portuaires, aux agents maritimes et aux acteurs de la chaîne logistique normande.",
        },
        {
          q: "Quelle aide pour financer un audit cyber en Normandie ?",
          a: "Mon Aide Cyber (ANSSI) est accessible pour les PME normandes. La Région Normandie soutient la transformation numérique via ses fonds FEDER et le programme Normandie Attractivité. Les CCI normandes (CCI Seine-Maritime, CCI Caen, CCI Cherbourg) proposent des diagnostics numériques co-financés. BPI France Normandie propose des prêts numériques. L'Union Maritime et Fluviale du Havre accompagne ses adhérents sur les enjeux cyber portuaires. Diagnostic gratuit chez CyberConform.",
        },
        {
          q: "Ma collectivité normande a subi une cyberattaque — que faire ?",
          a: "En cas d'incident cyber sur une collectivité normande (mairie, intercommunalité, département), les premières actions sont : isoler les systèmes compromis, contacter le CERT de votre région (CERT-FR pour les collectivités), et alerter la préfecture si des données personnelles sont impliquées (obligation RGPD 72h). CyberConform intervient en urgence dans les 4 heures pour les incidents des collectivités : confinement, investigation forensique, remédiation et rapport d'incident. Contactez notre ligne CERT 24/7.",
        },
      ],
    }}
  />
);

export default CyberSecuriteNormandie;
