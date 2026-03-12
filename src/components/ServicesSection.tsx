import { motion } from "framer-motion";
import { Target, FileSearch, MessageSquare, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tests d'intrusion",
    tag: "PENTEST",
    description:
      "Simulation d'attaques réelles pour identifier les failles de sécurité de vos systèmes, réseaux et applications avant qu'un attaquant ne le fasse.",
  },
  {
    icon: FileSearch,
    title: "Audits de sécurité",
    tag: "AUDIT",
    description:
      "Évaluation complète de votre posture de sécurité selon les référentiels ISO 27001, ANSSI et les bonnes pratiques du secteur.",
  },
  {
    icon: MessageSquare,
    title: "Conseil stratégique",
    tag: "CONSEIL",
    description:
      "Accompagnement dans la définition et la mise en œuvre de votre stratégie de cybersécurité, PSSI, conformité RGPD et NIS2.",
  },
  {
    icon: AlertTriangle,
    title: "Réponse aux incidents",
    tag: "INCIDENT",
    description:
      "Intervention rapide en cas de compromission : analyse forensique, containment, éradication et plan de remédiation complet.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 bg-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            // Nos services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Une expertise complète en{" "}
            <span className="text-gradient-cyber">cybersécurité</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-mono text-xs tracking-wider text-muted-foreground">
                  {service.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              {/* Hover glow */}
              <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
