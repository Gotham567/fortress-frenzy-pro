import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteHauteSavoie = () => (
  <CityLandingPage
    data={{
      city: "Haute-Savoie",
      citySlug: "haute-savoie",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "74",
      intro: "CyberSecure est votre expert cybersécurité Haute-Savoie (74) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises d'Annecy, Cluses, Thonon-les-Bains, Bonneville, Annemasse, Chamonix et tout le département.",
      localContext: "La Haute-Savoie est un département à la fois industriel de pointe et transfrontalier avec la Suisse (Genève à 30 km d'Annecy). La vallée de l'Arve autour de Cluses est la capitale mondiale du décolletage — une concentration unique de PME de micro-mécanique de précision. Somfy Group (Cluses) est le leader mondial des automatismes pour la maison connectée. Tefal (Rumilly, groupe SEB) est un fleuron industriel. Le tourisme montagne (Chamonix-Mont-Blanc, stations des Aravis) génère des millions de données clients. La proximité genevoise crée une zone frontalière économiquement dense avec des contraintes de flux de données franco-suisses.",
      sectors: [
        "Décolletage (vallée de l'Arve, Cluses — PME micro-mécanique, IoT, TISAX automotive)",
        "Automatismes (Somfy Group Cluses — IoT smart home, SaaS cloud, SI mondial)",
        "Industrie (Tefal/SEB Rumilly — OT production, ERP SAP, supply chain mondiale)",
        "Tourisme montagne (Chamonix, stations 74 — réservation SaaS, RGPD, PCI DSS)",
        "Energie hydraulique (barrages ENGIE Alpine — OT, NIS2 énergie, SCADA)",
        "Santé (CH Annecy-Genevois, cliniques — HDS, données patients, NIS2)",
        "Transfrontalier (Genève/Suisse — nLPD suisse, flux data, cloud multi-pays)",
        "PME industrie (Bonneville, Thonon — Microsoft 365, cloud, NIS2)",
      ],
      neighborhoods: [
        "Annecy – Cran-Gevrier (74000/74960)",
        "Cluses (74300)",
        "Thonon-les-Bains (74200)",
        "Bonneville (74130)",
        "Rumilly (74150)",
        "Chamonix-Mont-Blanc (74400)",
        "Annemasse (74100)",
        "Sallanches (74700)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Haute-Savoie (74) ?",
          a: "Oui, CyberSecure intervient dans tout le 74 : Annecy, vallée de l'Arve (Cluses, Bonneville), Chablais (Thonon), Mont-Blanc (Chamonix), Annemasse. Nous maîtrisons les enjeux transfrontaliers Haute-Savoie/Suisse (RGPD vs nLPD) et les OT de l'industrie de précision. CERT d'urgence 24/7.",
        },
        {
          q: "Somfy Group à Cluses connecte des millions de volets roulants dans le monde : quelles responsabilités cyber ?",
          a: "Somfy est leader mondial des automatismes pour la maison connectée (volets, portails, stores). Son infrastructure cloud gère les équipements connectés de millions de foyers. Les enjeux cyber : sécurité de la plateforme IoT (Somfy TaHoma) — une vulnérabilité peut permettre d'ouvrir les portails de milliers de maisons, protection des APIs Somfy (intégrations Alexa, Google Home, Apple HomeKit), sécurité du développement logiciel (SDL — firmware des équipements), et conformité RGPD pour les données de comportement des utilisateurs. Un incident sur la plateforme Somfy peut exposer Somfy à des poursuites de millions d'utilisateurs. CyberSecure accompagne les fabricants IoT dans leur sécurisation cloud et produit.",
        },
        {
          q: "Les PME de décolletage de la vallée de l'Arve travaillent pour l'automobile (Stellantis, Renault, BMW) : TISAX ?",
          a: "Les PME de décolletage de Cluses, Scionzier, Marnaz fabriquent des pièces de précision pour toute l'industrie automobile mondiale. Beaucoup reçoivent des plans de conception et des cahiers des charges confidentiels de leurs donneurs d'ordre (Renault, Stellantis, BMW). Ces données imposent une conformité TISAX (Trusted Information Security Assessment Exchange) : protection des plans CAO reçus (chiffrement, access control), traçabilité des accès aux données constructeurs, procédures de destruction sécurisée des données contractuelles à la fin de la relation commerciale. CyberSecure réalise des gap analysis TISAX pour les PME de la sous-traitance automobile alpine.",
        },
        {
          q: "Les entreprises de Haute-Savoie qui travaillent avec des clients genevois : RGPD ou nLPD suisse ?",
          a: "La zone frontalière Haute-Savoie/Grand Genève crée de nombreux flux de données entre la France et la Suisse. La règle : les données de personnes physiques françaises ou européennes sont protégées par le RGPD, même si elles transitent vers la Suisse. Les données de résidents suisses sont protégées par la nLPD (nouvelle Loi sur la Protection des Données, en vigueur depuis 2023). Pour les entreprises 74 traitant des données de clients/employés genevois : transfert vers la Suisse autorisé (la Suisse est reconnue adéquate par la Commission européenne), mais documentation des flux transfrontaliers obligatoire. CyberSecure conseille sur la conformité RGPD/nLPD pour les acteurs frontaliers.",
        },
        {
          q: "Quels financements pour un audit cyber en Haute-Savoie ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI de la Haute-Savoie — diagnostics numériques PME. Annecy Métropole — programmes innovation. BPI France Auvergne-Rhône-Alpes — prêts innovation. La Région Auvergne-Rhône-Alpes — fonds numérisation PME. Le cluster de la vallée de l'Arve et Thésame accompagnent les PME du décolletage. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteHauteSavoie;
