import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Conformité NIS2", href: "#conformite" },
  { label: "Expertise", href: "#expertise" },
  { label: "Actualités", href: "/actualites" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl" role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2" aria-label="CyberConform - Accueil">
          <Shield className="h-7 w-7 text-primary" aria-hidden="true" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            CYBER<span className="text-primary">CONFORM</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary font-mono uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary font-mono uppercase tracking-wider"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Nous contacter
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
