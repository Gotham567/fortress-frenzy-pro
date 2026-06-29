import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuritePaca = () => (
  <CityLandingPage
    data={{
      city: "PACA",
      citySlug: "paca",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "04 / 05 / 06 / 13 / 83 / 84",
      intro: "CyberConform est votre prestataire cybersécurité PACA : audit NIS2, pentest, conformité RGPD, réponse aux incidents pour les entreprises de Marseille, Nice, Toulon, Aix-en-Provence, Sophia Antipolis, Avignon et toute la région Provence-Alpes-Côte d'Azur.",
      localContext: "La région PACA est un territoire économique contrasté. Marseille est le premier port de Méditerranée et un hub logistique international avec des enjeux cyber portuaires (systèmes de gestion des terminaux, EDI maritime, douanes). Nice et Sophia Antipolis (la 'Silicon Valley européenne') concentrent des entreprises tech, des centres R&D de multinationales (Intel, IBM, Amadeus, Thales, SAP) et un écosystème startup actif. Toulon accueille la plus grande base navale de France (Marine Nationale, Naval Group) avec des enjeux de sécurité de défense. L'économie touristique (Côte d'Azur, Provence, stations de ski des Alpes) est une cible croissante des attaques phishing. La région compte aussi une forte industrie pétrochimique à Fos-sur-Mer.",
      sectors: [
        "Tech et innovation (Sophia Antipolis, Euratechnologies Nice, startups Marseille)",
        "Logistique et port (Grand Port Maritime de Marseille, Fos-sur-Mer)",
        "Défense et naval (Marine Nationale Toulon, Naval Group)",
        "Tourisme de luxe (Côte d'Azur, hôtels 5 étoiles, yachting)",
        "Pétrochimie et énergie (Fos-sur-Mer, GDFSuez, SGTE)",
        "Santé (AP-HM Marseille, CHU Nice, cliniques cannois)",
        "Agroalimentaire (huile d'olive, fromages, pastis — Pernod Ricard)",
        "Immobilier et BTP (Côte d'Azur, ZAC Euroméditerranée Marseille)",
      ],
      neighborhoods: [
        "Aix-Marseille-Provence Métropole – Vitrolles – Martigues",
        "Métropole Nice Côte d'Azur – Sophia Antipolis – Antibes",
        "Toulon Provence Méditerranée – La Seyne-sur-Mer (83)",
        "Avignon – Carpentras – Orange (84)",
        "Cannes – Grasse – Mandelieu (06)",
        "Arles – Salon-de-Provence (13)",
        "Fréjus – Saint-Raphaël (83)",
        "Gap – Briançon (05)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la région PACA, des Alpes-Maritimes aux Alpes-de-Haute-Provence ?",
          a: "Oui, CyberConform intervient dans les 6 départements de la région PACA : Alpes-de-Haute-Provence (04), Hautes-Alpes (05), Alpes-Maritimes (06), Bouches-du-Rhône (13), Var (83) et Vaucluse (84). Nos consultants se déplacent sur site partout dans la région, y compris dans les zones montagneuses (Gap, Briançon) et les zones rurales. CERT d'urgence 24/7 disponible dans toute la région.",
        },
        {
          q: "Mon entreprise de Sophia Antipolis est-elle soumise à NIS2 ?",
          a: "Sophia Antipolis concentre de nombreuses entreprises soumises à NIS2 : fournisseurs de cloud (data centers), éditeurs de logiciels critiques, entreprises de télécommunications (Nokia Bell Labs, SAP, Intel), et services numériques. Les entreprises tech de Sophia en dessous des seuils NIS2 peuvent être concernées via les exigences de leurs clients grands comptes (contrats de sous-traitance). CyberConform propose un diagnostic NIS2 gratuit en 30 minutes.",
        },
        {
          q: "Les hôtels de luxe de Cannes et Saint-Tropez ont-ils des obligations spécifiques ?",
          a: "L'hôtellerie de luxe de la Côte d'Azur a des enjeux cyber spécifiques : clientèle internationale VIP avec des données sensibles (nationalité, préférences, cartes de crédit premium), systèmes de paiement à forts volumes, connexion avec des OTA et des GDS (Sabre, Amadeus), et risque de violation de confidentialité des séjours. Le RGPD s'applique strictement, et la norme PCI DSS est obligatoire pour les paiements par carte. CyberConform propose des audits adaptés à l'hôtellerie de luxe.",
        },
        {
          q: "La Marine Nationale à Toulon et Naval Group sont-ils des clients potentiels ?",
          a: "Les organismes militaires comme la Marine Nationale ont leurs propres prestataires de cybersécurité accrédités par le MINARM. CyberConform accompagne en revanche les entreprises civiles qui travaillent avec la Marine Nationale et Naval Group : sous-traitants industriels, fournisseurs de systèmes embarqués, prestataires de services IT. Ces entreprises sont soumises à des exigences de sécurité strictes (IGI 1300, zones à régime restrictif) que nous maîtrisons.",
        },
        {
          q: "Intervenez-vous sur les systèmes portuaires de Marseille-Fos ?",
          a: "Oui. Le Grand Port Maritime de Marseille (GPMM) est un opérateur d'infrastructure critique et une entité essentielle NIS2. Ses prestataires et les entreprises opérant sur ses terminaux (manutentionnaires, agents maritimes, transitaires douaniers) ont des obligations de cybersécurité via les contrats avec le port. CyberConform accompagne les entreprises de la filière maritime marseillaise : audit de sécurité, conformité NIS2, sécurisation des systèmes de gestion des conteneurs et des plateformes EDI maritime.",
        },
      ],
    }}
  />
);

export default CyberSecuritePaca;
