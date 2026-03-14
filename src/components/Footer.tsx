import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-bold text-foreground">
              CYBER<span className="text-primary">CONFORM</span>
            </span>
          </div>

          <nav aria-label="Liens du pied de page" className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Services", href: "#services" },
              { label: "Conformité NIS2", href: "#conformite" },
              { label: "Expertise", href: "#expertise" },
              { label: "Actualités", href: "/actualites" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground text-center">
            © 2026 CyberConform. Tous droits réservés.
            <br />
            Cabinet français de cybersécurité à Paris.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
