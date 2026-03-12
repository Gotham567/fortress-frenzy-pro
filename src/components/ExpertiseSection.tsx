import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  { label: "Certifications OSCP, CEH, CISSP", desc: "Les certifications les plus reconnues en sécurité offensive et défensive" },
  { label: "Méthodologie OWASP & PTES", desc: "Standards internationaux pour les tests d'intrusion" },
  { label: "Conformité ISO 27001 & SOC 2", desc: "Accompagnement vers les certifications de référence" },
  { label: "Expertise ANSSI & NIS2", desc: "Conformité aux exigences françaises et européennes" },
  { label: "Analyse forensique avancée", desc: "Investigation numérique et collecte de preuves" },
  { label: "Red Team & Purple Team", desc: "Simulation d'attaques avancées et collaboration défensive" },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-28" aria-label="Notre expertise en cybersécurité">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              // Pourquoi nous choisir
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Une équipe d'experts{" "}
              <span className="text-gradient-cyber">certifiés</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Notre équipe réunit des consultants et ingénieurs expérimentés, passionnés par la sécurité
              offensive et défensive. Nous combinons rigueur méthodologique et innovation pour protéger
              vos actifs numériques contre les menaces les plus sophistiquées.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Avec plus de 15 ans d'expérience et 500 missions réalisées auprès de grands comptes,
              ETI et PME françaises, SentinelCyber est un partenaire de confiance reconnu dans
              l'écosystème cybersécurité français.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
            role="list"
            aria-label="Nos certifications et méthodologies"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-md border border-border bg-card px-5 py-3.5 transition-colors hover:border-primary/30"
                role="listitem"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
