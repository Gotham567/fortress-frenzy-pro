import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteSeineMaritime = () => (
  <CityLandingPage
    data={{
      city: "Seine-Maritime",
      citySlug: "seine-maritime",
      region: "Normandie",
      postalCode: "76",
      intro: "CyberSecure est votre expert cybersécurité Seine-Maritime (76) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Rouen, Le Havre, Dieppe, Fécamp, Elbeuf et tout le département.",
      localContext: "La Seine-Maritime est un département industriel majeur de Normandie. Le Havre est le 1er port de commerce français pour les conteneurs, hub logistique européen en pleine transformation numérique (port du futur). Rouen est la capitale normande avec une économie diversifiée : chimie (TotalEnergies, Solvay), pharma (Pfizer Rouen), et un tissu de PME industrielles. La raffinerie de Gonfreville-l'Orcher (TotalEnergies) est l'une des plus grandes de France avec des systèmes OT critiques. L'axe Seine concentre des ETI industrielles dans la pétrochimie, le textile industriel et la plasturgie.",
      sectors: [
        "Port et logistique (Grand Port Maritime Le Havre, CMA CGM, MSC — TOS, smart port)",
        "Énergie (TotalEnergies Gonfreville, EDF Paluel — OT/SCADA raffinerie nucléaire)",
        "Chimie et pharma (Solvay Rouen, Pfizer Rouen, Lubrizol — Seveso, ICS)",
        "Automobile (Renault Sandouville, NTN-SNR — PLM, systèmes de production)",
        "Agroalimentaire (Lactalis Rouen, Savencia — ERP cloud, supply chain froid)",
        "Logistique (Amazon Le Havre, XPO Normandie — WMS cloud, robotique)",
        "Santé (CHU Rouen, GHH — HDS, e-santé normande)",
        "Collectivités (Métropole Rouen Normandie, Le Havre Seine Métropole — cloud souverain)",
      ],
      neighborhoods: [
        "Rouen – Saint-Sever – Rive Gauche (76000)",
        "Le Havre – Grand Hameau – Caucriauville (76600)",
        "Dieppe – Arques-la-Bataille (76200)",
        "Fécamp – Étretat (76400)",
        "Elbeuf – Saint-Pierre-lès-Elbeuf (76500)",
        "Mont-Saint-Aignan – Bois-Guillaume (76130)",
        "Gonfreville-l'Orcher – Harfleur (76700)",
        "Barentin – Yvetot – Lillebonne (76360)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Seine-Maritime (76) ?",
          a: "Oui, CyberSecure intervient dans tout le 76 : Rouen Normandie Métropole, Le Havre Seine Métropole, Dieppe-Maritime, et les zones rurales du Pays de Caux. Nous avons une expertise dans les environnements portuaires, pétrochimiiques, et industriels normands. CERT d'urgence 24/7.",
        },
        {
          q: "Le Grand Port Maritime du Havre (DP World, MSC) : comment sécuriser les opérations portuaires numériques ?",
          a: "Le port du Havre digitalise ses opérations : système de gestion des terminaux (TOS Navis N4), portail SOGET (Single Window maritime), automatisation des grues (Automated Stacking Cranes), et le projet port.booster. Ces systèmes sont des cibles pour les groupes criminels qui attaquent les ports pour faciliter le trafic de stupéfiants (attaque informatique pour modifier les manifestes de cargaison). Les risques OT incluent la compromission des automates de grues. CyberSecure audite les systèmes portuaires.",
        },
        {
          q: "L'incendie Lubrizol Rouen (2019) : quelles leçons pour la cybersécurité des sites industriels Seveso ?",
          a: "L'incendie de Lubrizol a mis en lumière les risques de cascades industrielles. En cybersécurité, un site Seveso compromis pourrait subir une manipulation de ses systèmes de contrôle (DCS, SIS) pour déclencher ou amplifier un incident industriel. Les sites Seveso seuil haut sont des OIV (Opérateurs d'Importance Vitale) soumis à des exigences de sécurité strictes (arrêtés sectoriels). CyberSecure accompagne les industriels Seveso dans leurs audits OT et la mise en conformité avec les exigences gouvernementales.",
        },
        {
          q: "TotalEnergies à Gonfreville : comment auditer une raffinerie sans perturber la production ?",
          a: "Une raffinerie en production continue (H24/365) ne peut pas s'arrêter pour un audit. L'approche : audit passif du réseau OT (capture passive de trafic sans injection), revue documentaire des architectures (P&ID, réseau OT), interviews des équipes SCADA et maintenance, et tests limités aux systèmes de management (bureau IT de la raffinerie). Les tests actifs sont réalisés sur des environnements de test ou lors des arrêts techniques annuels. CyberSecure planifie ses audits OT en accord avec les équipes de production.",
        },
        {
          q: "Quels financements pour un audit cyber en Seine-Maritime ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Rouen Métropole — diagnostics numériques. Métropole Rouen Normandie — programmes innovation. BPI France Normandie — prêts innovation. Le CRITT Normandie et Normandie AeroEspace accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuriteSeineMaritime;
