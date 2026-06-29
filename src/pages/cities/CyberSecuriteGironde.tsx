import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteGironde = () => (
  <CityLandingPage
    data={{
      city: "Gironde",
      citySlug: "gironde",
      region: "Nouvelle-Aquitaine",
      postalCode: "33",
      intro: "CyberConform est votre prestataire cybersécurité Gironde (33) : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Bordeaux, Mérignac, Mérignac Cyber, Péssac, Libourne, Arcachon et tout le département.",
      localContext: "La Gironde est le 2e département le plus peuplé de France hors Île-de-France. Bordeaux Métropole concentre une économie diversifiée : aéronautique (Dassault Aviation Mérignac, Thales, Liebherr), numérique (French Tech Bordeaux, Mérignac Cyber — cluster cybersécurité), viticulture (Médoc, Saint-Émilion, négoce international), et santé (CHU Bordeaux Pellegrin, INSERM). Mérignac est à la fois la capitale de l'aéronautique girondine et un hub cybersécurité avec le cluster Mérignac Cyber. Le bassin arcachonnais et le Libournais ont des économies locales en développement numérique.",
      sectors: [
        "Aéronautique et défense (Dassault Mérignac, Thales, Liebherr, Safran)",
        "Cybersécurité (cluster Mérignac Cyber, AMOSSYS, Orange Cyberdefense)",
        "Viticulture et négoce (Médoc, Saint-Émilion, Pomerol — export mondial)",
        "Numérique et tech (French Tech Bordeaux, Station B, startups girondines)",
        "Chimie et pharmacie (BASF, Sanofi, Bayer CropScience)",
        "Santé (CHU Bordeaux Pellegrin, cliniques, INSERM Bordeaux)",
        "Agroalimentaire (Landes, productions AOC, conserveries)",
        "Collectivités (Bordeaux Métropole, Gironde Numérique, CD33)",
      ],
      neighborhoods: [
        "Bordeaux – Caudéran – Mérignac (33200/33700)",
        "Pessac – Talence – Gradignan (33600)",
        "Mérignac Cyber – Technoparc de l'Aviation (33700)",
        "Libourne – Saint-Émilion – Pomerol (33500)",
        "Arcachon – La Teste-de-Buch – Gujan-Mestras (33120)",
        "Blaye – Bourg-sur-Gironde (33390)",
        "Langon – La Réole (33210)",
        "Lesparre-Médoc – Pauillac (33340)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la Gironde (33) ?",
          a: "Oui, CyberConform intervient dans tout le département de la Gironde : Bordeaux Métropole, bassin arcachonnais, Entre-Deux-Mers, Médoc, Libournais et zones rurales. Nos consultants se déplacent sur site. Déplacement inclus pour les entreprises du 33. CERT d'urgence 24/7.",
        },
        {
          q: "Le cluster Mérignac Cyber propose-t-il des audits cybersécurité ?",
          a: "Mérignac Cyber est un cluster qui regroupe des acteurs de la cybersécurité girondine. CyberConform est spécialisé dans les audits et tests d'intrusion, complémentaires aux acteurs du cluster. Nous proposons des audits NIS2, pentests, conformité RGPD et réponse aux incidents pour les entreprises du Technoparc de l'Aviation et de la zone industrielle de Mérignac.",
        },
        {
          q: "Les domaines viticoles du Médoc et de Saint-Émilion sont-ils soumis au RGPD ?",
          a: "Oui. Les domaines viticoles de la Gironde (Médoc classé, Saint-Émilion Grand Cru, Pomerol) qui vendent directement à des clients particuliers (DTC) ou via des mailing lists sont soumis au RGPD. Les données clients acheteurs (notamment US, Asie) nécessitent un registre des traitements, une politique de confidentialité, et un hébergement des données conforme. CyberConform accompagne les propriétés viticoles dans leur conformité RGPD.",
        },
        {
          q: "Quels financements pour un audit cyber en Gironde ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Nouvelle-Aquitaine et la CCI Bordeaux Gironde (cofinancement diagnostics numériques). BPI France Nouvelle-Aquitaine — prêts innovation. Bordeaux Métropole accompagne les entreprises numériques via Bordeaux Digital Week et ses programmes d'aide. Le cluster Mérignac Cyber organise des sessions de sensibilisation gratuites.",
        },
        {
          q: "Délais d'intervention pour un pentest en Gironde ?",
          a: "Pour un pentest planifié en Gironde, nos délais habituels sont de 5 à 15 jours ouvrés selon le périmètre. Pour une réponse à incident (cyberattaque en cours), notre CERT intervient en moins de 4 heures sur site dans l'agglomération bordelaise. Nous avons des consultants basés à Bordeaux et Mérignac.",
        },
      ],
    }}
  />
);

export default CyberSecuriteGironde;
