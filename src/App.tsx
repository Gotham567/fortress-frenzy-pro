import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
const Index = lazy(() => import("./pages/Index.tsx"));
const Actualites = lazy(() => import("./pages/Actualites.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Articles
const DirectiveNis2 = lazy(() => import("./pages/articles/DirectiveNis2.tsx"));
const MiseEnConformiteNis2 = lazy(() => import("./pages/articles/MiseEnConformiteNis2.tsx"));
const AuditRgpd = lazy(() => import("./pages/articles/AuditRgpd.tsx"));
const Nis2VsRgpd = lazy(() => import("./pages/articles/Nis2VsRgpd.tsx"));
const CybersecuritePme = lazy(() => import("./pages/articles/CybersecuritePme.tsx"));
const Nis2SecteurSante = lazy(() => import("./pages/articles/Nis2SecteurSante.tsx"));
const Nis2SecteurEnergie = lazy(() => import("./pages/articles/Nis2SecteurEnergie.tsx"));
const RssiExternalise = lazy(() => import("./pages/articles/RssiExternalise.tsx"));
const PlanContinuiteActivite = lazy(() => import("./pages/articles/PlanContinuiteActivite.tsx"));
const SensibilisationCybersecurite = lazy(() => import("./pages/articles/SensibilisationCybersecurite.tsx"));
const PhishingProtection = lazy(() => import("./pages/articles/PhishingProtection.tsx"));
const RansomwarePme = lazy(() => import("./pages/articles/RansomwarePme.tsx"));
const AuditCybersecurite = lazy(() => import("./pages/articles/AuditCybersecurite.tsx"));
const DoraReglementation = lazy(() => import("./pages/articles/DoraReglementation.tsx"));
const Iso27001Certification = lazy(() => import("./pages/articles/Iso27001Certification.tsx"));
const SecuriteCloudPme = lazy(() => import("./pages/articles/SecuriteCloudPme.tsx"));
const CyberResilienceAct = lazy(() => import("./pages/articles/CyberResilienceAct.tsx"));
const CyberAssurancePme = lazy(() => import("./pages/articles/CyberAssurancePme.tsx"));
const DirectiveCer = lazy(() => import("./pages/articles/DirectiveCer.tsx"));
const EbiosRmMethode = lazy(() => import("./pages/articles/EbiosRmMethode.tsx"));
const ZeroTrustMfaPme = lazy(() => import("./pages/articles/ZeroTrustMfaPme.tsx"));
const SauvegardesPraPme = lazy(() => import("./pages/articles/SauvegardesPraPme.tsx"));
const SocManageSiemPme = lazy(() => import("./pages/articles/SocManageSiemPme.tsx"));
const PentestTestIntrusion = lazy(() => import("./pages/articles/PentestTestIntrusion.tsx"));
const IaGenerativeRisquesCyber = lazy(() => import("./pages/articles/IaGenerativeRisquesCyber.tsx"));
const SecuriteMicrosoft365 = lazy(() => import("./pages/articles/SecuriteMicrosoft365.tsx"));
const IamGestionIdentitesPme = lazy(() => import("./pages/articles/IamGestionIdentitesPme.tsx"));
const HdsHebergementDonneesSante = lazy(() => import("./pages/articles/HdsHebergementDonneesSante.tsx"));
const BudgetCybersecuritePme = lazy(() => import("./pages/articles/BudgetCybersecuritePme.tsx"));
const RedTeamBlueTeam = lazy(() => import("./pages/articles/RedTeamBlueTeam.tsx"));
const ThreatIntelligenceCti = lazy(() => import("./pages/articles/ThreatIntelligenceCti.tsx"));
const GestionCriseCyber = lazy(() => import("./pages/articles/GestionCriseCyber.tsx"));
const SecuriteChaineApprovisionnement = lazy(() => import("./pages/articles/SecuriteChaineApprovisionnement.tsx"));
const SanctionsCnil = lazy(() => import("./pages/articles/SanctionsCnil.tsx"));
const RegistreTraitements = lazy(() => import("./pages/articles/RegistreTraitements.tsx"));
const Nis2SousTraitants = lazy(() => import("./pages/articles/Nis2SousTraitants.tsx"));
const ViolationDonneesNotification = lazy(() => import("./pages/articles/ViolationDonneesNotification.tsx"));
const PssiGuide = lazy(() => import("./pages/articles/PssiGuide.tsx"));
const DpoObligations = lazy(() => import("./pages/articles/DpoObligations.tsx"));
const Nis2Transport = lazy(() => import("./pages/articles/Nis2Transport.tsx"));
const QuestionsAuditCybersecurite = lazy(() => import("./pages/articles/QuestionsAuditCybersecurite.tsx"));
const RapportAuditContenu = lazy(() => import("./pages/articles/RapportAuditContenu.tsx"));
const DureeAuditCybersecurite = lazy(() => import("./pages/articles/DureeAuditCybersecurite.tsx"));
const CyberPMESousTraitante = lazy(() => import("./pages/articles/CyberPMESousTraitante.tsx"));
const AipdRgpdObligatoire = lazy(() => import("./pages/articles/AipdRgpdObligatoire.tsx"));
const PolitiqueMdpEntreprise = lazy(() => import("./pages/articles/PolitiqueMdpEntreprise.tsx"));
const Nis2SecteurIndustriel = lazy(() => import("./pages/articles/Nis2SecteurIndustriel.tsx"));
const RegistreTraitementsRgpdPme = lazy(() => import("./pages/articles/RegistreTraitementsRgpdPme.tsx"));
const Nis2TranspositionFrance = lazy(() => import("./pages/articles/Nis2TranspositionFrance.tsx"));
const Nis2SecteurBancaire = lazy(() => import("./pages/articles/Nis2SecteurBancaire.tsx"));
const CybersecuriteCollectivites = lazy(() => import("./pages/articles/CybersecuriteCollectivites.tsx"));
const Nis2PenalitesSanctions = lazy(() => import("./pages/articles/Nis2PenalitesSanctions.tsx"));
const CartographieSiNis2 = lazy(() => import("./pages/articles/CartographieSiNis2.tsx"));
const NotificationIncident72h = lazy(() => import("./pages/articles/NotificationIncident72h.tsx"));
const GouvernanceCyberDirigeants = lazy(() => import("./pages/articles/GouvernanceCyberDirigeants.tsx"));
const EvaluationRisqueFournisseurs = lazy(() => import("./pages/articles/EvaluationRisqueFournisseurs.tsx"));
const Nis2SecteurEducation = lazy(() => import("./pages/articles/Nis2SecteurEducation.tsx"));
const Nis2TestsSecurite = lazy(() => import("./pages/articles/Nis2TestsSecurite.tsx"));

// Cities
const CyberSecuriteParis = lazy(() => import("./pages/cities/CyberSecuriteParis.tsx"));
const CyberSecuriteLyon = lazy(() => import("./pages/cities/CyberSecuriteLyon.tsx"));
const CyberSecuriteMarseille = lazy(() => import("./pages/cities/CyberSecuriteMarseille.tsx"));
const CyberSecuriteBordeaux = lazy(() => import("./pages/cities/CyberSecuriteBordeaux.tsx"));
const CyberSecuriteToulouse = lazy(() => import("./pages/cities/CyberSecuriteToulouse.tsx"));
const CyberSecuriteNantes = lazy(() => import("./pages/cities/CyberSecuriteNantes.tsx"));
const CyberSecuriteLille = lazy(() => import("./pages/cities/CyberSecuriteLille.tsx"));
const CyberSecuriteNice = lazy(() => import("./pages/cities/CyberSecuriteNice.tsx"));
const CyberSecuriteRennes = lazy(() => import("./pages/cities/CyberSecuriteRennes.tsx"));
const CyberSecuriteStrasbourg = lazy(() => import("./pages/cities/CyberSecuriteStrasbourg.tsx"));
const CyberSecuriteMontpellier = lazy(() => import("./pages/cities/CyberSecuriteMontpellier.tsx"));
const CyberSecuriteGrenoble = lazy(() => import("./pages/cities/CyberSecuriteGrenoble.tsx"));
const CyberSecuriteRouen = lazy(() => import("./pages/cities/CyberSecuriteRouen.tsx"));
const CyberSecuriteClermontFerrand = lazy(() => import("./pages/cities/CyberSecuriteClermontFerrand.tsx"));
const CyberSecuriteToulon = lazy(() => import("./pages/cities/CyberSecuriteToulon.tsx"));
const CyberSecuriteAixEnProvence = lazy(() => import("./pages/cities/CyberSecuriteAixEnProvence.tsx"));
const CyberSecuriteBrest = lazy(() => import("./pages/cities/CyberSecuriteBrest.tsx"));
const CyberSecuriteDijon = lazy(() => import("./pages/cities/CyberSecuriteDijon.tsx"));
const CyberSecuriteAngers = lazy(() => import("./pages/cities/CyberSecuriteAngers.tsx"));
const CyberSecuriteSaintEtienne = lazy(() => import("./pages/cities/CyberSecuriteSaintEtienne.tsx"));
const CyberSecuriteLeMans = lazy(() => import("./pages/cities/CyberSecuriteLeMans.tsx"));
const CyberSecuriteAmiens = lazy(() => import("./pages/cities/CyberSecuriteAmiens.tsx"));
const CyberSecuriteTours = lazy(() => import("./pages/cities/CyberSecuriteTours.tsx"));
const CyberSecuriteLimoges = lazy(() => import("./pages/cities/CyberSecuriteLimoges.tsx"));
const CyberSecuriteMetz = lazy(() => import("./pages/cities/CyberSecuriteMetz.tsx"));
const CyberSecuriteNancy = lazy(() => import("./pages/cities/CyberSecuriteNancy.tsx"));
const CyberSecuriteCaen = lazy(() => import("./pages/cities/CyberSecuriteCaen.tsx"));
const CyberSecuriteOrleans = lazy(() => import("./pages/cities/CyberSecuriteOrleans.tsx"));
const CyberSecuriteReims = lazy(() => import("./pages/cities/CyberSecuriteReims.tsx"));
const CyberSecuritePau = lazy(() => import("./pages/cities/CyberSecuritePau.tsx"));
const CyberSecuritePerpignan = lazy(() => import("./pages/cities/CyberSecuritePerpignan.tsx"));
const CyberSecuriteBesancon = lazy(() => import("./pages/cities/CyberSecuriteBesancon.tsx"));
const CyberSecuriteAvignon = lazy(() => import("./pages/cities/CyberSecuriteAvignon.tsx"));
const CyberSecuriteLaRochelle = lazy(() => import("./pages/cities/CyberSecuriteLaRochelle.tsx"));
const CyberSecuriteNimes = lazy(() => import("./pages/cities/CyberSecuriteNimes.tsx"));
const CyberSecuriteAnnecy = lazy(() => import("./pages/cities/CyberSecuriteAnnecy.tsx"));
const CyberSecuriteColmar = lazy(() => import("./pages/cities/CyberSecuriteColmar.tsx"));
const CyberSecuriteBayonne = lazy(() => import("./pages/cities/CyberSecuriteBayonne.tsx"));
const CyberSecuriteValence = lazy(() => import("./pages/cities/CyberSecuriteValence.tsx"));
const CyberSecuritePoitiers = lazy(() => import("./pages/cities/CyberSecuritePoitiers.tsx"));
const CyberSecuriteDunkerque = lazy(() => import("./pages/cities/CyberSecuriteDunkerque.tsx"));
const CyberSecuriteTroyes = lazy(() => import("./pages/cities/CyberSecuriteTroyes.tsx"));
const CyberSecuriteMulhouse = lazy(() => import("./pages/cities/CyberSecuriteMulhouse.tsx"));
const CyberSecuriteChambery = lazy(() => import("./pages/cities/CyberSecuriteChambery.tsx"));
const CyberSecuriteNiort = lazy(() => import("./pages/cities/CyberSecuriteNiort.tsx"));
const CyberSecuriteQuimper = lazy(() => import("./pages/cities/CyberSecuriteQuimper.tsx"));
const CyberSecuriteLorient = lazy(() => import("./pages/cities/CyberSecuriteLorient.tsx"));
const CyberSecuriteVannes = lazy(() => import("./pages/cities/CyberSecuriteVannes.tsx"));
const CyberSecuriteSaintNazaire = lazy(() => import("./pages/cities/CyberSecuriteSaintNazaire.tsx"));
const CyberSecuriteCalais = lazy(() => import("./pages/cities/CyberSecuriteCalais.tsx"));
const CyberSecuriteValenciennes = lazy(() => import("./pages/cities/CyberSecuriteValenciennes.tsx"));
const CyberSecuriteArras = lazy(() => import("./pages/cities/CyberSecuriteArras.tsx"));
const CyberSecuriteBourges = lazy(() => import("./pages/cities/CyberSecuriteBourges.tsx"));
const CyberSecuriteChartres = lazy(() => import("./pages/cities/CyberSecuriteChartres.tsx"));
const CyberSecuriteCherbourg = lazy(() => import("./pages/cities/CyberSecuriteCherbourg.tsx"));
const CyberSecuriteLaval = lazy(() => import("./pages/cities/CyberSecuriteLaval.tsx"));
const CyberSecuriteCholet = lazy(() => import("./pages/cities/CyberSecuriteCholet.tsx"));
const CyberSecuriteAngouleme = lazy(() => import("./pages/cities/CyberSecuriteAngouleme.tsx"));
const CyberSecuritePerigueux = lazy(() => import("./pages/cities/CyberSecuritePerigueux.tsx"));
const CyberSecuriteTarbes = lazy(() => import("./pages/cities/CyberSecuriteTarbes.tsx"));
const CyberSecuriteAlbi = lazy(() => import("./pages/cities/CyberSecuriteAlbi.tsx"));
const CyberSecuriteBeziers = lazy(() => import("./pages/cities/CyberSecuriteBeziers.tsx"));
const CyberSecuriteCarcassonne = lazy(() => import("./pages/cities/CyberSecuriteCarcassonne.tsx"));
const CyberSecuriteNarbonne = lazy(() => import("./pages/cities/CyberSecuriteNarbonne.tsx"));
const CyberSecuriteAntibes = lazy(() => import("./pages/cities/CyberSecuriteAntibes.tsx"));
const CyberSecuriteCannes = lazy(() => import("./pages/cities/CyberSecuriteCannes.tsx"));
const CyberSecuriteFrejus = lazy(() => import("./pages/cities/CyberSecuriteFrejus.tsx"));
const CyberSecuriteAjaccio = lazy(() => import("./pages/cities/CyberSecuriteAjaccio.tsx"));
const CyberSecuriteBastia = lazy(() => import("./pages/cities/CyberSecuriteBastia.tsx"));
const CyberSecuriteBelfort = lazy(() => import("./pages/cities/CyberSecuriteBelfort.tsx"));
const CyberSecuriteAuxerre = lazy(() => import("./pages/cities/CyberSecuriteAuxerre.tsx"));
const CyberSecuriteThionville = lazy(() => import("./pages/cities/CyberSecuriteThionville.tsx"));
const CyberSecuriteEvreux = lazy(() => import("./pages/cities/CyberSecuriteEvreux.tsx"));
const CyberSecuriteVersailles = lazy(() => import("./pages/cities/CyberSecuriteVersailles.tsx"));
const CyberSecuriteCreteil = lazy(() => import("./pages/cities/CyberSecuriteCreteil.tsx"));
const CyberSecuriteNanterre = lazy(() => import("./pages/cities/CyberSecuriteNanterre.tsx"));
const CyberSecuriteBruxelles = lazy(() => import("./pages/cities/CyberSecuriteBruxelles.tsx"));
const CyberSecuriteLiege = lazy(() => import("./pages/cities/CyberSecuriteLiege.tsx"));
const CyberSecuriteNamur = lazy(() => import("./pages/cities/CyberSecuriteNamur.tsx"));
const CyberSecuriteCharleroi = lazy(() => import("./pages/cities/CyberSecuriteCharleroi.tsx"));
const CyberSecuriteMons = lazy(() => import("./pages/cities/CyberSecuriteMons.tsx"));
const CyberSecuriteGeneve = lazy(() => import("./pages/cities/CyberSecuriteGeneve.tsx"));
const CyberSecuriteLausanne = lazy(() => import("./pages/cities/CyberSecuriteLausanne.tsx"));
const CyberSecuriteFribourg = lazy(() => import("./pages/cities/CyberSecuriteFribourg.tsx"));
const CyberSecuriteNeuchatel = lazy(() => import("./pages/cities/CyberSecuriteNeuchatel.tsx"));
const CyberSecuriteLuxembourg = lazy(() => import("./pages/cities/CyberSecuriteLuxembourg.tsx"));
const CyberSecuriteEschSurAlzette = lazy(() => import("./pages/cities/CyberSecuriteEschSurAlzette.tsx"));
const CyberSecuriteMontreal = lazy(() => import("./pages/cities/CyberSecuriteMontreal.tsx"));
const CyberSecuriteQuebec = lazy(() => import("./pages/cities/CyberSecuriteQuebec.tsx"));
const CyberSecuriteGatineau = lazy(() => import("./pages/cities/CyberSecuriteGatineau.tsx"));
const CyberSecuriteSherbrooke = lazy(() => import("./pages/cities/CyberSecuriteSherbrooke.tsx"));
const CyberSecuriteMonaco = lazy(() => import("./pages/cities/CyberSecuriteMonaco.tsx"));
const CyberSecuriteBethune = lazy(() => import("./pages/cities/CyberSecuriteBethune.tsx"));
const CyberSecuriteLens = lazy(() => import("./pages/cities/CyberSecuriteLens.tsx"));
const CyberSecuritePasDeCalais = lazy(() => import("./pages/cities/CyberSecuritePasDeCalais.tsx"));
const CyberSecuriteIleDeFrance = lazy(() => import("./pages/cities/CyberSecuriteIleDeFrance.tsx"));
const CyberSecuriteBretagne = lazy(() => import("./pages/cities/CyberSecuriteBretagne.tsx"));
const CyberSecuriteNouvelleAquitaine = lazy(() => import("./pages/cities/CyberSecuriteNouvelleAquitaine.tsx"));
const CyberSecuriteOccitanie = lazy(() => import("./pages/cities/CyberSecuriteOccitanie.tsx"));
const CyberSecuriteNormandie = lazy(() => import("./pages/cities/CyberSecuriteNormandie.tsx"));
const CyberSecuriteGrandEst = lazy(() => import("./pages/cities/CyberSecuriteGrandEst.tsx"));
const CyberSecuriteAuvergneRhoneAlpes = lazy(() => import("./pages/cities/CyberSecuriteAuvergneRhoneAlpes.tsx"));
const CyberSecuritePaca = lazy(() => import("./pages/cities/CyberSecuritePaca.tsx"));
const CyberSecuritePaysDeLaLoire = lazy(() => import("./pages/cities/CyberSecuritePaysDeLaLoire.tsx"));
const CyberSecuriteCentreValDeLoire = lazy(() => import("./pages/cities/CyberSecuriteCentreValDeLoire.tsx"));
const CyberSecuriteBourgogneFrancheComte = lazy(() => import("./pages/cities/CyberSecuriteBourgogneFrancheComte.tsx"));
const CyberSecuriteGironde = lazy(() => import("./pages/cities/CyberSecuriteGironde.tsx"));
const CyberSecuriteIlleEtVilaine = lazy(() => import("./pages/cities/CyberSecuriteIlleEtVilaine.tsx"));
const CyberSecuriteRhone = lazy(() => import("./pages/cities/CyberSecuriteRhone.tsx"));
const CyberSecuriteNord = lazy(() => import("./pages/cities/CyberSecuriteNord.tsx"));
const CyberSecuriteHerault = lazy(() => import("./pages/cities/CyberSecuriteHerault.tsx"));
const CyberSecuriteIsere = lazy(() => import("./pages/cities/CyberSecuriteIsere.tsx"));
const CyberSecuriteHauteGaronne = lazy(() => import("./pages/cities/CyberSecuriteHauteGaronne.tsx"));
const CyberSecuriteBouchesduRhone = lazy(() => import("./pages/cities/CyberSecuriteBouchesduRhone.tsx"));
const CyberSecuriteLoireAtlantique = lazy(() => import("./pages/cities/CyberSecuriteLoireAtlantique.tsx"));
const CyberSecuriteMoselle = lazy(() => import("./pages/cities/CyberSecuriteMoselle.tsx"));
const CyberSecuriteSeineMaritime = lazy(() => import("./pages/cities/CyberSecuriteSeineMaritime.tsx"));
const CyberSecuriteBasRhin = lazy(() => import("./pages/cities/CyberSecuriteBasRhin.tsx"));
const CyberSecuriteAlpesMaritimes = lazy(() => import("./pages/cities/CyberSecuriteAlpesMaritimes.tsx"));
const CyberSecuriteVar = lazy(() => import("./pages/cities/CyberSecuriteVar.tsx"));
const CyberSecuriteFinistere = lazy(() => import("./pages/cities/CyberSecuriteFinistere.tsx"));
const CyberSecuritePuyDeDome = lazy(() => import("./pages/cities/CyberSecuritePuyDeDome.tsx"));
const CyberSecuriteDoubs = lazy(() => import("./pages/cities/CyberSecuriteDoubs.tsx"));
const CyberSecuriteMeurtheEtMoselle = lazy(() => import("./pages/cities/CyberSecuriteMeurtheEtMoselle.tsx"));
const CyberSecuriteMaineEtLoire = lazy(() => import("./pages/cities/CyberSecuriteMaineEtLoire.tsx"));
const CyberSecuriteYvelines = lazy(() => import("./pages/cities/CyberSecuriteYvelines.tsx"));
const CyberSecuriteVendee = lazy(() => import("./pages/cities/CyberSecuriteVendee.tsx"));
const CyberSecuriteHautRhin = lazy(() => import("./pages/cities/CyberSecuriteHautRhin.tsx"));
const CyberSecuriteCoteDor = lazy(() => import("./pages/cities/CyberSecuriteCoteDor.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/actualites/directive-nis2" element={<DirectiveNis2 />} />
            <Route path="/actualites/mise-en-conformite-nis2-guide-pme" element={<MiseEnConformiteNis2 />} />
            <Route path="/actualites/audit-rgpd-entreprises" element={<AuditRgpd />} />
            <Route path="/actualites/nis2-vs-rgpd-differences" element={<Nis2VsRgpd />} />
            <Route path="/actualites/cybersecurite-pme-guide" element={<CybersecuritePme />} />
            <Route path="/actualites/nis2-secteur-sante" element={<Nis2SecteurSante />} />
            <Route path="/actualites/nis2-secteur-energie" element={<Nis2SecteurEnergie />} />
            <Route path="/actualites/rssi-externalise-guide" element={<RssiExternalise />} />
            <Route path="/actualites/plan-continuite-activite-cybersecurite" element={<PlanContinuiteActivite />} />
            <Route path="/actualites/sensibilisation-cybersecurite-entreprise" element={<SensibilisationCybersecurite />} />
            <Route path="/actualites/phishing-protection-entreprise" element={<PhishingProtection />} />
            <Route path="/actualites/ransomware-pme-protection" element={<RansomwarePme />} />
            <Route path="/actualites/audit-cybersecurite-entreprise" element={<AuditCybersecurite />} />
            <Route path="/actualites/dora-reglementation-secteur-financier" element={<DoraReglementation />} />
            <Route path="/actualites/iso-27001-certification-guide" element={<Iso27001Certification />} />
            <Route path="/actualites/securite-cloud-pme-guide" element={<SecuriteCloudPme />} />
            <Route path="/actualites/cyber-resilience-act-guide" element={<CyberResilienceAct />} />
            <Route path="/actualites/cyber-assurance-pme-guide" element={<CyberAssurancePme />} />
            <Route path="/actualites/directive-cer-resilience-entites-critiques" element={<DirectiveCer />} />
            <Route path="/actualites/ebios-rm-methode-analyse-risques" element={<EbiosRmMethode />} />
            <Route path="/actualites/zero-trust-mfa-pme-guide" element={<ZeroTrustMfaPme />} />
            <Route path="/actualites/sauvegardes-3-2-1-pra-pca-pme" element={<SauvegardesPraPme />} />
            <Route path="/actualites/soc-manage-siem-pme-guide" element={<SocManageSiemPme />} />
            <Route path="/actualites/pentest-test-intrusion-guide" element={<PentestTestIntrusion />} />
            <Route path="/actualites/ia-generative-risques-cybersecurite-entreprise" element={<IaGenerativeRisquesCyber />} />
            <Route path="/actualites/securite-microsoft-365-entreprise-guide" element={<SecuriteMicrosoft365 />} />
            <Route path="/actualites/iam-gestion-identites-acces-pme" element={<IamGestionIdentitesPme />} />
            <Route path="/actualites/hds-hebergement-donnees-sante-certification" element={<HdsHebergementDonneesSante />} />
            <Route path="/actualites/budget-cybersecurite-pme-2026" element={<BudgetCybersecuritePme />} />
            <Route path="/actualites/red-team-blue-team-exercice-securite" element={<RedTeamBlueTeam />} />
            <Route path="/actualites/threat-intelligence-cti-entreprise" element={<ThreatIntelligenceCti />} />
            <Route path="/actualites/gestion-crise-cyber-plan-communication" element={<GestionCriseCyber />} />
            <Route path="/actualites/securite-chaine-approvisionnement-risques-tiers" element={<SecuriteChaineApprovisionnement />} />
            <Route path="/actualites/sanctions-cnil-rgpd-bilan-2025-2026" element={<SanctionsCnil />} />
            <Route path="/actualites/registre-traitements-rgpd-modele-guide" element={<RegistreTraitements />} />
            <Route path="/actualites/nis2-sous-traitants-supply-chain-obligations" element={<Nis2SousTraitants />} />
            <Route path="/actualites/violation-donnees-notification-cnil-72h" element={<ViolationDonneesNotification />} />
            <Route path="/actualites/pssi-politique-securite-si-guide-pme" element={<PssiGuide />} />
            <Route path="/actualites/dpo-externalise-missions-obligations-rgpd" element={<DpoObligations />} />
            <Route path="/actualites/nis2-secteur-transport-logistique-obligations" element={<Nis2Transport />} />
            <Route path="/actualites/questions-poser-avant-audit-cybersecurite" element={<QuestionsAuditCybersecurite />} />
            <Route path="/actualites/rapport-audit-cybersecurite-contenu" element={<RapportAuditContenu />} />
            <Route path="/actualites/duree-audit-cybersecurite-combien-de-temps" element={<DureeAuditCybersecurite />} />
            <Route path="/actualites/cybersecurite-pme-sous-traitante-industrie" element={<CyberPMESousTraitante />} />
            <Route path="/actualites/aipd-analyse-impact-protection-donnees-rgpd" element={<AipdRgpdObligatoire />} />
            <Route path="/actualites/politique-mots-de-passe-entreprise-cnil-anssi" element={<PolitiqueMdpEntreprise />} />
            <Route path="/actualites/nis2-secteur-industriel-fabricants-obligations" element={<Nis2SecteurIndustriel />} />
            <Route path="/actualites/registre-traitements-rgpd-pme-comment-faire" element={<RegistreTraitementsRgpdPme />} />
            <Route path="/actualites/transposition-nis2-france-calendrier-obligations" element={<Nis2TranspositionFrance />} />
            <Route path="/actualites/nis2-secteur-bancaire-fintech" element={<Nis2SecteurBancaire />} />
            <Route path="/actualites/cybersecurite-collectivites-territoriales-mairies" element={<CybersecuriteCollectivites />} />
            <Route path="/actualites/cybersecurite-collectivites-territoriales-mairies" element={<CybersecuriteCollectivites />} />
            <Route path="/actualites/sanctions-nis2-amendes-dirigeants" element={<Nis2PenalitesSanctions />} />
            <Route path="/actualites/cartographie-si-nis2-methode-anssi" element={<CartographieSiNis2 />} />
            <Route path="/actualites/notification-incident-nis2-24h-72h" element={<NotificationIncident72h />} />
            <Route path="/actualites/responsabilite-dirigeants-cybersecurite-nis2-rgpd" element={<GouvernanceCyberDirigeants />} />
            <Route path="/actualites/evaluation-risque-fournisseurs-nis2-supply-chain" element={<EvaluationRisqueFournisseurs />} />
            <Route path="/actualites/nis2-enseignement-superieur-universites" element={<Nis2SecteurEducation />} />
            <Route path="/actualites/tests-securite-nis2-pentest-frequence" element={<Nis2TestsSecurite />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Cities */}
            <Route path="/cybersecurite-paris" element={<CyberSecuriteParis />} />
            <Route path="/cybersecurite-lyon" element={<CyberSecuriteLyon />} />
            <Route path="/cybersecurite-marseille" element={<CyberSecuriteMarseille />} />
            <Route path="/cybersecurite-bordeaux" element={<CyberSecuriteBordeaux />} />
            <Route path="/cybersecurite-toulouse" element={<CyberSecuriteToulouse />} />
            <Route path="/cybersecurite-nantes" element={<CyberSecuriteNantes />} />
            <Route path="/cybersecurite-lille" element={<CyberSecuriteLille />} />
            <Route path="/cybersecurite-nice" element={<CyberSecuriteNice />} />
            <Route path="/cybersecurite-rennes" element={<CyberSecuriteRennes />} />
            <Route path="/cybersecurite-strasbourg" element={<CyberSecuriteStrasbourg />} />
            <Route path="/cybersecurite-montpellier" element={<CyberSecuriteMontpellier />} />
            <Route path="/cybersecurite-grenoble" element={<CyberSecuriteGrenoble />} />
            <Route path="/cybersecurite-rouen" element={<CyberSecuriteRouen />} />
            <Route path="/cybersecurite-clermont-ferrand" element={<CyberSecuriteClermontFerrand />} />
            <Route path="/cybersecurite-toulon" element={<CyberSecuriteToulon />} />
            <Route path="/cybersecurite-aix-en-provence" element={<CyberSecuriteAixEnProvence />} />
            <Route path="/cybersecurite-brest" element={<CyberSecuriteBrest />} />
            <Route path="/cybersecurite-dijon" element={<CyberSecuriteDijon />} />
            <Route path="/cybersecurite-angers" element={<CyberSecuriteAngers />} />
            <Route path="/cybersecurite-saint-etienne" element={<CyberSecuriteSaintEtienne />} />
            <Route path="/cybersecurite-le-mans" element={<CyberSecuriteLeMans />} />
            <Route path="/cybersecurite-amiens" element={<CyberSecuriteAmiens />} />
            <Route path="/cybersecurite-tours" element={<CyberSecuriteTours />} />
            <Route path="/cybersecurite-limoges" element={<CyberSecuriteLimoges />} />
            <Route path="/cybersecurite-metz" element={<CyberSecuriteMetz />} />
            <Route path="/cybersecurite-nancy" element={<CyberSecuriteNancy />} />
            <Route path="/cybersecurite-caen" element={<CyberSecuriteCaen />} />
            <Route path="/cybersecurite-orleans" element={<CyberSecuriteOrleans />} />
            <Route path="/cybersecurite-reims" element={<CyberSecuriteReims />} />
            <Route path="/cybersecurite-pau" element={<CyberSecuritePau />} />
            <Route path="/cybersecurite-perpignan" element={<CyberSecuritePerpignan />} />
            <Route path="/cybersecurite-besancon" element={<CyberSecuriteBesancon />} />
            <Route path="/cybersecurite-avignon" element={<CyberSecuriteAvignon />} />
            <Route path="/cybersecurite-la-rochelle" element={<CyberSecuriteLaRochelle />} />
            <Route path="/cybersecurite-nimes" element={<CyberSecuriteNimes />} />
            <Route path="/cybersecurite-annecy" element={<CyberSecuriteAnnecy />} />
            <Route path="/cybersecurite-colmar" element={<CyberSecuriteColmar />} />
            <Route path="/cybersecurite-bayonne" element={<CyberSecuriteBayonne />} />
            <Route path="/cybersecurite-valence" element={<CyberSecuriteValence />} />
            <Route path="/cybersecurite-poitiers" element={<CyberSecuritePoitiers />} />
            <Route path="/cybersecurite-dunkerque" element={<CyberSecuriteDunkerque />} />
            <Route path="/cybersecurite-troyes" element={<CyberSecuriteTroyes />} />
            <Route path="/cybersecurite-mulhouse" element={<CyberSecuriteMulhouse />} />
            <Route path="/cybersecurite-chambery" element={<CyberSecuriteChambery />} />
            <Route path="/cybersecurite-niort" element={<CyberSecuriteNiort />} />
            <Route path="/cybersecurite-quimper" element={<CyberSecuriteQuimper />} />
            <Route path="/cybersecurite-lorient" element={<CyberSecuriteLorient />} />
            <Route path="/cybersecurite-vannes" element={<CyberSecuriteVannes />} />
            <Route path="/cybersecurite-saint-nazaire" element={<CyberSecuriteSaintNazaire />} />
            <Route path="/cybersecurite-calais" element={<CyberSecuriteCalais />} />
            <Route path="/cybersecurite-valenciennes" element={<CyberSecuriteValenciennes />} />
            <Route path="/cybersecurite-arras" element={<CyberSecuriteArras />} />
            <Route path="/cybersecurite-bourges" element={<CyberSecuriteBourges />} />
            <Route path="/cybersecurite-chartres" element={<CyberSecuriteChartres />} />
            <Route path="/cybersecurite-cherbourg" element={<CyberSecuriteCherbourg />} />
            <Route path="/cybersecurite-laval" element={<CyberSecuriteLaval />} />
            <Route path="/cybersecurite-cholet" element={<CyberSecuriteCholet />} />
            <Route path="/cybersecurite-angouleme" element={<CyberSecuriteAngouleme />} />
            <Route path="/cybersecurite-perigueux" element={<CyberSecuritePerigueux />} />
            <Route path="/cybersecurite-tarbes" element={<CyberSecuriteTarbes />} />
            <Route path="/cybersecurite-albi" element={<CyberSecuriteAlbi />} />
            <Route path="/cybersecurite-beziers" element={<CyberSecuriteBeziers />} />
            <Route path="/cybersecurite-carcassonne" element={<CyberSecuriteCarcassonne />} />
            <Route path="/cybersecurite-narbonne" element={<CyberSecuriteNarbonne />} />
            <Route path="/cybersecurite-antibes" element={<CyberSecuriteAntibes />} />
            <Route path="/cybersecurite-cannes" element={<CyberSecuriteCannes />} />
            <Route path="/cybersecurite-frejus" element={<CyberSecuriteFrejus />} />
            <Route path="/cybersecurite-ajaccio" element={<CyberSecuriteAjaccio />} />
            <Route path="/cybersecurite-bastia" element={<CyberSecuriteBastia />} />
            <Route path="/cybersecurite-belfort" element={<CyberSecuriteBelfort />} />
            <Route path="/cybersecurite-auxerre" element={<CyberSecuriteAuxerre />} />
            <Route path="/cybersecurite-thionville" element={<CyberSecuriteThionville />} />
            <Route path="/cybersecurite-evreux" element={<CyberSecuriteEvreux />} />
            <Route path="/cybersecurite-versailles" element={<CyberSecuriteVersailles />} />
            <Route path="/cybersecurite-creteil" element={<CyberSecuriteCreteil />} />
            <Route path="/cybersecurite-nanterre" element={<CyberSecuriteNanterre />} />
            <Route path="/cybersecurite-bruxelles" element={<CyberSecuriteBruxelles />} />
            <Route path="/cybersecurite-liege" element={<CyberSecuriteLiege />} />
            <Route path="/cybersecurite-namur" element={<CyberSecuriteNamur />} />
            <Route path="/cybersecurite-charleroi" element={<CyberSecuriteCharleroi />} />
            <Route path="/cybersecurite-mons" element={<CyberSecuriteMons />} />
            <Route path="/cybersecurite-geneve" element={<CyberSecuriteGeneve />} />
            <Route path="/cybersecurite-lausanne" element={<CyberSecuriteLausanne />} />
            <Route path="/cybersecurite-fribourg" element={<CyberSecuriteFribourg />} />
            <Route path="/cybersecurite-neuchatel" element={<CyberSecuriteNeuchatel />} />
            <Route path="/cybersecurite-luxembourg" element={<CyberSecuriteLuxembourg />} />
            <Route path="/cybersecurite-esch-sur-alzette" element={<CyberSecuriteEschSurAlzette />} />
            <Route path="/cybersecurite-montreal" element={<CyberSecuriteMontreal />} />
            <Route path="/cybersecurite-quebec" element={<CyberSecuriteQuebec />} />
            <Route path="/cybersecurite-gatineau" element={<CyberSecuriteGatineau />} />
            <Route path="/cybersecurite-sherbrooke" element={<CyberSecuriteSherbrooke />} />
            <Route path="/cybersecurite-monaco" element={<CyberSecuriteMonaco />} />
            <Route path="/cybersecurite-bethune" element={<CyberSecuriteBethune />} />
            <Route path="/cybersecurite-lens" element={<CyberSecuriteLens />} />
            <Route path="/cybersecurite-pas-de-calais" element={<CyberSecuritePasDeCalais />} />
            <Route path="/cybersecurite-ile-de-france" element={<CyberSecuriteIleDeFrance />} />
            <Route path="/cybersecurite-bretagne" element={<CyberSecuriteBretagne />} />
            <Route path="/cybersecurite-nouvelle-aquitaine" element={<CyberSecuriteNouvelleAquitaine />} />
            <Route path="/cybersecurite-occitanie" element={<CyberSecuriteOccitanie />} />
            <Route path="/cybersecurite-normandie" element={<CyberSecuriteNormandie />} />
            <Route path="/cybersecurite-grand-est" element={<CyberSecuriteGrandEst />} />
            <Route path="/cybersecurite-auvergne-rhone-alpes" element={<CyberSecuriteAuvergneRhoneAlpes />} />
            <Route path="/cybersecurite-paca" element={<CyberSecuritePaca />} />
            <Route path="/cybersecurite-pays-de-la-loire" element={<CyberSecuritePaysDeLaLoire />} />
            <Route path="/cybersecurite-centre-val-de-loire" element={<CyberSecuriteCentreValDeLoire />} />
            <Route path="/cybersecurite-bourgogne-franche-comte" element={<CyberSecuriteBourgogneFrancheComte />} />
            <Route path="/cybersecurite-gironde" element={<CyberSecuriteGironde />} />
            <Route path="/cybersecurite-ille-et-vilaine" element={<CyberSecuriteIlleEtVilaine />} />
            <Route path="/cybersecurite-rhone" element={<CyberSecuriteRhone />} />
            <Route path="/cybersecurite-nord" element={<CyberSecuriteNord />} />
            <Route path="/cybersecurite-herault" element={<CyberSecuriteHerault />} />
            <Route path="/cybersecurite-isere" element={<CyberSecuriteIsere />} />
            <Route path="/cybersecurite-haute-garonne" element={<CyberSecuriteHauteGaronne />} />
            <Route path="/cybersecurite-bouches-du-rhone" element={<CyberSecuriteBouchesduRhone />} />
            <Route path="/cybersecurite-loire-atlantique" element={<CyberSecuriteLoireAtlantique />} />
            <Route path="/cybersecurite-moselle" element={<CyberSecuriteMoselle />} />
            <Route path="/cybersecurite-seine-maritime" element={<CyberSecuriteSeineMaritime />} />
            <Route path="/cybersecurite-bas-rhin" element={<CyberSecuriteBasRhin />} />
            <Route path="/cybersecurite-alpes-maritimes" element={<CyberSecuriteAlpesMaritimes />} />
            <Route path="/cybersecurite-var" element={<CyberSecuriteVar />} />
            <Route path="/cybersecurite-finistere" element={<CyberSecuriteFinistere />} />
            <Route path="/cybersecurite-puy-de-dome" element={<CyberSecuritePuyDeDome />} />
            <Route path="/cybersecurite-doubs" element={<CyberSecuriteDoubs />} />
            <Route path="/cybersecurite-meurthe-et-moselle" element={<CyberSecuriteMeurtheEtMoselle />} />
            <Route path="/cybersecurite-maine-et-loire" element={<CyberSecuriteMaineEtLoire />} />
            <Route path="/cybersecurite-yvelines" element={<CyberSecuriteYvelines />} />
            <Route path="/cybersecurite-vendee" element={<CyberSecuriteVendee />} />
            <Route path="/cybersecurite-haut-rhin" element={<CyberSecuriteHautRhin />} />
            <Route path="/cybersecurite-cote-dor" element={<CyberSecuriteCoteDor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
