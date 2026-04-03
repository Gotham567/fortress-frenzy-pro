import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Clock, CheckCircle } from "lucide-react";

const benefits = [
  "Identification des failles critiques de votre SI",
  "Évaluation de votre niveau de conformité NIS2 & RGPD",
  "Recommandations d'actions prioritaires",
  "Vision claire de votre niveau de risque",
];

const AuditGratuitSection = () => {
  return (
    <section id="audit-gratuit" className="relative py-24 overflow-hidden" aria-label="Audit cybersécurité gratuit">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left – Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">
                    Offre gratuite
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  Audit cybersécurité{" "}
                  <span className="text-gradient-cyber">gratuit de 15 min</span>
                </h2>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nous vous proposons un échange rapide et sans engagement pour identifier
                  les principaux risques liés à votre cybersécurité et vous orienter vers
                  les actions prioritaires à mettre en place.
                </p>

                <ul className="mt-6 space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>15 minutes · 100 % gratuit · Sans engagement</span>
                </div>
              </motion.div>
            </div>

            {/* Right – CTA */}
            <div className="flex flex-col items-center justify-center bg-primary/5 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  Réservez votre créneau
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Choisissez la date et l'heure qui vous conviennent le mieux.
                </p>

                <a
                  href="https://calendly.com/many-cyberconform/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  Prendre rendez-vous
                </a>

                <p className="mt-4 text-xs text-muted-foreground">
                  📅 Rendez-vous en visioconférence via Calendly
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditGratuitSection;
