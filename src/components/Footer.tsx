import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-foreground">
              SENTINEL<span className="text-primary">CYBER</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 SentinelCyber. Tous droits réservés. Cabinet français de cybersécurité.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
