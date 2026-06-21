import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Actualites from "./pages/Actualites.tsx";
import DirectiveNis2 from "./pages/articles/DirectiveNis2.tsx";
import MiseEnConformiteNis2 from "./pages/articles/MiseEnConformiteNis2.tsx";
import AuditRgpd from "./pages/articles/AuditRgpd.tsx";
import Nis2VsRgpd from "./pages/articles/Nis2VsRgpd.tsx";
import CybersecuritePme from "./pages/articles/CybersecuritePme.tsx";
import Nis2SecteurSante from "./pages/articles/Nis2SecteurSante.tsx";
import Nis2SecteurEnergie from "./pages/articles/Nis2SecteurEnergie.tsx";
import RssiExternalise from "./pages/articles/RssiExternalise.tsx";
import PlanContinuiteActivite from "./pages/articles/PlanContinuiteActivite.tsx";
import SensibilisationCybersecurite from "./pages/articles/SensibilisationCybersecurite.tsx";
import PhishingProtection from "./pages/articles/PhishingProtection.tsx";
import RansomwarePme from "./pages/articles/RansomwarePme.tsx";
import AuditCybersecurite from "./pages/articles/AuditCybersecurite.tsx";
import DoraReglementation from "./pages/articles/DoraReglementation.tsx";
import Iso27001Certification from "./pages/articles/Iso27001Certification.tsx";
import SecuriteCloudPme from "./pages/articles/SecuriteCloudPme.tsx";
import CyberResilienceAct from "./pages/articles/CyberResilienceAct.tsx";
import CyberAssurancePme from "./pages/articles/CyberAssurancePme.tsx";
import DirectiveCer from "./pages/articles/DirectiveCer.tsx";
import EbiosRmMethode from "./pages/articles/EbiosRmMethode.tsx";
import ZeroTrustMfaPme from "./pages/articles/ZeroTrustMfaPme.tsx";
import SauvegardesPraPme from "./pages/articles/SauvegardesPraPme.tsx";
import SocManageSiemPme from "./pages/articles/SocManageSiemPme.tsx";
import PentestTestIntrusion from "./pages/articles/PentestTestIntrusion.tsx";
import IaGenerativeRisquesCyber from "./pages/articles/IaGenerativeRisquesCyber.tsx";
import SecuriteMicrosoft365 from "./pages/articles/SecuriteMicrosoft365.tsx";
import IamGestionIdentitesPme from "./pages/articles/IamGestionIdentitesPme.tsx";
import HdsHebergementDonneesSante from "./pages/articles/HdsHebergementDonneesSante.tsx";
import CyberSecuriteMulhouse from "./pages/cities/CyberSecuriteMulhouse.tsx";
import CyberSecuriteChambery from "./pages/cities/CyberSecuriteChambery.tsx";
import CyberSecuriteNiort from "./pages/cities/CyberSecuriteNiort.tsx";
import CyberSecuriteQuimper from "./pages/cities/CyberSecuriteQuimper.tsx";
import CyberSecuriteLorient from "./pages/cities/CyberSecuriteLorient.tsx";
import CyberSecuriteVannes from "./pages/cities/CyberSecuriteVannes.tsx";
import CyberSecuriteSaintNazaire from "./pages/cities/CyberSecuriteSaintNazaire.tsx";
import CyberSecuriteCalais from "./pages/cities/CyberSecuriteCalais.tsx";
import CyberSecuriteValenciennes from "./pages/cities/CyberSecuriteValenciennes.tsx";
import CyberSecuriteArras from "./pages/cities/CyberSecuriteArras.tsx";
import CyberSecuriteBourges from "./pages/cities/CyberSecuriteBourges.tsx";
import CyberSecuriteChartres from "./pages/cities/CyberSecuriteChartres.tsx";
import CyberSecuriteCherbourg from "./pages/cities/CyberSecuriteCherbourg.tsx";
import CyberSecuriteLaval from "./pages/cities/CyberSecuriteLaval.tsx";
import CyberSecuriteCholet from "./pages/cities/CyberSecuriteCholet.tsx";
import CyberSecuriteAngouleme from "./pages/cities/CyberSecuriteAngouleme.tsx";
import CyberSecuritePerigueux from "./pages/cities/CyberSecuritePerigueux.tsx";
import CyberSecuriteTarbes from "./pages/cities/CyberSecuriteTarbes.tsx";
import CyberSecuriteAlbi from "./pages/cities/CyberSecuriteAlbi.tsx";
import CyberSecuriteBeziers from "./pages/cities/CyberSecuriteBeziers.tsx";
import CyberSecuriteCarcassonne from "./pages/cities/CyberSecuriteCarcassonne.tsx";
import CyberSecuriteNarbonne from "./pages/cities/CyberSecuriteNarbonne.tsx";
import CyberSecuriteAntibes from "./pages/cities/CyberSecuriteAntibes.tsx";
import CyberSecuriteCannes from "./pages/cities/CyberSecuriteCannes.tsx";
import CyberSecuriteFrejus from "./pages/cities/CyberSecuriteFrejus.tsx";
import CyberSecuriteAjaccio from "./pages/cities/CyberSecuriteAjaccio.tsx";
import CyberSecuriteBastia from "./pages/cities/CyberSecuriteBastia.tsx";
import CyberSecuriteBelfort from "./pages/cities/CyberSecuriteBelfort.tsx";
import CyberSecuriteAuxerre from "./pages/cities/CyberSecuriteAuxerre.tsx";
import CyberSecuriteThionville from "./pages/cities/CyberSecuriteThionville.tsx";
import CyberSecuriteEvreux from "./pages/cities/CyberSecuriteEvreux.tsx";
import CyberSecuriteVersailles from "./pages/cities/CyberSecuriteVersailles.tsx";
import CyberSecuriteCreteil from "./pages/cities/CyberSecuriteCreteil.tsx";
import CyberSecuriteNanterre from "./pages/cities/CyberSecuriteNanterre.tsx";
import CyberSecuriteToulon from "./pages/cities/CyberSecuriteToulon.tsx";
import CyberSecuriteAixEnProvence from "./pages/cities/CyberSecuriteAixEnProvence.tsx";
import CyberSecuriteBrest from "./pages/cities/CyberSecuriteBrest.tsx";
import CyberSecuriteDijon from "./pages/cities/CyberSecuriteDijon.tsx";
import CyberSecuriteAngers from "./pages/cities/CyberSecuriteAngers.tsx";
import CyberSecuriteSaintEtienne from "./pages/cities/CyberSecuriteSaintEtienne.tsx";
import CyberSecuriteLeMans from "./pages/cities/CyberSecuriteLeMans.tsx";
import CyberSecuriteAmiens from "./pages/cities/CyberSecuriteAmiens.tsx";
import CyberSecuriteTours from "./pages/cities/CyberSecuriteTours.tsx";
import CyberSecuriteLimoges from "./pages/cities/CyberSecuriteLimoges.tsx";
import CyberSecuriteMetz from "./pages/cities/CyberSecuriteMetz.tsx";
import CyberSecuriteNancy from "./pages/cities/CyberSecuriteNancy.tsx";
import CyberSecuriteCaen from "./pages/cities/CyberSecuriteCaen.tsx";
import CyberSecuriteOrleans from "./pages/cities/CyberSecuriteOrleans.tsx";
import CyberSecuriteReims from "./pages/cities/CyberSecuriteReims.tsx";
import CyberSecuritePau from "./pages/cities/CyberSecuritePau.tsx";
import CyberSecuritePerpignan from "./pages/cities/CyberSecuritePerpignan.tsx";
import CyberSecuriteBesancon from "./pages/cities/CyberSecuriteBesancon.tsx";
import CyberSecuriteAvignon from "./pages/cities/CyberSecuriteAvignon.tsx";
import CyberSecuriteLaRochelle from "./pages/cities/CyberSecuriteLaRochelle.tsx";
import CyberSecuriteNimes from "./pages/cities/CyberSecuriteNimes.tsx";
import CyberSecuriteAnnecy from "./pages/cities/CyberSecuriteAnnecy.tsx";
import CyberSecuriteColmar from "./pages/cities/CyberSecuriteColmar.tsx";
import CyberSecuriteBayonne from "./pages/cities/CyberSecuriteBayonne.tsx";
import CyberSecuriteValence from "./pages/cities/CyberSecuriteValence.tsx";
import CyberSecuritePoitiers from "./pages/cities/CyberSecuritePoitiers.tsx";
import CyberSecuriteDunkerque from "./pages/cities/CyberSecuriteDunkerque.tsx";
import CyberSecuriteTroyes from "./pages/cities/CyberSecuriteTroyes.tsx";
import CyberSecuriteParis from "./pages/cities/CyberSecuriteParis.tsx";
import CyberSecuriteLyon from "./pages/cities/CyberSecuriteLyon.tsx";
import CyberSecuriteMarseille from "./pages/cities/CyberSecuriteMarseille.tsx";
import CyberSecuriteBordeaux from "./pages/cities/CyberSecuriteBordeaux.tsx";
import CyberSecuriteToulouse from "./pages/cities/CyberSecuriteToulouse.tsx";
import CyberSecuriteNantes from "./pages/cities/CyberSecuriteNantes.tsx";
import CyberSecuriteLille from "./pages/cities/CyberSecuriteLille.tsx";
import CyberSecuriteNice from "./pages/cities/CyberSecuriteNice.tsx";
import CyberSecuriteRennes from "./pages/cities/CyberSecuriteRennes.tsx";
import CyberSecuriteStrasbourg from "./pages/cities/CyberSecuriteStrasbourg.tsx";
import CyberSecuriteMontpellier from "./pages/cities/CyberSecuriteMontpellier.tsx";
import CyberSecuriteGrenoble from "./pages/cities/CyberSecuriteGrenoble.tsx";
import CyberSecuriteRouen from "./pages/cities/CyberSecuriteRouen.tsx";
import CyberSecuriteClermontFerrand from "./pages/cities/CyberSecuriteClermontFerrand.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import NotFound from "./pages/NotFound.tsx";
import BudgetCybersecuritePme from "./pages/articles/BudgetCybersecuritePme.tsx";
import RedTeamBlueTeam from "./pages/articles/RedTeamBlueTeam.tsx";
import ThreatIntelligenceCti from "./pages/articles/ThreatIntelligenceCti.tsx";
import GestionCriseCyber from "./pages/articles/GestionCriseCyber.tsx";
import SecuriteChaineApprovisionnement from "./pages/articles/SecuriteChaineApprovisionnement.tsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/actualites" element={<Actualites />} />
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
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
