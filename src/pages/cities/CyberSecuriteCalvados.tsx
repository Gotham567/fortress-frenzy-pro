import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteCalvados = () => (
  <CityLandingPage
    data={{
      city: "Calvados",
      citySlug: "calvados",
      region: "Normandie",
      postalCode: "14",
      intro: "CyberSecure est votre expert cybersécurité Calvados (14) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Caen, Hérouville-Saint-Clair, Bayeux, Lisieux, Colombelles et tout le département.",
      localContext: "Le Calvados est un département normand à forte identité industrielle et touristique. STMicroelectronics dispose à Colombelles d'une des plus grandes salles blanches de fabrication de semi-conducteurs en France (3 000 employés, puces IoT et automotive). Le CHU Caen-Normandie est un établissement de santé de niveau 1 pour l'Ouest français. La filière agroalimentaire normande (lait, fromages AOP — Livarot, Camembert, calvados) emploie des milliers de personnes avec des systèmes de traçabilité complexes. Le port de Caen-Ouistreham est un axe logistique vers le Royaume-Uni. Caen Métropole se positionne comme pôle numérique régional.",
      sectors: [
        "Semi-conducteurs (STMicroelectronics Colombelles — fab puces, IoT, salle blanche OT)",
        "Santé (CHU Caen-Normandie — HDS, données patients, NIS2, télémédecine)",
        "Agroalimentaire (lait normand, fromageries AOP — ERP, traçabilité, IFS/BRC)",
        "Tourisme (Mémorial de Caen, D-Day, Côte Fleurie — RGPD, PCI DSS visiteurs)",
        "Port (Caen-Ouistreham — logistique maritime, NIS2 transports, ISPS)",
        "Collectivités (Caen Métropole, CD14 — cloud souverain, e-administration)",
        "Numérique (ESN caennaises, Normandie numériqueue — cloud, Microsoft 365)",
        "Distilleries (calvados, cidre — RGPD, e-commerce, traçabilité AOC)",
      ],
      neighborhoods: [
        "Caen – Hérouville-Saint-Clair (14000/14200)",
        "Colombelles (14460)",
        "Bayeux (14400)",
        "Lisieux (14100)",
        "Vire-Normandie (14500)",
        "Falaise (14700)",
        "Mondeville (14120)",
        "Courseulles-sur-Mer (14470)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Calvados (14) ?",
          a: "Oui, CyberSecure intervient dans tout le 14 : Caen Métropole, Bayeux, Lisieux, Côte Fleurie, Vire. Nous avons une expertise particulière dans la protection des systèmes de fabrication de semi-conducteurs et les environnements de salle blanche. CERT d'urgence 24/7.",
        },
        {
          q: "STMicroelectronics Colombelles est le plus grand site de production de semi-conducteurs en France : comment protéger une salle blanche ?",
          a: "Une salle blanche de semi-conducteurs (fab 300mm comme celle de STMicro Colombelles) est un environnement OT hyper-spécifique. Les systèmes à sécuriser : les équipements de lithographie (ASML, Nikon — valeur unitaire de 100M€), les automates de transport de wafers (robots AMHS), les systèmes MES (Manufacturing Execution System — Camstar, Workstream), et les équipements d'analyse (EDX, SEM). Une cyberattaque sur une salle blanche peut contaminer une production de plusieurs semaines (wafers à la poubelle = pertes de dizaines de millions). La segmentation réseau entre équipements de process et SI corporate est critique. CyberSecure réalise des audits OT sur les environnements de fabrication de semi-conducteurs.",
        },
        {
          q: "Le secteur agroalimentaire normand (Président, Isigny, Lactalis) : quelles cybermenaces spécifiques ?",
          a: "Les coopératives et industriels laitiers normands gèrent des volumes importants : collecte de lait auprès de milliers d'agriculteurs (systèmes de pesée connectés), transformation (process fromager — pH, température contrôlés par automates), traçabilité (étiquetage AOP — Livarot, Pont-l'Évêque, Camembert, Isigny). En 2021, une attaque ransomware sur un groupe laitier normand a immobilisé toute la chaîne. Les risques : arrêt des automates de pasteurisation (risque sanitaire), perte des données de traçabilité (retrait de lots), compromission des EDI avec la grande distribution. CyberSecure accompagne les IAA normandes dans leur sécurisation OT et IT.",
        },
        {
          q: "Le Mémorial de Caen reçoit 300 000 visiteurs/an : RGPD pour un lieu de mémoire et de tourisme ?",
          a: "Le Mémorial de Caen collecte des données personnelles dans plusieurs contextes : billetterie et réservations en ligne (RGPD, PCI DSS pour les paiements), vidéosurveillance (30 jours max, déclaration CNIL), base de données membres et donateurs (durée de conservation limitée), et données des participants aux programmes éducatifs. Une base de données de 300 000 visiteurs/an représente une masse de données sensibles. En cas de violation de données (piratage de la base clients), la CNIL peut sanctionner jusqu'à 4% du CA mondial. CyberSecure audite la conformité RGPD des sites touristiques et culturels.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Calvados ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Caen Normandie — diagnostics numériques. Caen Métropole — programmes innovation numérique. BPI France Normandie — prêts innovation. La Région Normandie — aides à la transformation numérique des PME. Normandie Attractivité accompagne les entreprises. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteCalvados;
