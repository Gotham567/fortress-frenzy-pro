import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteAlpesMaritimes = () => (
  <CityLandingPage
    data={{
      city: "Alpes-Maritimes",
      citySlug: "alpes-maritimes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06",
      intro: "CyberSecure est votre expert cybersécurité Alpes-Maritimes (06) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Nice, Sophia Antipolis, Antibes, Cannes, Grasse et tout le département.",
      localContext: "Les Alpes-Maritimes concentrent l'un des écosystèmes technologiques les plus denses d'Europe. Sophia Antipolis (1er technopôle européen avec 2 400 entreprises) héberge des leaders mondiaux : SAP, Amadeus (réservation aérienne mondiale), Texas Instruments, IBM, Oracle, Siemens. Nice Côte d'Azur est un hub d'innovation avec la French Tech Nice Côte d'Azur. La proximité avec Monaco (fintech, wealth management) génère des flux financiers de haute valeur. Le tourisme de luxe (Cannes, Saint-Tropez, Riviera) implique des systèmes de réservation et de paiement premium. Le CHU de Nice est un centre hospitalier universitaire de référence.",
      sectors: [
        "IT et tech (Sophia Antipolis — SAP, Amadeus, TI, IBM, Oracle, 2 400 entreprises)",
        "Finance et wealth management (Monaco proximity, banques privées, fintechs)",
        "Tourisme luxe (Cannes Festival, hôtels 5*, casinos — PCI DSS, RGPD)",
        "Santé (CHU Nice, CHPG Monaco, Pasteur — HDS, e-santé)",
        "Défense (DGA, bases militaires, MBDA — systèmes homologués)",
        "Aéroport (Nice Côte d'Azur, 14M passagers/an — OT aéroportuaire)",
        "Smart city (Nice Métropole, Côte d'Azur French Tech — IoT, données urbaines)",
        "Parfumerie et chimie (Grasse — IP recettes, données propriétaires)",
      ],
      neighborhoods: [
        "Nice – Vieille-Ville – Université (06000)",
        "Sophia Antipolis – Valbonne – Mougins (06560)",
        "Antibes – Juan-les-Pins (06600)",
        "Cannes – Mougins (06400)",
        "Grasse – Châteauneuf-de-Grasse (06130)",
        "Cagnes-sur-Mer – Saint-Laurent-du-Var (06800/06700)",
        "Menton – Roquebrune-Cap-Martin (06500)",
        "Carros – Saint-Martin-du-Var (06510/06110)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Alpes-Maritimes (06) ?",
          a: "Oui, CyberSecure intervient dans tout le 06 : Nice Métropole Côte d'Azur, Sophia Antipolis, Cannes-Grasse-Antibes, Pays Mentonnais, et Haut-Pays. Nous sommes intégrés dans l'écosystème de Sophia Antipolis. CERT d'urgence 24/7.",
        },
        {
          q: "Amadeus IT Group (Sophia Antipolis) : comment sécuriser un système mondial de réservation aérienne ?",
          a: "Amadeus gère les réservations de plus de 700 compagnies aériennes et traite des millions de transactions par jour. Sa criticité est extrême : une interruption ou une compromission peut affecter l'ensemble de l'industrie aérienne mondiale. Leurs mesures de sécurité : Red Team interne permanente, programme de bug bounty, conformité PCI DSS niveau 1, tests de pénétration trimestriels, et SOC 24/7. Pour les PME qui s'intègrent via les APIs Amadeus, CyberSecure vérifie la sécurité de l'intégration et la gestion des clés API.",
        },
        {
          q: "Les hôtels de luxe de Cannes (Palais de la Méditerranée, Carlton) : conformité PCI DSS pour les paiements haut de gamme ?",
          a: "Les établissements 5 étoiles traitent des volumes importants de paiements par carte avec des moyennes de transaction très élevées. PCI DSS v4.0 (standard depuis 2024) impose : chiffrement des données de carte en transit et au repos, segmentation réseau des systèmes de paiement, tests de pénétration annuels, scan de vulnérabilités trimestriel, et rapport de conformité QSA. CyberSecure accompagne les hôtels et résidences de luxe dans leur conformité PCI DSS.",
        },
        {
          q: "Grasse (parfumerie mondiale) : comment protéger les formules de parfum contre l'espionnage industriel ?",
          a: "Les recettes de parfum des maisons de Grasse (Givaudan, IFF, Symrise, maisons de nez) représentent des dizaines d'années de R&D et des actifs immatériels considérables. Les risques : compromission des systèmes de gestion des formules (ERP, LIMS), espionnage via des infiltrations physiques (stagiaires malveillants), et fuites cloud via des services collaboratifs non sécurisés. Mesures : DLP (Data Loss Prevention), chiffrement des bases de données de formules, audit des accès, et tests d'ingénierie sociale. CyberSecure propose des audits adaptés à la protection de la propriété intellectuelle.",
        },
        {
          q: "Quels financements pour un audit cybersécurité dans les Alpes-Maritimes ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nice Côte d'Azur — diagnostics numériques. Nice Métropole Côte d'Azur — programmes innovation. BPI France PACA — prêts innovation. Sophia Antipolis et la French Tech Nice Côte d'Azur accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteAlpesMaritimes;
