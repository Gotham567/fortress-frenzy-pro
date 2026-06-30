import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Calendar, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const auditBenefits = [
  "Identification des failles critiques",
  "Évaluation conformité NIS2 & RGPD",
  "Recommandations prioritaires",
  "Vision claire de votre risque",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Présentation CyberConform">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="animate-scan w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left – Title & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">
                Cabinet français de cybersécurité à Paris
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Protégez vos{" "}
              <span className="text-gradient-cyber">systèmes d'information</span>
              <br />
              contre les menaces{" "}
              <span className="text-gradient-cyber">cyber</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Tests d'intrusion (pentest), audits de sécurité ISO 27001, conseil stratégique RGPD & NIS2
              et réponse aux incidents 24/7. CyberConform sécurise votre infrastructure
              avec une expertise de pointe certifiée OSCP, CEH et CISSP.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                aria-label="Demander un audit de cybersécurité gratuit"
              >
                Demander un audit gratuit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                Découvrir nos services
              </a>
            </div>
          </motion.div>

          {/* Right – Audit gratuit card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-auto"
          >
            <div className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-md shadow-xl p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-wider text-primary">
                  Offre gratuite
                </span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground leading-tight">
                Audit cybersécurité{" "}
                <span className="text-gradient-cyber">gratuit de 15 min</span>
              </h2>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Un échange rapide, sans engagement, pour identifier vos risques
                et vous orienter vers les actions prioritaires.
              </p>

              <ul className="mt-5 space-y-2.5">
                {auditBenefits.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>15 min · 100 % gratuit · Sans engagement</span>
              </div>

              <a
                href="https://calendly.com/lakaoub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Prendre rendez-vous
              </a>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                📅 Visioconférence via Calendly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
