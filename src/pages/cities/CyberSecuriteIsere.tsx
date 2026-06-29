import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteIsere = () => (
  <CityLandingPage
    data={{
      city: "Isère",
      citySlug: "isere",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38",
      intro: "CyberConform est votre prestataire cybersécurité Isère (38) : audit NIS2, pentest, conformité RGPD et réponse aux incidents pour les entreprises de Grenoble, Meylan, Crolles, Échirolles, Bourgoin-Jallieu, Vienne et tout le département.",
      localContext: "L'Isère est l'un des départements les plus innovants d'Europe grâce à l'écosystème grenoblois. Grenoble-Alpes Métropole est un pôle mondial de la microélectronique et de la recherche de premier plan : STMicroelectronics (Crolles, Grenoble — 13 000 salariés), Soitec (Bernin — wafers SOI pour semiconducteurs), Lynred (infrarouge), Schneider Electric (siège mondial), et le CEA-Leti (recherche technologique). Minalogic est l'un des premiers clusters microélectronique-logiciel au monde. L'Isère accueille aussi des industries chimiques (Cémoi, Air Liquide), des énergies (EDF Hydraulique), et un tourisme alpin important (Chartreuse, Belledonne, Vercors).",
      sectors: [
        "Microélectronique et semiconducteurs (STMicroelectronics Crolles/Grenoble, Soitec Bernin, Lynred)",
        "CEA-Leti et recherche (Institut Polytechnique Grenoble, INSERM, LIG)",
        "Industrie (Schneider Electric siège, Air Liquide, Cémoi)",
        "Numérique (Minalogic — 1er cluster micro-nanotech, startups deeptech)",
        "Énergie (EDF Hydraulique Alpes, Enedis, ENR montagne)",
        "Santé (CHU Grenoble-Alpes, Clinique des Cèdres, biomed 38)",
        "Tourisme alpin (domaines skiables, Vercors, Chartreuse, Via Rhôna)",
        "Collectivités (Grenoble-Alpes Métropole, Agglomération du Pays Voironnais, CD38)",
      ],
      neighborhoods: [
        "Grenoble – Presqu'île – Europole (38000)",
        "Meylan – Montbonnot – Saint-Martin-d'Hères (38240)",
        "Crolles – Bernin – Domène (38920)",
        "Échirolles – Poisat – Eybens (38130)",
        "Bourgoin-Jallieu – La Tour-du-Pin (38300)",
        "Vienne – Pont-Évêque (38200)",
        "Voiron – Vinay (38500)",
        "Vizille – Vizille Technopole – Jarrie (38220)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Isère (38) ?",
          a: "Oui, CyberConform intervient dans tout le département de l'Isère : Grenoble-Alpes Métropole, Pays Voironnais, Bièvre Isère, Viennois et zones rurales et montagnardes. Nos consultants sont présents dans l'écosystème Minalogic et le secteur de la microélectronique grenobloise. CERT d'urgence 24/7.",
        },
        {
          q: "STMicroelectronics à Crolles et Grenoble : quelles obligations NIS2 ?",
          a: "STMicroelectronics est une entité essentielle NIS2 dans le secteur des infrastructures numériques (fabricants de semiconducteurs critiques). Les fournisseurs et sous-traitants de STMicro dépassant les seuils sont des entités importantes. L'écosystème grenoblois de la microélectronique (Soitec, Lynred, Dolphin Design) a des enjeux similaires. CyberConform accompagne ces entreprises dans leurs audits de sécurité OT et conformité NIS2.",
        },
        {
          q: "Le CEA-Leti de Grenoble doit-il protéger ses données de recherche ?",
          a: "Oui. Le CEA-Leti est un organisme public de recherche technologique dont les données (brevets, résultats expérimentaux, plans de circuits intégrés) ont une valeur économique et stratégique immense. Le CEA-Leti est soumis à des obligations de sécurité renforcées (IGC/A pour certaines données). Ses partenaires industriels et startups issues du CEA doivent aussi protéger les données partagées.",
        },
        {
          q: "Les domaines skiables isérois ont-ils des obligations cyber ?",
          a: "Les grandes sociétés d'exploitation de domaines skiables de l'Isère (Chamrousse, Villard-de-Lans, Les 2 Alpes, Alpe d'Huez) opèrent des systèmes informatiques critiques : billetterie cloud, applications mobile skieurs, SCADA des remontées mécaniques (télésièges, téléphériques). La sécurisation des systèmes OT des remontées est obligatoire (sécurité des personnes). CyberConform propose des audits OT pour les exploitants de domaines skiables.",
        },
        {
          q: "Quels financements pour un audit cyber en Isère ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nord Isère et la CCI Grenoble — diagnostics numériques. Grenoble-Alpes Métropole — programmes d'innovation. BPI France AuRA — prêts innovation. Minalogic (cluster microélectronique-logiciel) accompagne ses membres avec des ressources cybersécurité et des appels à projets collaboratifs.",
        },
      ],
    }}
  />
);

export default CyberSecuriteIsere;
