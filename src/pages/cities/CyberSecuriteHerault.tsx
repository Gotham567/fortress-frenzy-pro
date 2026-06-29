import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteHerault = () => (
  <CityLandingPage
    data={{
      city: "Hérault",
      citySlug: "herault",
      region: "Occitanie",
      postalCode: "34",
      intro: "CyberConform est votre prestataire cybersécurité Hérault (34) : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Montpellier, Béziers, Sète, Lunel, Agde et tout le département.",
      localContext: "L'Hérault est l'un des départements français à la croissance la plus rapide. Montpellier est la 7e métropole française et une ville tech dynamique (Montpellier French Tech, Agropolis, Innovarc). L'économie héraultaise combine innovation numérique, santé (CHU Montpellier, biothérapies), agro-tech (Agropolis International — 1er cluster agricole mondial), tourisme côtier (littoral languedocien) et logistique (Port de Sète). Le secteur viticole (languedoc-roussillon, Picpoul de Pinet, Clairette de Languedoc) et l'agroalimentaire sont omniprésents.",
      sectors: [
        "Numérique et tech (Montpellier French Tech, Innovarc, startups héraultaises)",
        "Santé et biotech (CHU Montpellier, Institut du Cancer, biothérapies)",
        "Agriculture et agro-tech (Agropolis International — 1er cluster agricole mondial)",
        "Viticulture (AOP Languedoc, Picpoul, Clairette — export international)",
        "Logistique et port (Port de Sète, hub multimodal méditerranéen)",
        "Tourisme (littoral héraultais, Agde, Cap d'Agde, Palavas)",
        "Agroalimentaire (industries agroalimentaires 34, coopératives)",
        "Collectivités (Montpellier Méditerranée Métropole, Hérault Numérique, CD34)",
      ],
      neighborhoods: [
        "Montpellier – Antigone – Odysseum (34000)",
        "Montpellier – Euromédecine – Agropolis (34090)",
        "Béziers – Agde – Sète (34500)",
        "Lunel – Palavas-les-Flots – Mauguio (34400)",
        "Pézenas – Clermont-l'Hérault (34120)",
        "Lodève – Saint-Guilhem-le-Désert (34700)",
        "Saint-Jean-de-Védas – Jacou (34430)",
        "Lattes – Castelnau-le-Lez (34970)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Hérault (34) ?",
          a: "Oui, CyberConform intervient dans tout le département de l'Hérault : Montpellier Métropole, Béziers-Méditerranée, Sète Agglopôle, Pays de Lunel et zones rurales. Nos consultants se déplacent sur site dans tout le département. CERT d'urgence 24/7.",
        },
        {
          q: "Agropolis International : les entreprises agri-tech ont-elles des besoins cyber spécifiques ?",
          a: "Oui. Le cluster Agropolis International rassemble des entreprises de phytogénomique, d'agriculture de précision, de biocontrôle et d'agro-tech. Ces entreprises ont des données de recherche précieuses (séquences génomiques, données de terrain), des systèmes IoT agricoles, et des architectures cloud. CyberConform accompagne les startups agri-tech dans la sécurisation de leurs données de R&D et la conformité RGPD.",
        },
        {
          q: "Le CHU de Montpellier est-il soumis à NIS2 ?",
          a: "Oui. Le CHU de Montpellier est une entité essentielle NIS2 dans le secteur santé. Le CHU a des obligations strictes : protection des données de santé (HDS), continuité des soins, protection contre les ransomwares (les hôpitaux sont des cibles très fréquentes). CyberConform accompagne les établissements de santé de l'Hérault dans leurs obligations NIS2 et HDS.",
        },
        {
          q: "Les caves coopératives du Languedoc-Roussillon sont-elles concernées par NIS2 ?",
          a: "Les grandes caves coopératives de l'Hérault (Vignerons du Val d'Orbieu, Sieur d'Arques) dépassant 50 salariés sont des entités importantes NIS2 dans le secteur alimentation. Elles traitent des données clients export et sont soumises au RGPD. Les risques cyber incluent les attaques sur les systèmes de traçabilité, les fraudes aux virements (BEC), et les compromissions des ERP.",
        },
        {
          q: "Quels financements pour un audit cyber dans l'Hérault ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Hérault — diagnostics numériques cofinancés. Montpellier Méditerranée Métropole — programmes numériques. BPI France Occitanie — prêts innovation. Business & Clusters Occitanie accompagne aussi ses membres sur les questions cyber.",
        },
      ],
    }}
  />
);

export default CyberSecuriteHerault;
