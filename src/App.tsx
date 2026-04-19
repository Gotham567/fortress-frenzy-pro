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
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import NotFound from "./pages/NotFound.tsx";
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
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
