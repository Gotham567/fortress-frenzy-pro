import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";

interface ArticleLayoutProps {
  title: string;
  description: string;
  date: string;
  dateISO: string;
  readTime: string;
  tag: string;
  slug: string;
  children: React.ReactNode;
}

const ArticleLayout = ({ title, description, date, dateISO, readTime, tag, slug, children }: ArticleLayoutProps) => {
  const url = `https://www.cyberconform.fr/actualites/${slug}`;

  return (
    <>
      <Helmet>
        <title>{title} — CyberConform</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${title} — CyberConform`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="CyberConform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} — CyberConform`} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            datePublished: dateISO,
            dateModified: dateISO,
            author: {
              "@type": "Organization",
              name: "CyberConform",
              url: "https://www.cyberconform.fr",
            },
            publisher: {
              "@type": "Organization",
              name: "CyberConform",
              url: "https://www.cyberconform.fr",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <article className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/actualites"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Retour aux actualités
              </Link>

              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                {tag}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={dateISO}>{date}</time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {readTime} de lecture
                </span>
              </div>

              <div className="prose prose-invert prose-lg max-w-none
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
                [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:mb-6
                [&_ol]:text-muted-foreground [&_ol]:space-y-2 [&_ol]:mb-6
                [&_li]:leading-relaxed
                [&_strong]:text-foreground
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-primary/5 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8
                [&_blockquote_p]:text-foreground/80
                [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:overflow-x-auto [&_table]:block [&_table]:md:table
                [&_th]:border [&_th]:border-border [&_th]:bg-card [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-foreground [&_th]:text-sm [&_th]:font-semibold
                [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:text-muted-foreground [&_td]:text-sm
              ">
                {children}
              </div>

              <div className="mt-16 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Besoin d'accompagnement ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nos experts vous accompagnent dans votre mise en conformité NIS2 et RGPD.
                </p>
                <Link
                  to="/#contact"
                  className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                >
                  Demander un diagnostic gratuit
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ArticleLayout;
