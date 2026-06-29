import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteHauteGaronne = () => (
  <CityLandingPage
    data={{
      city: "Haute-Garonne",
      citySlug: "haute-garonne",
      region: "Occitanie",
      postalCode: "31",
      intro: "CyberSecure est votre expert cybersécurité Haute-Garonne (31) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Toulouse, Blagnac, Colomiers, Tournefeuille, Muret et tout le département.",
      localContext: "La Haute-Garonne est le département de la capitale européenne de l'aérospatial. Toulouse concentre Airbus (siège mondial), ATR, Thales Alenia Space, Safran, Collins Aerospace, et des centaines de sous-traitants aéronautiques. La chaîne de valeur aérospatiale toulousaine génère des systèmes d'information critiques (PLM, ERP industriels, plateformes de collaboration B2B) qui sont des cibles prioritaires pour les services de renseignement étrangers et les groupes APT. L'écosystème numérique se complète avec Toulouse French Tech, l'INSA Toulouse, et des startups deeptech en IA et robotique.",
      sectors: [
        "Aérospatial (Airbus siège mondial, ATR, Collins Aerospace — PI, PLM, données conception)",
        "Défense et espace (Thales Alenia Space, CNES, ArianeGroup — données classifiées)",
        "Motorisation (Safran Aircraft Engines Toulouse — R&D moteurs, systèmes embarqués)",
        "Sous-traitance aéro (Liebherr Aerospace, Ratier-Figeac — TISAX, supply chain)",
        "Startups deeptech (French Tech Toulouse, IA embarquée, drones civils)",
        "Santé (CHU Toulouse, Oncopole, biotech occitane — HDS, recherche clinique)",
        "Agroalimentaire (Gers/HG, IAA coopératives — ERP, traçabilité cloud)",
        "Collectivités (Toulouse Métropole, CD31 — cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Toulouse – Capitole – Jean-Jaurès (31000)",
        "Blagnac – Beauzelle – Airbus (31700)",
        "Colomiers – Tournefeuille (31770/31170)",
        "L'Union – Balma – Quint-Fonsegrives (31240)",
        "Muret – Portet-sur-Garonne (31600)",
        "Labège – Ramonville – Castanet (31670)",
        "Saint-Orens-de-Gameville (31650)",
        "Cugnaux – Villeneuve-Tolosane (31270)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Haute-Garonne (31) ?",
          a: "Oui, CyberSecure intervient dans toute la Haute-Garonne : Toulouse Métropole, le Muretain, le Lauragais, et les zones rurales. Nos consultants sont intégrés dans l'écosystème cybersécurité toulousain. Nous avons une expertise particulière dans les environnements aéronautiques et spatiaux. CERT d'urgence 24/7.",
        },
        {
          q: "Airbus et ses sous-traitants : comment protéger les données de propriété intellectuelle aéronautique ?",
          a: "La protection des données de conception aéronautique (dessins techniques, données d'essais, recettes de fabrication) est critique. Airbus impose à ses fournisseurs des exigences TISAX (Trusted Information Security Assessment Exchange) et des normes spécifiques de sécurité. Un pentest chez un sous-traitant aéro couvre : sécurité du PLM (CATIA, Teamcenter), accès aux espaces de collaboration partenaires (eRoom, Airbus Connect), VPN et accès distants, et protection des postes d'ingénierie. CyberSecure accompagne les PME aéronautiques dans leur conformité TISAX.",
        },
        {
          q: "Le CNES et Thales Alenia Space : quelles sont les exigences cyber pour les programmes spatiaux ?",
          a: "Les programmes spatiaux (satellites, lanceurs) impliquent des données hautement sensibles (plans techniques, codes sources des logiciels embarqués, données de trajectoire). Le CNES et l'ESA imposent des exigences de sécurité strictes à leurs contractants : systèmes d'information cloisonnés, authentification forte, audit régulier des accès. Les données classifiées Défense Nationale ne peuvent être traitées que sur des systèmes homologués ANSSI. CyberSecure réalise des audits adaptés au secteur spatial.",
        },
        {
          q: "Les startups deeptech de Toulouse (IA, drones) : quels risques cyber spécifiques ?",
          a: "Les startups deeptech toulousaines développent des IP précieuses (algorithmes d'IA, logiciels de contrôle de drones, systèmes embarqués). Leurs risques principaux : espionnage industriel (attaques ciblées sur les dépôts de code), fuites de données via les plateformes cloud collaboratives (GitHub, Notion, Google Drive), et vulnérabilités dans les API de leurs produits. Avant une levée de fonds ou un partenariat industriel, un audit de sécurité est essentiel. CyberSecure propose des audits adaptés aux startups tech.",
        },
        {
          q: "Quels financements pour un audit cybersécurité en Haute-Garonne ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit pour PME. La CCI Toulouse Métropole — chèques numériques. Toulouse Métropole — appels à projets innovation. BPI France Occitanie — prêts innovation. Aerospace Valley (cluster aéronautique) accompagne ses membres avec des ressources cybersécurité et des projets collaboratifs. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteHauteGaronne;
