import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, MapPin, Phone, CheckCircle2, ArrowRight, Building2, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface CityData {
  city: string;
  citySlug: string; // e.g. "paris"
  region: string;
  postalCode: string;
  intro: string;
  localContext: string;
  sectors: string[];
  neighborhoods: string[];
  faq: { q: string; a: string }[];
}

interface Props {
  data: CityData;
}

const services = [
  { title: "Audit de cybersécurité", desc: "Diagnostic complet selon les référentiels ANSSI et ISO 27001." },
  { title: "Mise en conformité NIS2", desc: "Accompagnement de bout en bout pour les PME et ETI concernées." },
  { title: "Test d'intrusion (Pentest)", desc: "Simulation d'attaques réalistes sur vos systèmes et applications." },
  { title: "Conformité RGPD", desc: "Audit RGPD, DPO externalisé et registre des traitements." },
  { title: "RSSI à temps partagé", desc: "Pilotage cybersécurité sans recruter en interne." },
  { title: "Réponse à incident 24/7", desc: "Cellule de crise et investigation forensique en cas d'attaque." },
];

const CityLandingPage = ({ data }: Props) => {
  const url = `https://cyberconform.fr/cybersecurite-${data.citySlug}`;
  const title = `Cybersécurité ${data.city} — Audit, NIS2, RGPD | CyberConform`;
  const description = `Cabinet de cybersécurité à ${data.city} (${data.region}). Audit, mise en conformité NIS2 et RGPD, pentest et RSSI externalisé pour les PME et ETI ${data.region.toLowerCase()}.`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `CyberConform ${data.city}`,
    description,
    url,
    telephone: "+33142685300",
    email: "contact@cyberconform.fr",
    areaServed: {
      "@type": "City",
      name: data.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      postalCode: data.postalCode,
      addressRegion: data.region,
      addressCountry: "FR",
    },
    priceRange: "€€€",
    serviceType: [
      "Audit cybersécurité",
      "Conformité NIS2",
      "Conformité RGPD",
      "Test d'intrusion",
      "RSSI externalisé",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://cyberconform.fr/" },
      { "@type": "ListItem", position: 2, name: `Cybersécurité ${data.city}`, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://cyberconform.fr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://cyberconform.fr/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Cybersécurité {data.city}</span>
            </nav>

            {/* Hero */}
            <section className="max-w-4xl mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                <MapPin className="h-3 w-3" /> {data.region}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Cybersécurité à {data.city} : audit, NIS2 et RGPD pour PME et ETI
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {data.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] min-h-[44px]"
                >
                  Diagnostic gratuit à {data.city}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+33142685300"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all min-h-[44px]"
                >
                  <Phone className="h-4 w-4" /> 01 42 68 53 00
                </a>
              </div>
            </section>

            {/* Local context */}
            <section className="max-w-4xl mb-16 rounded-2xl border border-border bg-card/50 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                Pourquoi un cabinet cyber implanté à {data.city} ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{data.localContext}</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Secteurs accompagnés</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {data.sectors.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Zones d'intervention</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {data.neighborhoods.map((n) => (
                      <li key={n} className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="max-w-5xl mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Nos services de cybersécurité à {data.city}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
                    <Shield className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats / Trust */}
            <section className="max-w-4xl mb-16 grid sm:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">PME & ETI</p>
                <p className="text-xs text-muted-foreground">Notre cœur de cible</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground">Cellule de crise cyber</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">ANSSI</p>
                <p className="text-xs text-muted-foreground">Méthodologie certifiante</p>
              </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                FAQ — Cybersécurité à {data.city}
              </h2>
              <div className="space-y-4">
                {data.faq.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-6">
                    <summary className="cursor-pointer font-semibold text-foreground list-none flex items-start justify-between gap-4">
                      {f.q}
                      <span className="text-primary text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Audit cybersécurité gratuit pour les entreprises de {data.city}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes avec un expert pour évaluer votre exposition aux cybermenaces et votre conformité NIS2 / RGPD.
              </p>
              <a
                href="/#contact"
                className="inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] min-h-[44px]"
              >
                Réserver mon diagnostic gratuit
              </a>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CityLandingPage;