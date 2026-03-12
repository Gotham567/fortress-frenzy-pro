import { motion } from "framer-motion";
import { Target, FileSearch, MessageSquare, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tests d'intrusion (Pentest)",
    tag: "PENTEST",
    description:
      "Simulation d'attaques réelles pour identifier les failles de sécurité de vos systèmes, réseaux et applications web avant qu'un attaquant ne le fasse. Nos experts certifiés OSCP utilisent les méthodologies OWASP et PTES.",
    details: [
      "Pentest applicatif (web, mobile, API)",
      "Pentest réseau interne et externe",
      "Pentest d'infrastructure cloud (AWS, Azure, GCP)",
      "Tests de social engineering",
    ],
  },
  {
    icon: FileSearch,
    title: "Audits de sécurité informatique",
    tag: "AUDIT",
    description:
      "Évaluation complète de votre posture de sécurité selon les référentiels ISO 27001, ANSSI et les bonnes pratiques du secteur. Nos audits couvrent l'organisation, les processus et la technique.",
    details: [
      "Audit de conformité ISO 27001 & SOC 2",
      "Audit d'architecture et de configuration",
      "Revue de code sécurité",
      "Évaluation de maturité cybersécurité",
    ],
  },
  {
    icon: MessageSquare,
    title: "Conseil en cybersécurité",
    tag: "CONSEIL",
    description:
      "Accompagnement dans la définition et la mise en œuvre de votre stratégie de cybersécurité, politique de sécurité (PSSI), conformité RGPD et directive européenne NIS2.",
    details: [
      "Mise en conformité RGPD et NIS2",
      "Rédaction de PSSI et procédures",
      "Gouvernance et gestion des risques",
      "Formation et sensibilisation des équipes",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Réponse aux incidents de sécurité",
    tag: "INCIDENT",
    description:
      "Intervention rapide 24/7 en cas de compromission : analyse forensique numérique, containment, éradication de la menace et plan de remédiation complet pour reprendre l'activité.",
    details: [
      "SOC managé 24/7",
      "Analyse forensique (digital forensics)",
      "Gestion de crise cyber",
      "Plan de continuité et reprise d'activité",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 bg-grid" aria-label="Nos services de cybersécurité">
      <div className="container mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            // Nos services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Une expertise complète en{" "}
            <span className="text-gradient-cyber">cybersécurité</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            De la prévention à la réponse aux incidents, SentinelCyber propose une gamme complète
            de services pour protéger les entreprises françaises contre les cybermenaces.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs tracking-wider text-muted-foreground">
                  {service.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2" role="list">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              {/* Hover glow */}
              <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
