import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Certifications OSCP, CEH, CISSP",
  "Méthodologie OWASP & PTES",
  "Conformité ISO 27001 & SOC 2",
  "Expertise ANSSI & NIS2",
  "Analyse forensique avancée",
  "Red Team & Purple Team",
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              // Pourquoi nous
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Une équipe d'experts{" "}
              <span className="text-gradient-cyber">certifiés</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Notre équipe réunit des consultants et ingénieurs expérimentés, passionnés par la sécurité offensive et défensive. Nous combinons rigueur méthodologique et innovation pour protéger vos actifs numériques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-md border border-border bg-card px-5 py-3.5 transition-colors hover:border-primary/30"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
