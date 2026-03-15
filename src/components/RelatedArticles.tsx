import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Article {
  title: string;
  description: string;
  slug: string;
  tag: string;
}

const allArticles: Article[] = [
  {
    title: "Qu'est-ce que la directive NIS2 ?",
    description: "Tout savoir sur la directive européenne NIS2 : objectifs, périmètre et obligations.",
    slug: "directive-nis2",
    tag: "NIS2",
  },
  {
    title: "Mise en conformité NIS2 : guide PME",
    description: "Guide pratique pour la mise en conformité NIS2 des PME : étapes, budget et outils.",
    slug: "mise-en-conformite-nis2-guide-pme",
    tag: "NIS2",
  },
  {
    title: "Audit RGPD : méthodologie complète",
    description: "Comment réaliser un audit RGPD en entreprise : préparation, déroulement et livrables.",
    slug: "audit-rgpd-entreprises",
    tag: "RGPD",
  },
  {
    title: "NIS2 vs RGPD : quelles différences ?",
    description: "Analyse comparative NIS2 vs RGPD : périmètre, obligations et stratégie intégrée.",
    slug: "nis2-vs-rgpd-differences",
    tag: "Réglementation",
  },
];

interface RelatedArticlesProps {
  currentSlug: string;
}

const RelatedArticles = ({ currentSlug }: RelatedArticlesProps) => {
  const related = allArticles.filter((a) => a.slug !== currentSlug).slice(0, 3);

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Articles recommandés</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((article) => (
          <Link
            key={article.slug}
            to={`/actualites/${article.slug}`}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              {article.tag}
            </span>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.description}</p>
            <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
              Lire l'article
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
