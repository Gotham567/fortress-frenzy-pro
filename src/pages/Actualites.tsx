import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    slug: "directive-cer-resilience-entites-critiques",
    title: "Directive CER : résilience des entités critiques, le pendant physique de NIS2",
    excerpt:
      "Comprendre la directive européenne CER : périmètre, obligations, articulation avec NIS2, sanctions et plan de mise en conformité pour les entités critiques en France.",
    date: "24 avril 2026",
    readTime: "15 min",
    tag: "Directive CER",
  },
  {
    slug: "cyber-resilience-act-guide",
    title: "Cyber Resilience Act (CRA) : guide complet pour éditeurs et fabricants",
    excerpt:
      "Périmètre, marquage CE cybersécurité, obligations sur les produits avec éléments numériques, sanctions et plan de mise en conformité d'ici décembre 2027.",
    date: "22 avril 2026",
    readTime: "16 min",
    tag: "Cyber Resilience Act",
  },
  {
    slug: "cyber-assurance-pme-guide",
    title: "Cyber-assurance pour PME : guide complet pour choisir et négocier sa police en 2026",
    excerpt:
      "Garanties, exclusions, prérequis techniques, prix moyens, gestion d'un sinistre cyber et conseils pour bien négocier votre contrat cyber-assurance.",
    date: "20 avril 2026",
    readTime: "15 min",
    tag: "Cyber-assurance",
  },
  {
    slug: "dora-reglementation-secteur-financier",
    title: "Règlement DORA : guide complet pour le secteur financier en 2026",
    excerpt:
      "Tout savoir sur DORA : périmètre, obligations, gestion des risques TIC, tests de résilience, sanctions et plan de mise en conformité pour banques, assurances et fintechs.",
    date: "18 avril 2026",
    readTime: "17 min",
    tag: "DORA",
  },
  {
    slug: "iso-27001-certification-guide",
    title: "Certification ISO 27001 : le guide complet pour les PME et ETI",
    excerpt:
      "Guide complet sur la certification ISO 27001 : objectifs, étapes, coûts, durée, livrables, lien avec NIS2 et RGPD. Méthodologie pour obtenir et maintenir votre certification SMSI.",
    date: "16 avril 2026",
    readTime: "18 min",
    tag: "ISO 27001",
  },
  {
    slug: "securite-cloud-pme-guide",
    title: "Sécurité du cloud pour PME : risques, bonnes pratiques et conformité 2026",
    excerpt:
      "Guide complet sur la sécurité du cloud pour les PME : risques, modèle de responsabilité partagée, bonnes pratiques Microsoft 365, Google Workspace, AWS, Azure, conformité NIS2 et RGPD.",
    date: "14 avril 2026",
    readTime: "16 min",
    tag: "Sécurité Cloud",
  },
  {
    slug: "audit-cybersecurite-entreprise",
    title: "Audit de cybersécurité : méthodologie complète et coûts 2026",
    excerpt:
      "Guide complet sur l'audit de cybersécurité en entreprise : types d'audits (organisationnel, technique, pentest), méthodologie ANSSI, livrables, coûts et conformité NIS2.",
    date: "10 avril 2026",
    readTime: "16 min",
    tag: "Audit cyber",
  },
  {
    slug: "ransomware-pme-protection",
    title: "Ransomware PME : prévention, réaction et reconstruction",
    excerpt:
      "Guide complet pour protéger votre PME contre les ransomwares : vecteurs d'attaque, mesures préventives, gestion de crise, négociation, reconstruction et conformité NIS2.",
    date: "6 avril 2026",
    readTime: "18 min",
    tag: "Ransomware",
  },
  {
    slug: "phishing-protection-entreprise",
    title: "Phishing en entreprise : guide complet de protection 2026",
    excerpt:
      "Comprendre, détecter et bloquer le phishing en entreprise : techniques d'attaque, solutions techniques (DMARC, SPF, DKIM), formation des collaborateurs et conformité NIS2.",
    date: "2 avril 2026",
    readTime: "17 min",
    tag: "Phishing",
  },
  {
    slug: "sensibilisation-cybersecurite-entreprise",
    title: "Sensibilisation à la cybersécurité en entreprise : programme complet",
    excerpt:
      "Guide complet pour mettre en place un programme de sensibilisation cybersécurité efficace : phishing simulé, formation par métier, indicateurs de performance et conformité NIS2.",
    date: "26 mars 2026",
    readTime: "15 min",
    tag: "Formation cyber",
  },
  {
    slug: "plan-continuite-activite-cybersecurite",
    title: "Plan de continuité d'activité (PCA) cybersécurité : guide complet",
    excerpt:
      "Guide complet sur le PCA/PRA cybersécurité : gestion de crise, sauvegardes immutables, conformité NIS2 et méthodologie pour garantir la résilience de votre entreprise.",
    date: "24 mars 2026",
    readTime: "16 min",
    tag: "Résilience cyber",
  },
  {
    slug: "rssi-externalise-guide",
    title: "RSSI externalisé : pourquoi et comment externaliser votre cybersécurité",
    excerpt:
      "Guide complet sur le RSSI externalisé (vCISO) : avantages, missions, coûts, critères de choix et ROI pour les PME et ETI soumises à NIS2.",
    date: "22 mars 2026",
    readTime: "18 min",
    tag: "RSSI externalisé",
  },
  {
    slug: "cybersecurite-pme-guide",
    title: "Cybersécurité des PME : le guide complet pour protéger votre entreprise",
    excerpt:
      "Guide complet de cybersécurité pour les PME : menaces principales, mesures de protection essentielles, budget, outils et plan d'action en 90 jours pour sécuriser votre entreprise.",
    date: "18 mars 2026",
    readTime: "17 min",
    tag: "Cybersécurité",
  },
  {
    slug: "nis2-secteur-sante",
    title: "NIS2 et secteur de la santé : obligations et mise en conformité",
    excerpt:
      "Guide complet sur l'application de la directive NIS2 au secteur de la santé : hôpitaux, cliniques, laboratoires et éditeurs de logiciels médicaux. Obligations, risques et plan d'action.",
    date: "16 mars 2026",
    readTime: "16 min",
    tag: "NIS2 Santé",
  },
  {
    slug: "nis2-secteur-energie",
    title: "NIS2 et secteur de l'énergie : enjeux et obligations de cybersécurité",
    excerpt:
      "Analyse complète de la directive NIS2 appliquée au secteur de l'énergie : électricité, gaz, pétrole, hydrogène. Obligations, risques OT/IT et plan de conformité.",
    date: "14 mars 2026",
    readTime: "15 min",
    tag: "NIS2 Énergie",
  },
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
