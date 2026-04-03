import { Calendar, X } from "lucide-react";
import { useState } from "react";

const AuditBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="font-medium">
            🎯 Audit cybersécurité gratuit de 15 min — Identifiez vos risques sans engagement
          </span>
          <a
            href="https://calendly.com/many-cyberconform/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 rounded-md bg-primary-foreground/20 px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary-foreground/30"
          >
            Réserver maintenant
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-md p-1 transition-colors hover:bg-primary-foreground/20"
          aria-label="Fermer le bandeau"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AuditBanner;
