import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    slug: "directive-nis2",
    title: "Qu'est-ce que la directive NIS2 ?",
    excerpt:
      "Découvrez tout ce que vous devez savoir sur la directive européenne NIS2 : objectifs, périmètre, obligations et calendrier de mise en conformité pour les entreprises françaises.",
    date: "12 mars 2026",
    readTime: "15 min",
    tag: "NIS2",
  },
  {
    slug: "mise-en-conformite-nis2-guide-pme",
    title: "Mise en conformité NIS2 : guide complet pour les PME",
    excerpt:
      "Guide pratique et détaillé pour accompagner les PME dans leur mise en conformité avec la directive NIS2. Étapes, outils, budget et erreurs à éviter.",
    date: "10 mars 2026",
    readTime: "18 min",
    tag: "NIS2",
  },
  {
    slug: "audit-rgpd-entreprises",
    title: "Audit RGPD pour les entreprises",
    excerpt:
      "Méthodologie complète pour réaliser un audit RGPD en entreprise : préparation, déroulement, livrables et plan d'action pour garantir la conformité de vos traitements de données.",
    date: "8 mars 2026",
    readTime: "16 min",
    tag: "RGPD",
  },
  {
    slug: "nis2-vs-rgpd-differences",
    title: "NIS2 vs RGPD : quelles différences ?",
    excerpt:
      "Analyse comparative approfondie entre la directive NIS2 et le RGPD. Comprenez les différences, complémentarités et comment gérer les deux réglementations simultanément.",
    date: "5 mars 2026",
    readTime: "14 min",
    tag: "Réglementation",
  },
];

const Actualites = () => {
  return (
    <>
      <Helmet>
        <title>Actualités cybersécurité & conformité NIS2 RGPD — CyberConform</title>
        <meta
          name="description"
          content="Articles experts sur la cybersécurité, la conformité NIS2 et le RGPD. Guides pratiques pour les PME : directive NIS2, audit RGPD, mise en conformité."
        />
        <link rel="canonical" href="https://www.cyberconform.fr/actualites" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <section className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                Ressources & Actualités
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Guides experts en{" "}
                <span className="text-primary">cybersécurité</span> & conformité
              </h1>
              <p className="text-lg text-muted-foreground">
                Articles de fond, guides pratiques et analyses réglementaires pour
                accompagner les PME dans leur mise en conformité NIS2 et RGPD.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/actualites/${article.slug}`}
                  className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary mb-4">
                    {article.tag}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Actualites;
