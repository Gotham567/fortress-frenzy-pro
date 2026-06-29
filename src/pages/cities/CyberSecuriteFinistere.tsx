import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteFinistere = () => (
  <CityLandingPage
    data={{
      city: "Finistère",
      citySlug: "finistere",
      region: "Bretagne",
      postalCode: "29",
      intro: "CyberSecure est votre expert cybersécurité Finistère (29) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Brest, Quimper, Morlaix, Quimperlé, Landerneau et tout le département.",
      localContext: "Le Finistère est le département le plus occidental de France métropolitaine, avec une économie maritime et défensive unique. Brest est la 2e base navale française (après Toulon) et un centre majeur de recherche maritime (IFREMER, SHOM, Institut Polaire IPEV). Naval Group Brest (ex-DCNS) construit des sous-marins nucléaires. Le Pôle Mer Bretagne-Atlantique rassemble les acteurs maritimes avec de forts enjeux numériques. L'économie maritime (pêche, IAA, portuaire) se numérise rapidement. La filière agroalimentaire bretonne (Bigard, Coreff, conserveries) est un employeur majeur.",
      sectors: [
        "Défense navale (Naval Group Brest, FREMM, SNA — données classifiées défense)",
        "Base navale (BCRM Brest, Marine Nationale — systèmes militaires)",
        "Recherche maritime (IFREMER, SHOM, Ifremer — données océanographiques, brevets)",
        "Maritime et pêche (Pavillon Breton, PORT de Brest — SI portuaires)",
        "Agroalimentaire (Bigard, Hénaff, conserveries finistériennes — ERP, traçabilité)",
        "Numérique (Brest Métropole French Tech, Digital Bretagne — startups, ESN)",
        "Santé (CHRU Brest, polycliniques — HDS, télémédecine atlantique)",
        "Collectivités (Brest Métropole, CD29 — cloud souverain breton)",
      ],
      neighborhoods: [
        "Brest – Recouvrance – Bellevue (29200)",
        "Plouzané – Guipavas (29280/29490)",
        "Quimper – Ergué-Gabéric (29000)",
        "Morlaix – Saint-Martin-des-Champs (29600)",
        "Quimperlé – Concarneau (29300/29900)",
        "Landerneau – Landivisiau (29400/29400)",
        "Brest Métropole Ouest – Saint-Renan (29290)",
        "Douarnenez – Crozon (29100/29160)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Finistère (29) ?",
          a: "Oui, CyberSecure intervient dans tout le Finistère : Brest Métropole, Pays de Cornouaille, Pays de Morlaix, et zones côtières. Nous avons une expertise dans les environnements de défense navale brestois et dans les systèmes d'information maritimes. CERT d'urgence 24/7.",
        },
        {
          q: "Naval Group Brest construit des sous-marins nucléaires : quelles contraintes spéciales pour un prestataire cyber ?",
          a: "Les travaux sur les SNA (Sous-marins Nucléaires d'Attaque) de classe Barracuda sont soumis au secret défense le plus élevé. Tout prestataire intervenant dans ces périmètres doit être habilité CONFIDENTIEL DÉFENSE ou SECRET DÉFENSE par le SGDSN (Secrétariat Général de la Défense et de la Sécurité Nationale). Pour les périmètres non classifiés (IT corporate, SSII, maintenance bâtiments), des procédures de sécurité allégées s'appliquent mais restent strictes (contrôles d'accès, surveillance des supports amovibles, escorte). CyberSecure connaît ces contraintes et accompagne les PME bretonnes qui travaillent avec Naval Group.",
        },
        {
          q: "IFREMER à Brest : comment protéger les données de recherche océanographique ?",
          a: "IFREMER collecte des données océanographiques sensibles (bathymétrie des fonds marins, données de câbles sous-marins, ressources halieutiques) qui ont une valeur stratégique. La protection de ces données passe par : classification des datasets (certaines données bathymétriques sont sensibles pour la sécurité des sous-marins militaires), sécurisation des plateformes de partage de données scientifiques (portail SEANOE, accès chercheurs), et sécurisation des instruments de collecte connectés (flotteurs Argo, sonars). CyberSecure accompagne les organismes de recherche marine dans leur sécurité.",
        },
        {
          q: "Les conserveries bretonnes du Finistère (Hénaff, Petit Navire) : risques cyber spécifiques à l'agroalimentaire ?",
          a: "Les conserveries bretonnes utilisent des systèmes ERP pour gérer leur production (Sage, SAP Business One) et des équipements de production automatisés (automates de stérilisation, remplisseuses). Les risques cyber : compromission du système de gestion de la qualité (faux certificats, modification des paramètres de stérilisation), fraude aux virements (BEC ciblant les acheteurs de matières premières), et ransomware bloquant la production en pleine saison. CyberSecure propose des audits adaptés aux IAA bretonnes.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Finistère ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Finistère — diagnostics numériques. Brest Métropole — programmes innovation. BPI France Bretagne — prêts innovation. Le Pôle Mer Bretagne-Atlantique et ADEUPa accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteFinistere;
