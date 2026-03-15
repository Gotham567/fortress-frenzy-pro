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
