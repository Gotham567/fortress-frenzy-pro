import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteBasRhin = () => (
  <CityLandingPage
    data={{
      city: "Bas-Rhin",
      citySlug: "bas-rhin",
      region: "Grand Est",
      postalCode: "67",
      intro: "CyberSecure est votre expert cybersécurité Bas-Rhin (67) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Haguenau, Saverne et tout le département.",
      localContext: "Le Bas-Rhin est un département d'exception avec Strasbourg, capitale européenne de la démocratie (Parlement Européen, Conseil de l'Europe, Cour Européenne des Droits de l'Homme). Cette concentration d'institutions européennes en fait une cible prioritaire pour les cyberattaques étatiques et l'espionnage. La Eurométropole de Strasbourg est un hub pharmaceutique (Lilly, Sanofi, BASF Health), un pôle automobile (PSA/Stellantis Mulhouse proche, équipementiers), et un hub numérique (OVHcloud datacenter Strasbourg). La frontière avec l'Allemagne génère des problématiques transfrontalières.",
      sectors: [
        "Institutions européennes (Parlement Européen, Conseil de l'Europe, CJUE — systèmes ultra-sensibles)",
        "Pharma et chimie (Lilly France, Sanofi Strasbourg, BASF — R&D, GxP cloud)",
        "Automobile (Stellantis Mulhouse proche, Hager Group — PLM, OT)",
        "Cloud et hébergement (OVHcloud datacenter Strasbourg, Interxion — colocations)",
        "Numérique (Strasbourg French Tech, Alsace Digitale, ESN alsaciennes)",
        "Santé (HUS Strasbourg, NHC — HDS, recherche médicale, essais cliniques)",
        "Tourisme et MICE (Strasbourg Congrès, tourisme Alsace — systèmes réservation)",
        "Collectivités (Eurométropole Strasbourg, CD67 — cloud souverain alsacien)",
      ],
      neighborhoods: [
        "Strasbourg – Neustadt – Esplanade (67000)",
        "Schiltigheim – Bischheim (67300)",
        "Illkirch-Graffenstaden – Geispolsheim (67400)",
        "Haguenau – Bischwiller (67500/67240)",
        "Saverne – Sarre-Union (67700)",
        "Obernai – Sélestat (67210/67600)",
        "Lingolsheim – Ostwald (67380/67540)",
        "Wissembourg – Lauterbourg (67160)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Bas-Rhin (67) ?",
          a: "Oui, CyberSecure intervient dans tout le Bas-Rhin : Eurométropole de Strasbourg, Haguenau-Wissembourg, Saverne, Sélestat-Erstein. Nos consultants connaissent les spécificités du tissu économique alsacien (pharma, institutions européennes, transfrontalier). CERT d'urgence 24/7.",
        },
        {
          q: "Le Parlement Européen et les institutions de Strasbourg : cibles de cyberattaques étatiques ?",
          a: "Les institutions européennes à Strasbourg sont des cibles prioritaires pour les services de renseignement étrangers (APT28, APT29, Lazarus). Les attaques visent : l'espionnage des délibérations (accès aux communications des eurodéputés), la désinformation (compromission des systèmes de vote ou de communication), et la disruption (DDoS avant des votes importants). Ces institutions ont des équipes cyber dédiées (CERT-EU) mais leurs prestataires et partenaires extérieurs constituent des vecteurs d'attaque. CyberSecure accompagne les entreprises travaillant avec les institutions européennes.",
        },
        {
          q: "OVHcloud a un datacenter à Strasbourg : quelles certifications de sécurité pour les hébergeurs cloud ?",
          a: "OVHcloud Strasbourg (SBG) est certifié ISO 27001 et propose des offres qualifiées SecNumCloud pour les données les plus sensibles. En tant qu'hébergeur cloud, OVHcloud est soumis à NIS2 comme fournisseur de services numériques. Ses clients doivent cependant appliquer le modèle de responsabilité partagée : OVHcloud sécurise l'infrastructure, mais le client est responsable de la sécurité de ses applications et données. CyberSecure audite les configurations cloud sur OVHcloud, vérification des security groups, IAM, et chiffrement.",
        },
        {
          q: "Lilly France à Strasbourg : comment sécuriser les données de R&D pharmaceutique sur le cloud ?",
          a: "Les laboratoires pharmaceutiques traitent des données de R&D ultra-sensibles (résultats d'essais cliniques, formules moléculaires, données des brevets). Ces données sont soumises aux réglementations GxP (GMP, GLP, GCP), au 21 CFR Part 11 américain pour les systèmes informatiques FDA, et au RGPD pour les données patients des essais cliniques. Le cloud pharma doit être validé (Computer System Validation), avec des trails d'audit conformes, une gestion des accès basée sur les rôles, et des sauvegardes régulièrement testées. CyberSecure accompagne les laboratoires pharmaceutiques dans leur stratégie cloud sécurisée.",
        },
        {
          q: "Quels financements pour un audit cybersécurité dans le Bas-Rhin ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Bas-Rhin — diagnostics numériques et chèques cyber. Eurométropole de Strasbourg — programmes innovation numérique. BPI France Grand Est — prêts innovation. Alsace Digitale et le pôle BioValley accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteBasRhin;
