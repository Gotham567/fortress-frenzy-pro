import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cyberconform-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[100] md:bottom-4 md:left-4 md:right-auto md:max-w-md animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="rounded-t-2xl md:rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary shrink-0" />
            <h3 className="text-sm font-bold text-foreground">Gestion des cookies</h3>
          </div>
          <button
            onClick={refuse}
            aria-label="Fermer sans accepter"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-5">
          Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic
          et vous proposer des contenus personnalisés. Conformément au RGPD, votre consentement
          est requis pour les cookies non essentiels.
        </p>
        <div className="flex gap-3">
          <button
            onClick={refuse}
            className="flex-1 rounded-lg border border-border px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
