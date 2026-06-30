import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page introuvable — CyberConform</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <Shield className="h-16 w-16 text-primary mb-6" aria-hidden="true" />
        <h1 className="text-6xl font-extrabold text-foreground mb-4 font-mono">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
};

export default NotFound;
