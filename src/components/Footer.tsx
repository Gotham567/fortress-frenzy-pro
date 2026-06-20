import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "Services", href: "#services" },
    { label: "Conformité NIS2", href: "#conformite" },
    { label: "Expertise", href: "#expertise" },
    { label: "Actualités", href: "/actualites" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ];

  const cityLinks = [
    { label: "Cybersécurité Paris", href: "/cybersecurite-paris" },
    { label: "Cybersécurité Lyon", href: "/cybersecurite-lyon" },
    { label: "Cybersécurité Marseille", href: "/cybersecurite-marseille" },
    { label: "Cybersécurité Bordeaux", href: "/cybersecurite-bordeaux" },
    { label: "Cybersécurité Toulouse", href: "/cybersecurite-toulouse" },
    { label: "Cybersécurité Nantes", href: "/cybersecurite-nantes" },
    { label: "Cybersécurité Lille", href: "/cybersecurite-lille" },
    { label: "Cybersécurité Nice", href: "/cybersecurite-nice" },
    { label: "Cybersécurité Rennes", href: "/cybersecurite-rennes" },
    { label: "Cybersécurité Strasbourg", href: "/cybersecurite-strasbourg" },
    { label: "Cybersécurité Montpellier", href: "/cybersecurite-montpellier" },
    { label: "Cybersécurité Grenoble", href: "/cybersecurite-grenoble" },
    { label: "Cybersécurité Rouen", href: "/cybersecurite-rouen" },
    { label: "Cybersécurité Clermont-Ferrand", href: "/cybersecurite-clermont-ferrand" },
  ];

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="mb-10 pb-10 border-b border-border">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4 text-center md:text-left">
            Nos implantations en France
          </p>
          <nav aria-label="Villes desservies" className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {cityLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link to="/" className="flex items-center gap-2" aria-label="CyberConform - Accueil">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-bold text-foreground">
              CYBER<span className="text-primary">CONFORM</span>
            </span>
          </Link>

          <nav aria-label="Liens du pied de page" className="flex flex-wrap justify-center gap-6">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.label} to={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={isHome ? link.href : `/${link.href}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} CyberConform. Tous droits réservés.
              <br />
              Cabinet français de cybersécurité à Paris.
            </p>
            <nav aria-label="Liens légaux" className="flex gap-4">
              {legalLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-xs text-muted-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
