import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingCTA = () => {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:left-auto md:right-6 md:w-auto animate-in slide-in-from-bottom-4 duration-300">
      <a
        href="https://calendly.com/many-cyberconform/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full md:w-auto rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
        aria-label="Réserver un audit cybersécurité gratuit"
      >
        📅 Audit gratuit — Réserver
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingCTA;
