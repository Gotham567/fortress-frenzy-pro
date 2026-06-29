import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    slug: "sanctions-nis2-amendes-dirigeants",
    title: "Sanctions NIS2 : amendes, responsabilité des dirigeants et mécanismes d'application",
    excerpt: "Amendes NIS2 jusqu'à 10 M€ ou 2% du CA mondial. Responsabilité personnelle des dirigeants (article 20), pouvoirs ANSSI et comparaison avec les sanctions RGPD.",
    date: "29 juin 2026",
    readTime: "11 min",
    tag: "NIS2 Sanctions",
  },
  {
    slug: "cartographie-si-nis2-methode-anssi",
    title: "Cartographie du SI pour NIS2 : identifier et protéger vos systèmes critiques",
    excerpt: "Méthodologie ANSSI pour cartographier votre SI : inventaire des actifs, flux de données, dépendances fournisseurs, classification par criticité et outils recommandés.",
    date: "29 juin 2026",
    readTime: "12 min",
    tag: "NIS2 SI",
  },
  {
    slug: "notification-incident-nis2-24h-72h",
    title: "Notification d'incident NIS2 : procédure alerte 24h, rapport 72h et rapport final",
    excerpt: "Triple reporting NIS2 : alerte précoce 24h, notification complète 72h, rapport final 1 mois. Seuils de déclenchement, plateforme MonEspaceNIS2 et sanctions.",
    date: "29 juin 2026",
    readTime: "10 min",
    tag: "Gestion incidents",
  },
  {
    slug: "responsabilite-dirigeants-cybersecurite-nis2-rgpd",
    title: "Responsabilité des dirigeants en cybersécurité : NIS2, RGPD et obligations légales 2026",
    excerpt: "NIS2 article 20 : responsabilité personnelle des dirigeants, obligation de formation, Code pénal, assurance D&O et bonnes pratiques de gouvernance cyber.",
    date: "29 juin 2026",
    readTime: "13 min",
    tag: "Gouvernance",
  },
  {
    slug: "evaluation-risque-fournisseurs-nis2-supply-chain",
    title: "Évaluer les risques cyber de vos fournisseurs NIS2 : questionnaire et méthode",
    excerpt: "Sécurité de la chaîne d'approvisionnement NIS2 : cartographie des fournisseurs critiques, questionnaire d'évaluation, clauses contractuelles et gestion des accès tiers.",
    date: "29 juin 2026",
    readTime: "12 min",
    tag: "Supply chain",
  },
  {
    slug: "nis2-enseignement-superieur-universites",
    title: "NIS2 et enseignement supérieur : universités et établissements concernés en 2026",
    excerpt: "Universités, grandes écoles et CROUS face à NIS2 : quels établissements sont concernés, spécificités du SI académique, programme CaRE ANSSI et priorités pratiques.",
    date: "29 juin 2026",
    readTime: "11 min",
    tag: "NIS2 Éducation",
  },
  {
    slug: "tests-securite-nis2-pentest-frequence",
    title: "Tests de sécurité NIS2 : pentest, scan de vulnérabilités et fréquence obligatoire",
    excerpt: "NIS2 impose des tests réguliers : pentest annuel, scan mensuel, phishing simulé. Prestataires qualifiés PASSI, fréquences par criticité et intégration dans la PSSI.",
    date: "29 juin 2026",
    readTime: "10 min",
    tag: "Tests sécurité",
  },
  {
    slug: "cybersecurite-collectivites-territoriales-mairies",
    title: "Cybersécurité des collectivités territoriales : mairies, régions et obligations NIS2",
    excerpt:
      "Obligations cybersécurité des collectivités territoriales sous NIS2 2026 : communes, intercommunalités, régions, OPSN — programme CaRE ANSSI, budget, Mon Aide Cyber, et stratégie de mise en conformité.",
    date: "28 juin 2026",
    readTime: "10 min",
    tag: "Collectivités",
  },
  {
    slug: "nis2-secteur-bancaire-fintech",
    title: "NIS2 et secteur bancaire : banques, fintech et assurances face aux obligations 2026",
    excerpt:
      "NIS2 dans le secteur financier : banques, néo-banques, fintech, assurances — cumul avec DORA, obligations spécifiques TLPT, délais de notification des incidents et stratégie de conformité.",
    date: "28 juin 2026",
    readTime: "12 min",
    tag: "NIS2 Banque",
  },
  {
    slug: "transposition-nis2-france-calendrier-obligations",
    title: "Transposition de NIS2 en France : calendrier, textes et obligations effectives",
    excerpt:
      "État de la transposition française de NIS2 : loi de transposition, décrets ANSSI, calendrier d'entrée en vigueur par secteur, enregistrement sur MonEspaceNIS2 et premières obligations concrètes en 2026.",
    date: "28 juin 2026",
    readTime: "11 min",
    tag: "NIS2 France",
  },
  {
    slug: "registre-traitements-rgpd-pme-comment-faire",
    title: "Registre des traitements RGPD pour les PME : comment le créer et le tenir à jour",
    excerpt:
      "Guide pratique pour créer votre registre des traitements RGPD (article 30) : mentions obligatoires, durées de conservation par type de données, 7 erreurs fréquentes et modèle pour PME.",
    date: "28 juin 2026",
    readTime: "12 min",
    tag: "RGPD PME",
  },
  {
    slug: "nis2-secteur-industriel-fabricants-obligations",
    title: "NIS2 et secteur industriel : entités concernées, obligations OT/IT et mise en conformité",
    excerpt:
      "Guide NIS2 pour l'industrie : fabricants concernés, obligations de sécurité IT/OT, gestion des systèmes industriels (ICS/SCADA), chaîne d'approvisionnement et calendrier de mise en conformité.",
    date: "28 juin 2026",
    readTime: "14 min",
    tag: "NIS2 Industrie",
  },
  {
    slug: "politique-mots-de-passe-entreprise-cnil-anssi",
    title: "Politique de mots de passe en entreprise : exigences CNIL, ANSSI et bonnes pratiques 2026",
    excerpt:
      "Recommandations CNIL et ANSSI sur les mots de passe : longueur minimale par contexte, abandon de l'expiration systématique, MFA obligatoire, stockage (bcrypt/Argon2), gestionnaires d'entreprise et audit.",
    date: "28 juin 2026",
    readTime: "11 min",
    tag: "Bonnes pratiques",
  },
  {
    slug: "aipd-analyse-impact-protection-donnees-rgpd",
    title: "AIPD (analyse d'impact RGPD) : quand est-elle obligatoire et comment la réaliser ?",
    excerpt:
      "Guide complet sur l'Analyse d'Impact relative à la Protection des Données (AIPD/PIA) : traitements concernés, liste CNIL des 11 cas obligatoires, méthodologie en 4 étapes et outil PIA CNIL.",
    date: "28 juin 2026",
    readTime: "13 min",
    tag: "RGPD pratique",
  },
  {
    slug: "sanctions-cnil-rgpd-bilan-2025-2026",
    title: "Sanctions CNIL 2025-2026 : bilans, montants et secteurs les plus touchés",
    excerpt:
      "Analyse des sanctions CNIL prononcées en 2025-2026 : montants records, secteurs ciblés (santé, e-commerce, tech), motifs principaux (cookies, sécurité, droits) et enseignements pour votre conformité RGPD.",
    date: "20 juin 2026",
    readTime: "13 min",
    tag: "Sanctions CNIL",
  },
  {
    slug: "registre-traitements-rgpd-modele-guide",
    title: "Registre des traitements RGPD : obligations, structure et modèle 2026",
    excerpt:
      "Guide complet sur le registre des traitements RGPD (art. 30) : qui doit le tenir, que doit-il contenir, comment le structurer, erreurs fréquentes et modèle pour PME.",
    date: "18 juin 2026",
    readTime: "14 min",
    tag: "RGPD pratique",
  },
  {
    slug: "violation-donnees-notification-cnil-72h",
    title: "Violation de données RGPD : notifier la CNIL dans les 72 heures",
    excerpt:
      "Procédure complète de notification d'une violation de données à la CNIL et aux personnes concernées : critères de déclenchement, délais, contenu de la notification et portail Notif.",
    date: "16 juin 2026",
    readTime: "12 min",
    tag: "Violation de données",
  },
  {
    slug: "pssi-politique-securite-si-guide-pme",
    title: "PSSI : élaborer sa politique de sécurité des SI — guide pratique PME 2026",
    excerpt:
      "Guide complet pour rédiger une PSSI efficace : structure, contenu obligatoire, méthode de rédaction en 5 étapes, gouvernance et articulation avec NIS2 et ISO 27001.",
    date: "14 juin 2026",
    readTime: "15 min",
    tag: "PSSI",
  },
  {
    slug: "dpo-externalise-missions-obligations-rgpd",
    title: "DPO externalisé : missions, obligations légales RGPD et comment le choisir",
    excerpt:
      "Guide complet sur le DPO (Délégué à la Protection des Données) : qui doit en nommer un, missions obligatoires, indépendance, responsabilité, DPO interne vs externalisé et critères de sélection.",
    date: "12 juin 2026",
    readTime: "13 min",
    tag: "DPO",
  },
  {
    slug: "nis2-sous-traitants-supply-chain-obligations",
    title: "NIS2 et sous-traitants : obligations supply chain et clauses contractuelles",
    excerpt:
      "NIS2 et sécurité de la chaîne d'approvisionnement : obligations vis-à-vis des fournisseurs, clauses contractuelles à exiger, questionnaires TPRM et programme de gestion des risques tiers.",
    date: "10 juin 2026",
    readTime: "14 min",
    tag: "NIS2",
  },
  {
    slug: "nis2-secteur-transport-logistique-obligations",
    title: "NIS2 et secteur transport-logistique : entités concernées et obligations 2026",
    excerpt:
      "Guide NIS2 pour le transport : entités concernées (ferroviaire, aérien, routier, maritime), obligations de cybersécurité, notification des incidents, enjeux IT/OT et calendrier de mise en conformité.",
    date: "8 juin 2026",
    readTime: "13 min",
    tag: "NIS2 Transport",
  },
  {
    slug: "budget-cybersecurite-pme-2026",
    title: "Budget cybersécurité PME 2026 : combien dépenser et comment prioriser",
    excerpt:
      "Fourchettes budgétaires par taille d'entreprise, modèle de calcul du ROI cyber, répartition prévention/détection/réponse et leviers pour optimiser chaque euro investi.",
    date: "18 juin 2026",
    readTime: "15 min",
    tag: "Budget & ROI",
  },
  {
    slug: "red-team-blue-team-exercice-securite",
    title: "Red Team / Blue Team : exercices de sécurité pour évaluer votre résilience",
    excerpt:
      "Comprendre les exercices Red Team, Blue Team et Purple Team : différences avec le pentest classique, déroulement, métriques MTTD/MTTR et mise en place pour les PME et ETI.",
    date: "16 juin 2026",
    readTime: "14 min",
    tag: "Red Team",
  },
  {
    slug: "threat-intelligence-cti-entreprise",
    title: "Threat Intelligence (CTI) en entreprise : exploiter les renseignements sur les menaces",
    excerpt:
      "Guide pratique sur la Cyber Threat Intelligence : sources OSINT/CLOSINT, intégration SIEM/SOAR, flux MISP, indicateurs de compromission (IoC) et programme CTI adapté aux PME.",
    date: "14 juin 2026",
    readTime: "14 min",
    tag: "Threat Intelligence",
  },
  {
    slug: "gestion-crise-cyber-plan-communication",
    title: "Gestion de crise cyber : plan de réponse et communication de crise",
    excerpt:
      "Construire un plan de gestion de crise cyber efficace : cellule de crise, chaîne de commandement, communication interne/externe, obligations de notification ANSSI/CNIL et retour d'expérience.",
    date: "12 juin 2026",
    readTime: "13 min",
    tag: "Gestion de crise",
  },
  {
    slug: "securite-chaine-approvisionnement-risques-tiers",
    title: "Sécurité de la chaîne d'approvisionnement : gérer les risques cyber des tiers",
    excerpt:
      "Attaques supply chain (SolarWinds, XZ Utils), questionnaires de sécurité fournisseurs, SBOM, clauses contractuelles NIS2 et programme TPRM adapté aux PME et ETI.",
    date: "10 juin 2026",
    readTime: "14 min",
    tag: "Risques tiers",
  },
  {
    slug: "hds-hebergement-donnees-sante-certification",
    title: "Certification HDS (Hébergement de Données de Santé) : guide complet 2026",
    excerpt:
      "Périmètre, 6 activités, articulation ISO 27001 / RGPD / NIS2, processus, coûts et durée pour obtenir la certification HDS en France.",
    date: "14 mai 2026",
    readTime: "16 min",
    tag: "HDS Santé",
  },
  {
    slug: "iam-gestion-identites-acces-pme",
    title: "IAM et gestion des identités pour PME : guide complet 2026 (SSO, MFA, PAM, IGA)",
    excerpt:
      "SSO, MFA FIDO2, provisioning SCIM, PAM, recertification des droits et identités machines : structurer un programme IAM conforme NIS2 et ISO 27001.",
    date: "12 mai 2026",
    readTime: "17 min",
    tag: "IAM",
  },
  {
    slug: "securite-microsoft-365-entreprise-guide",
    title: "Sécurité Microsoft 365 en entreprise : guide complet 2026",
    excerpt:
      "Durcir Microsoft 365 : MFA, Conditional Access, Defender, Purview, DLP, Secure Score, sauvegardes tierces et conformité NIS2 et RGPD.",
    date: "10 mai 2026",
    readTime: "18 min",
    tag: "Microsoft 365",
  },
  {
    slug: "ia-generative-risques-cybersecurite-entreprise",
    title: "IA générative et cybersécurité en entreprise : risques, gouvernance et AI Act",
    excerpt:
      "Shadow AI, fuite de données vers ChatGPT, deepfakes, prompt injection : risques de l'IA générative et plan de gouvernance conforme AI Act, NIS2 et RGPD.",
    date: "4 mai 2026",
    readTime: "17 min",
    tag: "IA & Cybersécurité",
  },
  {
    slug: "pentest-test-intrusion-guide",
    title: "Test d'intrusion (pentest) : guide complet 2026 pour PME et ETI",
    excerpt:
      "Types (boîte noire, grise, blanche), méthodologie PASSI/OWASP, livrables, prix, fréquence et obligations NIS2, ISO 27001 et DORA.",
    date: "5 mai 2026",
    readTime: "17 min",
    tag: "Pentest",
  },
  {
    slug: "soc-manage-siem-pme-guide",
    title: "SOC managé et SIEM pour PME : détecter les attaques 24/7",
    excerpt:
      "Comprendre SOC managé (MSSP), SIEM, EDR/XDR et MDR : fonctionnement, KPIs (MTTD, MTTR), prix indicatifs et critères de choix pour une PME en 2026.",
    date: "6 mai 2026",
    readTime: "16 min",
    tag: "SOC managé",
  },
  {
    slug: "sauvegardes-3-2-1-pra-pca-pme",
    title: "Sauvegardes 3-2-1, PRA et PCA : guide pratique pour PME face aux ransomwares",
    excerpt:
      "Stratégie 3-2-1-1-0, sauvegardes immuables, RTO/RPO, PRA et PCA : guide complet pour protéger votre PME contre les ransomwares et incidents majeurs.",
    date: "2 mai 2026",
    readTime: "16 min",
    tag: "Sauvegardes & PRA",
  },
  {
    slug: "zero-trust-mfa-pme-guide",
    title: "Zero Trust et MFA pour PME : déployer une architecture moderne sans exploser le budget",
    excerpt:
      "Principes Zero Trust, MFA résistant au phishing (FIDO2), feuille de route 90 jours, coûts indicatifs et conformité NIS2 pour les PME françaises.",
    date: "30 avril 2026",
    readTime: "16 min",
    tag: "Zero Trust",
  },
  {
    slug: "ebios-rm-methode-analyse-risques",
    title: "Méthode EBIOS Risk Manager : guide pratique pour analyser ses risques cyber en 2026",
    excerpt:
      "Maîtrisez la méthode EBIOS RM de l'ANSSI : 5 ateliers, livrables, exemples concrets et articulation avec NIS2, ISO 27001 et DORA.",
    date: "28 avril 2026",
    readTime: "17 min",
    tag: "EBIOS RM",
  },
  {
    slug: "directive-cer-resilience-entites-critiques",
    title: "Directive CER : résilience des entités critiques, le pendant physique de NIS2",
    excerpt:
      "Comprendre la directive européenne CER : périmètre, obligations, articulation avec NIS2, sanctions et plan de mise en conformité pour les entités critiques en France.",
    date: "24 avril 2026",
    readTime: "15 min",
    tag: "Directive CER",
  },
  {
    slug: "cyber-resilience-act-guide",
    title: "Cyber Resilience Act (CRA) : guide complet pour éditeurs et fabricants",
    excerpt:
      "Périmètre, marquage CE cybersécurité, obligations sur les produits avec éléments numériques, sanctions et plan de mise en conformité d'ici décembre 2027.",
    date: "22 avril 2026",
    readTime: "16 min",
    tag: "Cyber Resilience Act",
  },
  {
    slug: "cyber-assurance-pme-guide",
    title: "Cyber-assurance pour PME : guide complet pour choisir et négocier sa police en 2026",
    excerpt:
      "Garanties, exclusions, prérequis techniques, prix moyens, gestion d'un sinistre cyber et conseils pour bien négocier votre contrat cyber-assurance.",
    date: "20 avril 2026",
    readTime: "15 min",
    tag: "Cyber-assurance",
  },
  {
    slug: "dora-reglementation-secteur-financier",
    title: "Règlement DORA : guide complet pour le secteur financier en 2026",
    excerpt:
      "Tout savoir sur DORA : périmètre, obligations, gestion des risques TIC, tests de résilience, sanctions et plan de mise en conformité pour banques, assurances et fintechs.",
    date: "18 avril 2026",
    readTime: "17 min",
    tag: "DORA",
  },
  {
    slug: "iso-27001-certification-guide",
    title: "Certification ISO 27001 : le guide complet pour les PME et ETI",
    excerpt:
      "Guide complet sur la certification ISO 27001 : objectifs, étapes, coûts, durée, livrables, lien avec NIS2 et RGPD. Méthodologie pour obtenir et maintenir votre certification SMSI.",
    date: "16 avril 2026",
    readTime: "18 min",
    tag: "ISO 27001",
  },
  {
    slug: "securite-cloud-pme-guide",
    title: "Sécurité du cloud pour PME : risques, bonnes pratiques et conformité 2026",
    excerpt:
      "Guide complet sur la sécurité du cloud pour les PME : risques, modèle de responsabilité partagée, bonnes pratiques Microsoft 365, Google Workspace, AWS, Azure, conformité NIS2 et RGPD.",
    date: "14 avril 2026",
    readTime: "16 min",
    tag: "Sécurité Cloud",
  },
  {
    slug: "audit-cybersecurite-entreprise",
    title: "Audit de cybersécurité : méthodologie complète et coûts 2026",
    excerpt:
      "Guide complet sur l'audit de cybersécurité en entreprise : types d'audits (organisationnel, technique, pentest), méthodologie ANSSI, livrables, coûts et conformité NIS2.",
    date: "10 avril 2026",
    readTime: "16 min",
    tag: "Audit cyber",
  },
  {
    slug: "ransomware-pme-protection",
    title: "Ransomware PME : prévention, réaction et reconstruction",
    excerpt:
      "Guide complet pour protéger votre PME contre les ransomwares : vecteurs d'attaque, mesures préventives, gestion de crise, négociation, reconstruction et conformité NIS2.",
    date: "6 avril 2026",
    readTime: "18 min",
    tag: "Ransomware",
  },
  {
    slug: "phishing-protection-entreprise",
    title: "Phishing en entreprise : guide complet de protection 2026",
    excerpt:
      "Comprendre, détecter et bloquer le phishing en entreprise : techniques d'attaque, solutions techniques (DMARC, SPF, DKIM), formation des collaborateurs et conformité NIS2.",
    date: "2 avril 2026",
    readTime: "17 min",
    tag: "Phishing",
  },
  {
    slug: "sensibilisation-cybersecurite-entreprise",
    title: "Sensibilisation à la cybersécurité en entreprise : programme complet",
    excerpt:
      "Guide complet pour mettre en place un programme de sensibilisation cybersécurité efficace : phishing simulé, formation par métier, indicateurs de performance et conformité NIS2.",
    date: "26 mars 2026",
    readTime: "15 min",
    tag: "Formation cyber",
  },
  {
    slug: "plan-continuite-activite-cybersecurite",
    title: "Plan de continuité d'activité (PCA) cybersécurité : guide complet",
    excerpt:
      "Guide complet sur le PCA/PRA cybersécurité : gestion de crise, sauvegardes immutables, conformité NIS2 et méthodologie pour garantir la résilience de votre entreprise.",
    date: "24 mars 2026",
    readTime: "16 min",
    tag: "Résilience cyber",
  },
  {
    slug: "rssi-externalise-guide",
    title: "RSSI externalisé : pourquoi et comment externaliser votre cybersécurité",
    excerpt:
      "Guide complet sur le RSSI externalisé (vCISO) : avantages, missions, coûts, critères de choix et ROI pour les PME et ETI soumises à NIS2.",
    date: "22 mars 2026",
    readTime: "18 min",
    tag: "RSSI externalisé",
  },
  {
    slug: "cybersecurite-pme-guide",
    title: "Cybersécurité des PME : le guide complet pour protéger votre entreprise",
    excerpt:
      "Guide complet de cybersécurité pour les PME : menaces principales, mesures de protection essentielles, budget, outils et plan d'action en 90 jours pour sécuriser votre entreprise.",
    date: "18 mars 2026",
    readTime: "17 min",
    tag: "Cybersécurité",
  },
  {
    slug: "nis2-secteur-sante",
    title: "NIS2 et secteur de la santé : obligations et mise en conformité",
    excerpt:
      "Guide complet sur l'application de la directive NIS2 au secteur de la santé : hôpitaux, cliniques, laboratoires et éditeurs de logiciels médicaux. Obligations, risques et plan d'action.",
    date: "16 mars 2026",
    readTime: "16 min",
    tag: "NIS2 Santé",
  },
  {
    slug: "nis2-secteur-energie",
    title: "NIS2 et secteur de l'énergie : enjeux et obligations de cybersécurité",
    excerpt:
      "Analyse complète de la directive NIS2 appliquée au secteur de l'énergie : électricité, gaz, pétrole, hydrogène. Obligations, risques OT/IT et plan de conformité.",
    date: "14 mars 2026",
    readTime: "15 min",
    tag: "NIS2 Énergie",
  },
  {
    slug: "directive-nis2",
    title: "Qu'est-ce que la directive NIS2 ?",
    excerpt:
      "Découvrez tout ce que vous devez savoir sur la directive européenne NIS2 : objectifs, périmètre, obligations et calendrier de mise en conformité pour les entreprises françaises.",
    date: "12 mars 2026",
    readTime: "15 min",
    tag: "NIS2",
  },
  {
    slug: "mise-en-conformite-nis2-guide-pme",
    title: "Mise en conformité NIS2 : guide complet pour les PME",
    excerpt:
      "Guide pratique et détaillé pour accompagner les PME dans leur mise en conformité avec la directive NIS2. Étapes, outils, budget et erreurs à éviter.",
    date: "10 mars 2026",
    readTime: "18 min",
    tag: "NIS2",
  },
  {
    slug: "audit-rgpd-entreprises",
    title: "Audit RGPD pour les entreprises",
    excerpt:
      "Méthodologie complète pour réaliser un audit RGPD en entreprise : préparation, déroulement, livrables et plan d'action pour garantir la conformité de vos traitements de données.",
    date: "8 mars 2026",
    readTime: "16 min",
    tag: "RGPD",
  },
  {
    slug: "nis2-vs-rgpd-differences",
    title: "NIS2 vs RGPD : quelles différences ?",
    excerpt:
      "Analyse comparative approfondie entre la directive NIS2 et le RGPD. Comprenez les différences, complémentarités et comment gérer les deux réglementations simultanément.",
    date: "5 mars 2026",
    readTime: "14 min",
    tag: "Réglementation",
  },
  {
    slug: "questions-poser-avant-audit-cybersecurite",
    title: "20 questions à poser avant un audit cybersécurité (et ce que les réponses révèlent)",
    excerpt:
      "Qualifications, méthodologie, livrables, cadre légal, assurance, prix : 20 questions indispensables pour évaluer un prestataire d'audit cybersécurité avant de signer. Ce que chaque réponse révèle sur la qualité de la prestation.",
    date: "28 juin 2026",
    readTime: "12 min",
    tag: "Guide achat",
  },
  {
    slug: "rapport-audit-cybersecurite-contenu",
    title: "Rapport d'audit cybersécurité : que contient-il et comment le lire ?",
    excerpt:
      "Structure d'un rapport de qualité : résumé exécutif, fiches de vulnérabilité CVSS, preuves, recommandations de remédiation. Comment exploiter les résultats et distinguer un bon rapport d'un mauvais.",
    date: "28 juin 2026",
    readTime: "11 min",
    tag: "Guide pratique",
  },
  {
    slug: "duree-audit-cybersecurite-combien-de-temps",
    title: "Combien de temps dure un audit cybersécurité ? Durées par type d'audit",
    excerpt:
      "Durée d'un pentest externe, interne, d'un audit applicatif, organisationnel ou cloud. Phases de la mission, facteurs qui allongent ou accélèrent l'audit et conseils pour planifier sans perturber votre activité.",
    date: "28 juin 2026",
    readTime: "9 min",
    tag: "Guide pratique",
  },
  {
    slug: "cybersecurite-pme-sous-traitante-industrie",
    title: "Cybersécurité PME sous-traitante industrielle : NIS2, exigences et conformité",
    excerpt:
      "NIS2 vous impacte même si vous êtes en dessous des seuils. Guide complet pour les sous-traitants industriels : exigences des grands comptes, questionnaires TISAX, audits fournisseurs et plan de conformité.",
    date: "28 juin 2026",
    readTime: "13 min",
    tag: "Sous-traitance",
  },
];
const Actualites = () => {
  return (
    <>
      <Helmet>
        <title>Actualités cybersécurité & conformité NIS2 RGPD — CyberConform</title>
        <meta
          name="description"
          content="Articles experts sur la cybersécurité, la conformité NIS2 et le RGPD. Guides pratiques pour les PME : directive NIS2, audit RGPD, mise en conformité."
        />
        <link rel="canonical" href="https://cyberconform.fr/actualites" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <section className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                Ressources & Actualités
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Guides experts en{" "}
                <span className="text-primary">cybersécurité</span> & conformité
              </h1>
              <p className="text-lg text-muted-foreground">
                Articles de fond, guides pratiques et analyses réglementaires pour
                accompagner les PME dans leur mise en conformité NIS2 et RGPD.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/actualites/${article.slug}`}
                  className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary mb-4">
                    {article.tag}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Actualites;
